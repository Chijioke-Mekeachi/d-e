0# Backend API Specifications for D&E Dominion Technical Frontend

## Overview
This specification documents the backend endpoints needed to support the current frontend application at `/src`. The frontend currently uses localStorage simulation through `src/storage.ts` for form persistence and section data, so the backend should replace those client-only behaviors for production.

## Sections Requiring Backend Endpoints

### 1. Contact / Consultation Inquiry
- Component: `src/components/Contact.tsx`
- Current behavior: submits inquiry to `StorageService.addContact(...)` and stores leads in browser `localStorage`.
- Required backend responsibility:
  - persist contact/consultation inquiries to a database
  - send notification or email if required
  - return lead metadata for UI confirmation

#### Endpoint
- `POST /api/contact-inquiries`

##### Request body (JSON or multipart/form-data if attachments are included)
- `fullName` (string, required)
- `companyName` (string, optional)
- `email` (string, required)
- `phone` (string, optional)
- `serviceInterest` (string, required)
- `message` (string, required)
- `preferredMethod` ("Email" | "Phone", required)
- `attachment` (file, optional) - project drawings, spec files, or engineering documents

##### Response (201 Created)
- `success` (boolean)
- `id` (string)
- `createdAt` (ISO timestamp)
- `status` (string, e.g. `Pending`)
- `autoReply` (string)
- `lead` (object with saved fields)

##### Example response
{
  "success": true,
  "id": "CON-2026-A1B2",
  "createdAt": "2026-07-23T12:34:56Z",
  "status": "Pending",
  "autoReply": "Your consultation inquiry has been received...",
  "lead": {
    "id": "CON-2026-A1B2",
    "fullName": "Engr. Clara Briggs",
    "companyName": "Atlantic Refinery Corp",
    "email": "c.briggs@atlantic.com",
    "phone": "08064446220",
    "serviceInterest": "Maintenance & Monitoring",
    "message": "...",
    "preferredMethod": "Email",
    "status": "Pending",
    "createdAt": "2026-07-23T12:34:56Z"
  }
}

##### Notes
- Validate required fields on the server.
- Use server-side spam protection instead of relying on client-only captcha logic.
- If file attachments are supported, store them in object storage and include attachment metadata.

### 2. RFQ Proposal Request
- Component: `src/components/RFQForm.tsx`
- Current behavior: submits RFQ request to `StorageService.addRFQ(...)` and stores in browser `localStorage`.
- Required backend responsibility:
  - persist RFQ leads in CRM database
  - return generated proposal metadata and ID
  - optionally trigger email or workflow notifications

#### Endpoint
- `POST /api/rfqs`

##### Request body (JSON or multipart/form-data if attachments are included)
- `fullName` (string, required)
- `companyName` (string, optional)
- `email` (string, required)
- `phone` (string, optional)
- `projectType` (string, required)
- `estimatedSize` (string, optional)
- `timeline` (string, required)
- `budgetRange` (string, required)
- `description` (string, required)
- `selectedProducts` (string[], optional)
- `attachment` (file, optional)

##### Response (201 Created)
- `success` (boolean)
- `id` (string)
- `createdAt` (ISO timestamp)
- `status` (string, e.g. `Pending`)
- `autoReply` (string)
- `rfq` (object with saved fields)

##### Example response
{
  "success": true,
  "id": "RFQ-2026-B3C4",
  "createdAt": "2026-07-23T12:40:00Z",
  "status": "Pending",
  "autoReply": "Your custom quotation request has been mapped successfully...",
  "rfq": {
    "id": "RFQ-2026-B3C4",
    "fullName": "Chief Engr. Williams Alabi",
    "companyName": "Niger Delta Marine Corp",
    "email": "williams@deltamarine.com",
    "phone": "08031122334",
    "projectType": "New Installation",
    "estimatedSize": "45km pipeline",
    "timeline": "3 Months",
    "budgetRange": "$50k - $100k",
    "description": "...",
    "selectedProducts": ["Transformer Rectifiers Installation"],
    "status": "Pending",
    "createdAt": "2026-07-23T12:40:00Z"
  }
}

##### Notes
- Validate `email` format and required project description fields.
- Preserve the selected products list for quote preparation.
- Return the RFQ status for UI receipt display.

### 3. Services Listing
- Component: `src/components/Services.tsx`
- Current behavior: loads services from `StorageService.getServices()` and falls back to static `SERVICES`.
- Required backend responsibility if content should be dynamic:

#### Endpoint
- `GET /api/services`

##### Response (200 OK)
- `services` (array of service objects)

