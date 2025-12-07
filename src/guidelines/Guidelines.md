# System Guidelines

* Use responsive, well-structured layouts with flexbox and grid by default
* Only use absolute positioning when strictly necessary (icons, overlays)
* Keep code clean and refactor as you go
* Put helper functions and components in separate files
* Follow the established spacing scale - never use arbitrary values
* Maintain consistent border-radius across similar elements
* Use semantic color tokens, not raw hex values
* Use Open Sans as the primary font family throughout

---

# Design System Guidelines

## Colors

### Background Colors
Use the layered dark theme with these semantic backgrounds:

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-base` | `#282e36` | Primary surface, main containers |
| `--bg-stronger1` | `#22272e` | Elevated surfaces, input backgrounds |
| `--bg-stronger2` | `#1a1e24` | Deepest background, app shell |
| `--interactive-g1-enable` | `#282e36` | Interactive element default state |
| `--interactive-g2-enable` | `#303745` | Card backgrounds, hover states |

### Text & Icon Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--text-and-icon-stronger1` | `#f2f3f5` | Primary headings, emphasized text |
| `--text-and-icon-base` | `#dfe1e5` | Body text, labels |
| `--text-and-icon-weaker1` | `#bdc1c9` | Secondary text, placeholders, descriptions |
| `--text-and-icon-always-white` | `#ffffff` | Text on colored backgrounds |
| `--text-and-icon-inverse` | `#192338` | Text on light backgrounds |
| `--text-and-icon-validation` | `#f07e86` | Error states, validation messages |

### Border Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--border-base` | `#464b59` | Default borders, dividers |
| `--border-weaker1` | `#303745` | Subtle borders, disabled states |
| `--border-stronger1` | `#626773` | Emphasized borders, focus states |

### Communication/Semantic Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--communication-green-base` | `#36cc68` | Success states, positive indicators |
| `--communication-blue-base` | `#3ea8ff` | Info, links, active states |
| `--communication-teal-base` | `#26dac5` | Accent, highlights, special text |
| `--communication-grey-base` | `#adb1ba` | Neutral badges, muted elements |
| `--communication-dynamic-base` | `#464b59` | Dynamic/interactive indicators |

### Interactive Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--interactive-primary-enable` | `#2868fc` | Primary buttons, links |
| `--disabled-stronger2` | `#808080` | Disabled text |
| `--disabled-weaker3` | `#35393f` | Disabled button backgrounds |

### Fixed/Special Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--fixed-mint-600` | `#06887c` | Teal accent variant |
| `--U-deep-purple-300` | `#968DFE` | Purple accent |
| `--N30` | `#4F6B84` | Blue-gray neutral |

| ✅ Do | 🚫 Don't |
|-------|----------|
| Use semantic tokens like `--bg-base` | Use raw hex values like `#282e36` |
| Layer backgrounds from darker to lighter | Use the same background for nested elements |
| Use `--communication-teal-base` for emphasis | Use blue for all accent colors |

---

## Typography

### Font Family
**Primary:** Open Sans (all weights)
```css
font-family: 'Open Sans', sans-serif;
```

### Type Scale

| Style | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| **H4** | 14px | Bold (700) | 100% (19px) | -0.5px | Section headers, card titles |
| **H5** | 14px | Regular (400) | 100% | 0px | Subheaders |
| **Display** | 24px | SemiBold (600) | 32px | -0.48px | Large headings, hero text |
| **Body1** | 12px | Regular (400) | 16px | 0px | Primary body text |
| **Body2** | 12px | Bold (700) | 16px | 0.4px | Emphasized body text |
| **Body4** | 12px | Italic (400) | 16px | 0px | Placeholder text, hints |
| **Body5** | 11px | Regular (400) | 16px | 0px | Small text, captions |
| **Subtitle2** | 11px | Bold (700) | 15px | 0.2px | Badges, labels |
| **Subtitle3** | 11px | SemiBold (600) | 100% | 0.4px | Secondary labels |
| **Button1** | 12px | Bold (700) | 16px | 0.6px | Button labels |
| **Title Medium** | 14px | Regular (400) | inherit | 0px | Card descriptions |

### Typography Rules

| ✅ Do | 🚫 Don't |
|-------|----------|
| Use Body1 (12px) for most interface text | Use font sizes smaller than 11px |
| Use negative letter-spacing for headings | Use positive letter-spacing for large text |
| Apply Bold weight to interactive elements | Mix more than 2 weights in a component |
| Use SemiBold for gradient/highlight text | Use italic for anything except placeholders |

---

## Spacing

### Base Unit: 4px

### Spacing Scale
| Token | Value | Usage |
|-------|-------|-------|
| `xs` | 4px | Icon gaps, tight padding |
| `sm` | 8px | Default gap between elements |
| `md` | 16px | Container padding, section gaps |
| `lg` | 24px | Large section separation |
| `xl` | 48px | Major content blocks |

### Common Patterns
- **Card padding:** 16px
- **Button padding:** 3-9px vertical, varies by size
- **Input padding:** 16px
- **Header height:** 40px
- **Icon sizes:** 14px (S), 18px (M)
- **Interactive heights:** 20px (S), 30px (M), 36px (L)

| ✅ Do | 🚫 Don't |
|-------|----------|
| Use 8px gaps between related elements | Use 5px or 7px spacing |
| Apply 16px padding for containers | Mix different padding values in similar components |
| Maintain 4px as minimum spacing | Use spacing smaller than 4px |

