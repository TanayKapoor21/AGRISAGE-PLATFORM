# Agrisage Platform - Design Guidelines

## Design Philosophy
Clean, Google-like simplicity with color-coded icons, multilingual support (Hindi + regional languages), and voice-enabled interactions. Optimized for low-literacy farmers with icon-only modes and audio navigation.

## Core Design Approach
**Reference-Based**: Google Search simplicity + card-based layouts similar to modern agricultural platforms. Prioritize accessibility, clarity, and minimal cognitive load for rural users.

## Typography System
- **Primary Font**: System fonts for maximum readability and fast loading
- **Hierarchy**: Large, bold headings for module titles; medium weight for cards; clear, readable body text
- **Voice-First**: All text should be scannable and work well when read aloud

## Layout & Spacing
**Spacing Units**: Tailwind spacing of 4, 6, 8, 12, 16, and 20 for consistent rhythm
- Generous padding around cards (p-6 to p-8)
- Consistent gaps between grid items (gap-6)
- Large touch targets (min 44px) for farmer accessibility

## Component Library

### Homepage Components
1. **Language Picker Bar** (top): Horizontal pill buttons for English | Hindi | Tamil | Punjabi | Marathi
2. **Accessibility Toggle Bar**: Voice Search, Offline Mode, High-Contrast Mode buttons
3. **Central Search/Chatbot**: Large search bar with voice icon, "Ask anything..." placeholder
4. **Feature Cards Grid**: 5 main cards in responsive grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
   - Farming Help (Green icon)
   - Agri Market (Blue icon)
   - Stubble Management (Orange icon)
   - Earn Extra Income (Purple icon)
   - Financial Services (Teal icon)
5. **Safety Button**: Prominent red emergency button for local authorities
6. **Tutorial Carousel**: Below cards, showing platform features with dots navigation

### Search Interface Pattern (Used in Multiple Modules)
- Google-style centered search bar with rounded corners
- Icon-based search button
- Voice input option
- Auto-suggestions dropdown

### Card Layouts
**Product/Seller Cards** (Seeds & Fertilizers):
- Image thumbnail (top or left)
- Title, price comparison table
- Seller information with ratings
- "Buy Now" or "Compare Prices" CTA buttons

**Feature Module Cards**:
- Large color-coded icon (top)
- Bold title
- Brief description (2-3 lines)
- Arrow or chevron indicating clickable

### Map Components
**Waste Center Locator & Buyer Directory**:
- Full-width interactive map
- Marker pins with info windows
- "Navigate" button linking to directions
- Sidebar list of locations with distance sorting

### Data Visualization
**Price Trend Graphs** (Agri Market):
- Animated line charts showing historical data
- Color-coded predictions
- Clear axis labels in regional language
- Tooltip hover states

**Heatmaps** (Pest Detection, Stubble Burning):
- Field overlay with intensity gradients
- Legend explaining severity levels
- Pinpoint markers for problem areas

### Form Elements
- Large input fields with icon prefixes
- Dropdown selectors for crops, soil types
- Toggle switches for premium features
- Clear helper text and validation messages

## Images

### Homepage Hero
No traditional hero image. Instead, feature the voice-enabled chatbot interface prominently with abstract agricultural illustration or pattern in background (optional subtle treatment).

### Module Pages
- **Seeds & Fertilizers**: Product thumbnails (crop seeds, fertilizer bags)
- **Planting Details**: Illustrative diagrams showing planting steps
- **Pest Detection**: Drone surveillance photos, disease close-ups
- **Waste Management**: Photos of recycling centers, stubble collection
- **Carbon Offset**: Tree plantation photos, company logos

## Navigation
- **Primary**: Horizontal tab navigation for main modules (sticky on scroll)
- **Secondary**: Breadcrumb trail for deep navigation
- **Mobile**: Bottom navigation bar with 5 main icons

## Accessibility Features (Critical)
1. **High-Contrast Mode**: Implement as toggleable theme with WCAG AAA compliance
2. **Icon-Only Mode**: All features accessible via icons alone, no text required
3. **Audio Navigation**: Screen reader optimized, read-aloud functionality
4. **Large Touch Targets**: Minimum 48px for all interactive elements
5. **Offline Indicators**: Clear visual feedback when data is cached vs. live

## Action Buttons (Standardized CTAs)
- **Primary Actions**: "Scan Disease Now", "Sell at Best Price", "Book Drone Survey"
- **Secondary Actions**: "Compare Prices", "Request Subsidy", "Navigate to Center"
- **Download Actions**: "Download Compliance Report", "Download Invoice"
- All buttons should have clear icon + text labels

## Responsive Breakpoints
- **Mobile (base)**: Single column, stacked cards, bottom navigation
- **Tablet (md)**: 2-column grid, hybrid navigation
- **Desktop (lg+)**: 3-column grid, full feature set

## Special UI Patterns

### Premium Feature Indicators
- Subtle "Premium" badge on advanced features
- Lock icon for gated content
- Clear upgrade prompts with pricing

### Real-Time Data Displays
- Live market price tickers with auto-refresh
- Weather alert banners (dismissible)
- Sensor reading dashboards with timestamp

### Government Integration UI
- Official badge/seal for verified centers
- Compliance status indicators (green checkmark)
- Auto-filled subsidy forms with government branding

## Animation Guidelines
Minimal, purposeful animations only:
- Smooth page transitions
- Loading spinners for data fetching
- Success confirmations (checkmark animation)
- Avoid decorative animations that slow performance