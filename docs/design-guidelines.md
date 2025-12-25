# SELA English Design Guidelines

**Tone:** Fun, relatable, humorous. NOT boring. **Target:** Vietnamese parents.

## 1. Color Palette

### Primary
| Name | Hex | Usage |
|------|-----|-------|
| Coral Burst | `#FF6B4A` | Primary CTA |
| Sunset Orange | `#FF8F3F` | Secondary |
| Energy Red | `#E53935` | Urgency |

### Secondary
| Sky Trust | `#4FC3F7` | Trust, calm |
| Fresh Mint | `#26A69A` | Success |

### Neutrals
| Warm White | `#FFFBF7` | Background |
| Cream | `#FFF5EB` | Alt sections |
| Charcoal | `#2D3748` | Body text |

### Gradients
```css
--gradient-cta: linear-gradient(135deg, #FF6B4A, #E53935);
--gradient-mesh: radial-gradient(at 40% 20%, #FFE0B2, transparent 50%),
                 radial-gradient(at 80% 80%, #B3E5FC, transparent 50%);
```

## 2. Typography

**Font:** `'Be Vietnam Pro', system-ui` (full Vietnamese support)

| Level | Size | Weight |
|-------|------|--------|
| Hero | 48-72px | 800 |
| H1 | 36-48px | 700 |
| H2 | 28-36px | 600 |
| Body | 16-18px | 400 |

## 3. Spacing

**Base:** 8px. Scale: `4|8|12|16|24|32|48|64|96`

**Section:** Mobile `py-16 px-4` / Desktop `py-24 px-8`

## 4. Components

### Buttons
```css
.btn-primary { background: var(--gradient-cta); padding: 16px 32px;
  border-radius: 9999px; box-shadow: 0 4px 20px rgba(255,107,74,0.4); }
.btn-glass { backdrop-filter: blur(12px); background: rgba(255,255,255,0.8); }
```

### Cards
```css
.card { background: #FFF; border-radius: 24px; box-shadow: 0 8px 40px rgba(0,0,0,0.08); }
.card-glass { backdrop-filter: blur(16px); background: rgba(255,255,255,0.7); }
```

## 5. Animations

### Entrances
```css
@keyframes fadeUp { from { opacity:0; transform:translateY(30px); } }
@keyframes popIn { from { opacity:0; transform:scale(0.8); } }
```

### Micro-interactions
- **CTA Pulse:** scale(1.02) + glow, 2s loop
- **Hover Lift:** translateY(-4px) + shadow
- **Icon Bounce:** ease-out bounce on hover

### Timing
Quick: 150ms | Default: 300ms | Reveal: 600ms | Stagger: 100ms

## 6. Anti-Boring Techniques

### Bento Grid
```css
.bento { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; }
/* Asymmetric: [ Large ][ Sm ][ Sm ] / [ Tall ][ Wide Card ] */
```

### Glassmorphism
`backdrop-filter: blur(12-20px)` + `rgba(255,255,255,0.7)` + white border 30%

### Gradient Mesh Backgrounds
Layer radial gradients for organic flow - orange top-left, blue bottom-right.

### Floating Elements
Emojis/shapes with `animation: float 3s ease-in-out infinite`

### Parallax
Hero elements: 0.3x scroll / Background blobs: 0.5x / Emojis: 0.2x + rotation

### Asymmetric Layouts
Offset images, angled section dividers, break grid occasionally.

### Scroll Reveals
Alternate slide directions, count-up numbers, animated progress bars.

## 7. Visual Style

### Images
- Warm color grading, candid expressions, real kids
- NOT stock-y, relatable, meme-ready

### Illustrations
- Rounded shapes, bold outlines (2-3px)
- Limited palette (3-4 colors)
- Emoji as decorative elements

### Decorations
- Organic blob SVGs
- Hand-drawn underlines
- Confetti/sparkle accents

## 8. Responsive

```css
--bp-sm: 640px; --bp-md: 768px; --bp-lg: 1024px; --bp-xl: 1280px;
```

## 9. Accessibility

- Contrast: 4.5:1 minimum
- Focus: 3px solid `#4FC3F7`
- Touch targets: 44x44px minimum
- Honor `prefers-reduced-motion`
