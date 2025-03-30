# Soar Dashboard Application

## Overview

This is a responsive financial dashboard application built with React and styled-components. The dashboard includes:

- Credit card display with horizontal scrolling
- Recent transactions list
- Weekly activity chart
- Expense statistics chart
- Quick transfer functionality
- Balance history visualization
- Edit Profile details
- Routing of different section of the app

## Live Demo

The application is deployed on Vercel:  
👉 [https://soar-task-mu.vercel.app/](https://soar-task-mu.vercel.app/)

## Setup Instructions

### Prerequisites

- Node.js (v22.14.0 or higher)
- npm (10.9.2 or higher) or yarn
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rohitsSpace/fin-dash.git
   cd fin-dash
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser to:
   ```
   http://localhost:5173/
   ```

### Building for Production

```bash
npm run build
# or
yarn build
```

then preview the build in local using

```bash
npm run preview
# or
yarn preview
```

## Vercel Deployment

To deploy manually to Vercel:

1. Install Vercel CLI:

   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   # or for production
   vercel --prod
   ```

## Development Assumptions

### Technical Assumptions

1. **Component Structure**:

   - Each major dashboard section is implemented as a separate component
   - Charts use Chart.js with React wrappers
   - Styled-components are used for all styling

2. **Responsive Design**:

   - The layout uses a custom grid system based on styled-components
   - Breakpoints are set at standard screen sizes (sm, md, lg)
   - Cards and charts adapt to different container widths

3. **Accessibility**:

   - All interactive elements have proper ARIA attributes
   - Color contrast meets WCAG 2.1 AA standards
   - Keyboard navigation is supported throughout

4. **Data Handling**:
   - Mock data is provided in `constants` files
   - No actual API calls are made in this demo version

### Design Assumptions

1. **User Experience**:

   - Users primarily view financial data at a glance
   - Horizontal scrolling is acceptable for card navigation, quick transfer
   - Vertical scrolling is supported in transaction
   - Interactive elements should provide visual feedback

2. **Visual Hierarchy**:

   - Cards are the primary content containers
   - Charts should be immediately understandable
   - Important actions are prominently displayed

3. **Performance**:
   - Charts are optimized to render efficiently
   - Scroll behavior is smooth and responsive
   - Minimal re-renders through available React practices

## Component Structure

```
src/
├── components/
│   ├── BalanceHistoryChart/
│   ├── CreditCard/
│   ├── ExpenseStatisticsChart/
│   ├── QuickTransfer/
│   ├── RecentTransactions/
│   ├── WeeklyActivityChart/
│   ├── gridsystem/         # Custom responsive grid
│   └── common/            # Shared components and styles
├── constants/
│   ├── cardsData.js       # Mock credit card data
│   ├── colors.js          # Color palette
│   └── contacts.js        # Quick transfer contacts
└── pages/
    └── DashboardPage.js   # Main dashboard layout
    ... # all other pages
```

## Known Limitations

1. **Data Persistence**:

   - All data is mock data and resets on page refresh
   - No actual banking integration is implemented

2. **Browser Support**:

   - Optimized for modern browsers (Chrome, Firefox, Safari, Edge)
   - IE11 is not supported

3. **Mobile Experience**:
   - Some charts may be less detailed on small screens
   - Horizontal scrolling might be less intuitive on touch devices

## Future Improvements

**Enhanced Features**:

- Add real API integration
- Implement user authentication
- Add more detailed transaction views
- Add other pages action items
- Test cases and coverage

## License

MIT License
