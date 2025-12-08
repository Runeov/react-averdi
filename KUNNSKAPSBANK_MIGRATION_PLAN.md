# Kunnskapsbank Migration Plan

## Current Structure Analysis

### File System Structure
```
src/pages/kunnskapsbank/
├── sametinget/
│   ├── kultur-sprak.tsx
│   ├── naeringsstotte.tsx
│   ├── institusjonsutvikling.tsx
│   └── duodji.tsx
├── bedrifter/
│   ├── tiltakssonen/
│   │   ├── arbeidsgiveravgift.tsx
│   │   └── finnmarksfradrag.tsx
│   └── handel/
│       └── kassasystem.tsx
└── organisasjoner/
    ├── stotteordninger.tsx
    ├── momskompensasjon.tsx
    └── idrettslag.tsx
```

### Current Routing Structure
The current routing in `src/App.tsx` shows:

**Sametinget Hub (4 pages):**
- `/kunnskapsbank/sametinget/kultur-sprak`
- `/kunnskapsbank/sametinget/naeringsstotte`
- `/kunnskapsbank/sametinget/institusjonsutvikling`
- `/kunnskapsbank/sametinget/duodji`

**Bedrifter Hub (3 pages):**
- `/kunnskapsbank/bedrifter/tiltakssonen/arbeidsgiveravgift`
- `/kunnskapsbank/bedrifter/tiltakssonen/finnmarksfradrag`
- `/kunnskapsbank/bedrifter/handel/kassasystem`

**Organisasjoner Hub (3 pages):**
- `/kunnskapsbank/organisasjoner/stotteordninger`
- `/kunnskapsbank/organisasjoner/momskompensasjon`
- `/kunnskapsbank/organisasjoner/idrettslag`

### Legacy Pages (to be migrated)
- `/kunnskapsbank/sametinget` (SametingetPage.tsx)
- `/kunnskapsbank/handel` (HandelPage.tsx)
- `/kunnskapsbank/organisasjoner` (OrganisasjonPage.tsx)
- `/kunnskapsbank/tiltakssonen` (TiltakssonenGuidePage.tsx)

## Migration Strategy

### Phase 1: Current State Assessment
✅ **COMPLETED** - Analyzed current file structure and routing
✅ **COMPLETED** - Mapped existing 3 categories

### Phase 2: Architectural Planning
**Proposed New Structure:**
```
src/pages/kunnskapsbank/
├── [Category]/
│   ├── [Subcategory]/
│   │   └── [Topic].tsx
│   └── index.tsx (Category Hub Page)
└── index.tsx (Main Kunnskapsbank Page)
```

**Key Decisions Needed:**

1. **Category Hub Pages:**
   - Should we create hub pages for each category (sametinget, bedrifter, organisasjoner)?
   - These would replace the legacy pages and serve as entry points

2. **URL Structure:**
   - Current: `/kunnskapsbank/sametinget/kultur-sprak`
   - Should we keep this structure or flatten it?

3. **Legacy Page Migration:**
   - Should legacy pages be replaced by new hub pages or kept as separate entities?

4. **Component Reusability:**
   - Should we create reusable templates for the different page types?

### Phase 3: Implementation Options

**Option A: Minimal Migration (Recommended)**
- Keep current file structure as-is
- Create hub pages for each category
- Update routing to include hub pages
- Gradually migrate legacy pages

**Option B: Complete Restructuring**
- Flatten the structure
- Create new hub pages
- Migrate all content to new structure
- Update all routes and imports

**Option C: Hybrid Approach**
- Keep current structure for new pages
- Create hub pages for categories
- Keep legacy pages separate
- Gradually migrate content over time

## Discussion Points for User

1. **Hub Pages:** Should we create category hub pages that list all sub-pages?
2. **Legacy Content:** How should we handle the existing legacy pages?
3. **URL Structure:** Should we maintain current URLs or create new ones?
4. **Implementation Timeline:** Should this be done all at once or incrementally?
5. **Content Migration:** Should we move content from legacy pages to new structure?

## Recommended Next Steps

1. ✅ Create architectural diagram
2. ✅ Finalize migration strategy with user
3. ⏳ Implement hub pages
4. ⏳ Update routing configuration
5. ⏳ Migrate legacy content