---

## Components

### Buttons

#### Icon Button (Small)
```
Size: 20px × 20px
Padding: 3px
Border-radius: 4px
Background: transparent
Icon size: 14px
```

#### Send Button (Primary Action)
```
Size: 36px height
Padding: 9px horizontal, 3px vertical
Border-radius: 36px (pill)
Background: --disabled-weaker3 (#35393f) when disabled
           --interactive-primary-enable (#2868fc) when active
Icon size: 18px
```

#### Button States
- **Default:** Transparent or --interactive-g2-enable background
- **Hover:** --interactive-g2-enable with subtle opacity
- **Disabled:** --disabled-weaker3 background
- **Active:** --interactive-primary-enable background

### Cards/Options

#### Suggestion Card
```
Background: --interactive-g2-enable (#303745)
Border: 1px solid --border-base (#464b59)
Border-radius: 8px
Padding: 16px
Layout: flex, row
Icon area: 14px icon with 8px right padding
```

#### Content Structure
- **Title:** 14px Bold, --text-and-icon-base
- **Description:** 14px Regular, --text-and-icon-weaker1
- **Icon:** 14px, --text-and-icon-base (#dfe1e5)

### Input Fields

#### Chat Input
```
Background: --bg-stronger1 (#22272e)
Border: 1px solid --border-base (#464b59)
Border-radius: 16px
Padding: 16px
Min-height: auto-grow
```

#### Placeholder Text
- Font: 16px Italic
- Color: --text-and-icon-weaker1 (#bdc1c9)

### Pills/Badges

#### Status Pill (Small)
```
Height: 18px
Padding: 1px top, 2px bottom, 6px horizontal
Border: 1px solid (color matches text)
Border-radius: 4px
Font: 11px Bold, uppercase
Letter-spacing: 0.2px
```

#### Badge Colors
- **Beta/Neutral:** --communication-grey-base (#adb1ba)
- **Success:** --communication-green-base (#36cc68)
- **Info:** --communication-blue-base (#3ea8ff)

### Chat Panel

#### Container
```
Background: --bg-base (#282e36)
Border: 2px solid --border-base (#464b59)
Border-radius: 8px
Shadow: shadow_XXL (complex layered shadow)
Padding: 4px outer
```

#### Shadow Definition
```css
box-shadow: 
  0px 16px 30px rgba(0, 0, 0, 0.4),
  0px 24px 104px rgba(0, 0, 0, 0.4);
```

#### Panel Structure
1. **Header:** 40px height, bottom border
2. **Body:** Flex-grow, max-width 800px, centered
3. **Footer:** Fixed bottom, max-width 800px

### Avatar
```
Size: Based on context (appears ~32px in schedules)
Shape: Circle
Background: Colored (e.g., yellow-green #9ACD32 range)
Text: 2-letter initials, centered
```

---

## Shadows

| Token | Definition | Usage |
|-------|------------|-------|
| `shadow_S` | `0 4px 15px rgba(0,0,0,0.3), 0 4px 6px rgba(0,0,0,0.3)` | Small elements, dropdowns |
| `shadow_XXL` | `0 24px 104px rgba(0,0,0,0.4), 0 16px 30px rgba(0,0,0,0.4)` | Modals, floating panels |

---

## Border Radius

| Element | Radius |
|---------|--------|
| Cards, containers | 8px |
| Chat input | 16px |
| Buttons (pill) | 36px or full-height |
| Small buttons, badges | 4px |
| Icons | 2px |

---

## Layout

### Flexbox Patterns
- **Horizontal distribution:** `flex` + `justify-between` for headers
- **Vertical stacking:** `flex-col` + `gap-8` for content
- **Centering:** `items-center` + `justify-center`

### Z-Index Layering
| Layer | Z-Index | Usage |
|-------|---------|-------|
| Base content | 1 | Body, main area |
| Sticky elements | 2 | Footer input |
| Header | 3 | Top navigation |

### Max Widths
- **Chat body content:** 800px
- **Full width elements:** Use `w-full`

### Overflow Handling
- Containers: `overflow-clip`
- Scrollable areas: `overflow-auto`

| ✅ Do | 🚫 Don't |
|-------|----------|
| Use `gap` for spacing between flex children | Use margins for flex item spacing |
| Apply `shrink-0` to prevent unwanted shrinking | Let all elements shrink by default |
| Use `min-h-px min-w-px` for flex children | Forget to handle zero-size edge cases |

---

## Icons

### Sizes
- **Small (S):** 14px × 14px
- **Medium (M):** 18px × 18px

### Icon Color
- Default: --text-and-icon-base (#dfe1e5)
- Fill style: Use `--fill-0` CSS variable for SVG fills

### Common Icons
- Expand, Timer, Write/New, Download, Bolt, Bus, Send, Close

---

## Animation & States

### Transitions
Apply smooth transitions for:
- Background color changes
- Border color changes
- Opacity changes

### State Indicators
- **Focus:** Use --border-stronger1 for focus rings
- **Hover:** Subtle background lightening
- **Active:** --interactive-primary-enable for selected states
- **Disabled:** Reduced opacity, --disabled colors

---

## Dark Theme Notes

This design system is built for dark mode. Key principles:
1. Use darker backgrounds for recessed areas
2. Layer lighter backgrounds for elevated elements
3. Maintain sufficient contrast (WCAG AA minimum)
4. Use muted colors for secondary information
5. Reserve bright colors for interactive elements and emphasis