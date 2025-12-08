# Kunnskapsbank Architecture

## Current Architecture Diagram

```mermaid
graph TD
    A[KunnskapsbankPage] --> B[Sametinget]
    A --> C[Bedrifter]
    A --> D[Organisasjoner]

    B --> B1[kultur-sprak]
    B --> B2[naeringsstotte]
    B --> B3[institusjonsutvikling]
    B --> B4[duodji]

    C --> C1[tiltakssonen]
    C --> C2[handel]
    C1 --> C1a[arbeidsgiveravgift]
    C1 --> C1b[finnmarksfradrag]
    C2 --> C2a[kassasystem]

    D --> D1[stotteordninger]
    D --> D2[momskompensasjon]
    D --> D3[idrettslag]

    style A fill:#f9f,stroke:#333
    style B fill:#bbf,stroke:#333
    style C fill:#bbf,stroke:#333
    style D fill:#bbf,stroke:#333
```

## Proposed Architecture Options

### Option 1: Minimal Migration (Recommended)

```mermaid
graph TD
    A[KunnskapsbankPage] --> B[Sametinget Hub]
    A --> C[Bedrifter Hub]
    A --> D[Organisasjoner Hub]

    B --> B1[kultur-sprak]
    B --> B2[naeringsstotte]
    B --> B3[institusjonsutvikling]
    B --> B4[duodji]

    C --> C1[tiltakssonen]
    C --> C2[handel]
    C1 --> C1a[arbeidsgiveravgift]
    C1 --> C1b[finnmarksfradrag]
    C2 --> C2a[kassasystem]

    D --> D1[stotteordninger]
    D --> D2[momskompensasjon]
    D --> D3[idrettslag]

    style A fill:#f9f,stroke:#333
    style B fill:#f96,stroke:#333
    style C fill:#f96,stroke:#333
    style D fill:#f96,stroke:#333
```

### Option 2: Complete Restructuring

```mermaid
graph TD
    A[KunnskapsbankPage] --> B[Sametinget]
    A --> C[Bedrifter]
    A --> D[Organisasjoner]

    B --> B1[kultur-sprak]
    B --> B2[naeringsstotte]
    B --> B3[institusjonsutvikling]
    B --> B4[duodji]

    C --> C1[tiltakssonen/arbeidsgiveravgift]
    C --> C2[tiltakssonen/finnmarksfradrag]
    C --> C3[handel/kassasystem]

    D --> D1[stotteordninger]
    D --> D2[momskompensasjon]
    D --> D3[idrettslag]

    style A fill:#f9f,stroke:#333
    style B fill:#bbf,stroke:#333
    style C fill:#bbf,stroke:#333
    style D fill:#bbf,stroke:#333
```

## Key Architectural Decisions

### 1. Hub Page Strategy
**Current:** No hub pages, direct linking to content
**Proposed:** Create category hub pages that:
- List all sub-pages in the category
- Provide category-specific navigation
- Include featured content
- Offer search/filter functionality

### 2. URL Structure
**Current:** `/kunnskapsbank/sametinget/kultur-sprak`
**Options:**
- Keep current structure (recommended for SEO)
- Flatten to `/kunnskapsbank/kultur-sprak`
- Use `/kunnskapsbank/sametinget/kultur-sprak` (current)

### 3. Legacy Page Migration
**Current:** Separate legacy pages exist
**Options:**
- Replace with new hub pages
- Keep separate and link from hub pages
- Gradually migrate content to new structure

### 4. Component Architecture
**Proposed Component Structure:**
```
KunnskapsbankPage (Main Hub)
├── CategoryHub (Sametinget/Bedrifter/Organisasjoner)
│   ├── CategoryHeader
│   ├── ContentGrid
│   ├── FeaturedContent
│   └── CategoryNavigation
└── ContentPage (Individual guides)
    ├── SEO
    ├── HeroSection
    ├── ContentBody
    ├── RelatedContent
    └── CTA
```

## Implementation Recommendations

1. **Start with Hub Pages:**
   - Create `SametingetHub.tsx`, `BedrifterHub.tsx`, `OrganisasjonerHub.tsx`
   - These replace the legacy category pages
   - Include navigation to all sub-pages

2. **Update Routing:**
   - Add hub page routes
   - Keep existing content page routes
   - Update imports to use new structure

3. **Gradual Migration:**
   - Keep current content pages as-is
   - Add new content to the structured system
   - Migrate legacy content over time

4. **SEO Considerations:**
   - Maintain existing URLs for SEO
   - Add proper redirects if URLs change
   - Ensure all pages have proper SEO metadata

## Discussion Questions

1. Should we create visual hub pages for each category?
2. What should be the primary navigation flow?
3. How should we handle the transition from legacy pages?
4. Should we implement search functionality at the category level?
5. What's the priority for content migration vs. new development?