##### Service model
- `id` (string)
- `title` (string)
- `iconName` (string)
- `shortDesc` (string)
- `fullDesc` (string)
- `deliverables` (string[])
- `industries` (string[])
- `image` (string)

##### Notes
- The app currently expects service objects matching `src/types.ts`.
- This endpoint is optional only if the site should serve dynamic service content from the backend instead of static JSON.

### 4. Case Studies / Projects Listing
- Component: `src/components/Projects.tsx`
- Current behavior: loads project case studies from `StorageService.getProjects()` and falls back to static `CASE_STUDIES`.
- Required backend responsibility if content should be dynamic:

#### Endpoint
- `GET /api/projects`

##### Response (200 OK)
- `projects` (array of case study objects)

##### CaseStudy model
- `id` (string)
- `clientName` (string)
- `industry` (string)
- `challenge` (string)
- `solution` (string)
- `results` (string)
- `assetLifeExtension` (string)
- `efficiencyMTR` (string)
- `image` (string)

##### Notes
- This endpoint is optional unless the case studies should be managed from a backend content store.

### 5. Products Catalog (Optional)
- Component: `src/components/Products.tsx`
- Current behavior: reads product data from static `PRODUCTS` in `src/data.ts`.
- Backend responsibility if the catalog and datasheets should be dynamic:

#### Endpoint
- `GET /api/products`

##### Response (200 OK)
- `products` (array of product objects)

##### Product model
- `id` (string)
- `category` (string)
- `name` (string)
- `shortDesc` (string)
- `specs` (object)
- `features` (string[])
- `applications` (string[])
- `image` (string)
- `datasheetAvailable` (boolean)

##### File download endpoint
- `GET /api/products/:id/datasheet`
- purpose: serve actual PDF datasheets instead of frontend alert simulation.

##### Notes
- This endpoint is optional and only needed if the product catalog should be maintained on the backend.

### 6. Engineer Chat / AI Assistant (Optional)
- Component: `src/components/EngineerChat.tsx`
- Current behavior: local canned responses inside the component.
- Required backend responsibility for real conversational AI:

#### Endpoint
- `POST /api/chat`

##### Request body
- `message` (string, required)
- `sessionId` (string, optional)
- `context` (object, optional)

##### Response
- `reply` (string)
- `sessionId` (string, optional)
- `metadata` (object, optional)

##### Notes
- Use this endpoint only if you want a production-quality chat assistant.
- The current frontend component can remain unchanged if you integrate backend chat logic through a new request handler.

## Shared Data Models

### ContactLead
- `id`: string
- `fullName`: string
- `companyName?`: string
- `email`: string
- `phone?`: string
- `serviceInterest`: string
- `message`: string
- `preferredMethod`: "Email" | "Phone"
- `status`: "Pending" | "Under Review" | "Quote Sent" | "Closed"
- `createdAt`: string

### RFQLead
- `id`: string
- `fullName`: string
- `companyName?`: string
- `email`: string
- `phone?`: string
- `projectType`: string
- `estimatedSize`: string
- `timeline`: string
- `budgetRange`: string
- `description`: string
- `selectedProducts`: string[]
- `status`: "Pending" | "Under Review" | "Quote Sent" | "Closed"
- `createdAt`: string

## Implementation Notes
- The frontend code in `src/storage.ts` currently simulates persistence. Replace `StorageService.addContact()` and `StorageService.addRFQ()` with backend API calls in the future.
- `Services` and `Projects` components already use `StorageService.getServices()` / `StorageService.getProjects()`. Implement backend content endpoints if dynamic content is desired.
- The `EngineerChat` component is currently offline/canned and does not require a backend unless a real AI assistant is intended.
- For attachments, prefer `multipart/form-data` or a separate upload endpoint and return attachment metadata.
- Implement server-side validation, spam filtering, and email/workflow notifications where appropriate.

## Suggested Route Summary
- `POST /api/contact-inquiries`
- `POST /api/rfqs`
- `GET /api/services` (optional)
- `GET /api/projects` (optional)
- `GET /api/products` (optional)
- `GET /api/products/:id/datasheet` (optional)
- `POST /api/uploads` (optional attachment gateway)
- `POST /api/chat` (optional)

## Frontend Component Mapping
- `src/components/Contact.tsx` → `POST /api/contact-inquiries`
- `src/components/RFQForm.tsx` → `POST /api/rfqs`
- `src/components/Services.tsx` → `GET /api/services`
- `src/components/Projects.tsx` → `GET /api/projects`
- `src/components/Products.tsx` → `GET /api/products` and `GET /api/products/:id/datasheet` (if made dynamic)
- `src/components/EngineerChat.tsx` → `POST /api/chat`

---

This document should be used as the backend implementation guide for the current frontend app.