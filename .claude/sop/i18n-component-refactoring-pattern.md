# i18n Component Refactoring Pattern

## Pattern 1: Simple Components with Hardcoded Strings

### Before
```tsx
const MyComponent = () => {
  return (
    <h1>Welcome to our site</h1>
    <p>This is a description</p>
  );
};
```

### After
```tsx
'use client';

import { useTranslations } from 'next-intl';

const MyComponent = () => {
  const t = useTranslations('mycomponent');

  return (
    <h1>{t('heading')}</h1>
    <p>{t('description')}</p>
  );
};
```

### Translation Keys (en.json, de.json)
```json
{
  "mycomponent": {
    "heading": "Welcome to our site",
    "description": "This is a description"
  }
}
```

---

## Pattern 2: Components with Arrays (t.raw)

### Before
```tsx
const Services = () => {
  const services = [
    { title: "Service 1", desc: "Description 1" },
    { title: "Service 2", desc: "Description 2" }
  ];
  
  return (
    <div>
      {services.map(s => (
        <div key={s.title}>
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
        </div>
      ))}
    </div>
  );
};
```

### After
```tsx
'use client';

import { useTranslations } from 'next-intl';

const Services = () => {
  const t = useTranslations('services');
  const services = t.raw('items') as Array<{title: string; desc: string}>;

  return (
    <div>
      {services.map(s => (
        <div key={s.title}>
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
        </div>
      ))}
    </div>
  );
};
```

### Translation Keys
```json
{
  "services": {
    "items": [
      { "title": "Service 1", "desc": "Description 1" },
      { "title": "Service 2", "desc": "Description 2" }
    ]
  }
}
```

---

## Pattern 3: Components with Props + Defaults

### Before
```tsx
interface MyComponentProps {
  heading?: string;
  items?: string[];
}

const MyComponent = ({
  heading = "Default Heading",
  items = ["Item 1", "Item 2"]
}: MyComponentProps) => {
  // ...
};
```

### After
```tsx
'use client';

import { useTranslations } from 'next-intl';

interface MyComponentProps {
  heading?: string;
  items?: string[];
}

const MyComponent = ({
  heading,
  items
}: MyComponentProps) => {
  const t = useTranslations('mycomponent');
  const finalHeading = heading || t('heading');
  const finalItems = items || (t.raw('items') as string[]);

  // ... use finalHeading and finalItems
};
```

---

## Refactoring Checklist

For EACH component:

1. [ ] Add 'use client' at top
2. [ ] Import useTranslations from 'next-intl'
3. [ ] Add: `const t = useTranslations('componentname')`
4. [ ] For arrays: `const data = t.raw('arraykey') as Type[];`
5. [ ] For props with defaults: `const final = value || t('key')`
6. [ ] Replace ALL hardcoded strings with t() calls
7. [ ] Add keys to en.json and de.json with identical structure
8. [ ] Keep non-text code unchanged (icons, classNames, URLs, functions)

---

## Components Already Refactored (7)
- hero129 ✓
- services6 ✓
- navbar22 ✓
- footer24 ✓
- faq5 ✓
- team1 ✓
- hero229 (partially)

## Remaining Components (26)
about16, contact11, contact16, contact5, contact9, cta21, feature2, feature10, feature124, feature33, hero175, hero2, hero58, process1, process2, projects6, services4, stats17, stats19, team13, testimonial19, testimonial25, testimonial8, timeline10, faq14, structured-data

---

## Key Naming Convention

Pattern: `{namespace}.{section}.{element}`

Examples:
- `hero129.title` - Main h1 text
- `hero129.description` - Main p text
- `hero129.buttons.cta` - Button text
- `contact9.form.submitButton` - Form submit
- `common.navbar.home` - Shared nav link

---

## Testing After Refactoring

1. Verify component imports correctly
2. Check 'use client' is at top
3. Ensure all hardcoded text uses t()
4. Validate translation keys exist in en.json AND de.json
5. Check component still renders (if possible to test locally)

---

## Common Mistakes

X Don't: Hardcode strings that should come from translations
X Don't: Forget 'use client' directive in components using hooks
X Don't: Use different key names in en.json vs de.json
X Don't: Forget t.raw() for complex objects/arrays
X Don't: Leave translation keys empty or with wrong structure

✓ Do: Use consistent namespacing
✓ Do: Keep non-text code (icons, URLs, functions) unchanged
✓ Do: Use t.raw() with type casting for arrays
✓ Do: Maintain structure consistency between en.json and de.json
