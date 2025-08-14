# MoodPalette-4-Daily-Mood-Tracker

Description
-----------
A simple and visually appealing web app that allows users to log their daily moods and view them as a colorful calendar heatmap.

## Tech Stack
- React (Create React App)
- JavaScript (ES6+)
- CSS Modules or Styled Components
- Local Storage API

## Requirements
- Mood selection interface (Use emoji or color buttons for mood selection)
- Calendar heatmap display (Map moods to colors and show them on a monthly grid)
- Local storage persistence (Save moods locally so data stays after refresh)

## Installation
1. Ensure you have Node.js (v14+) and npm installed.
2. Clone the repository:
   bash
   git clone https://github.com/your-username/MoodPalette-4-Daily-Mood-Tracker.git
   cd MoodPalette-4-Daily-Mood-Tracker
   
3. Install dependencies:
   bash
   npm install
   
4. (Optional) Create a `.env` file in the root if you need to customize:
   
   # Example environment variables
   REACT_APP_THEME=light
   

## Usage
1. Start the development server:
   bash
   npm start
   
2. Open http://localhost:3000 in your browser.
3. Use the mood selection buttons or emojis to log your mood for the day.
4. View your moods on the calendar heatmap. Hover over any date to see details.
5. Your data is saved in Local Storage and will persist across page refreshes.

## Implementation Steps
1. Initialize the project with Create React App.
2. Create a `MoodSelector` component with emoji/color buttons.
3. Create a `HeatmapCalendar` component that:
   - Generates a monthly grid of date cells.
   - Maps stored moods to background colors.
   - Displays a tooltip or label on hover.
4. Implement a `useLocalStorage` custom hook to read/write mood data by date.
5. Maintain state in a parent `App` component and pass handlers to children.
6. Style components using CSS Modules or Styled Components for a clean UI.
7. Add responsive design to ensure usability on mobile and desktop.
8. Test data persistence by adding, removing, or changing moods and refreshing the page.
9. Prepare for production build:
   bash
   npm run build
   
10. Deploy the static build folder to your hosting provider (Netlify, Vercel, GitHub Pages, etc.).

<!--
## API Endpoints

This application uses the browser's Local Storage API for persistence and does not expose external API endpoints.
-->