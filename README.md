# Leet-Metric React App

A React.js application to display LeetCode user statistics and progress.

## Features

- Search for LeetCode users by username
- Display problem-solving progress with circular progress indicators
- Show user statistics including ranking, contribution points, and reputation
- Responsive design for mobile and desktop
- Clean, modern UI with dark theme

## Setup Instructions

1. **Install Node.js** (if not already installed)
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation: `node --version` and `npm --version`

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   - Navigate to `http://localhost:3000`
   - The app will automatically reload when you make changes

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── UserInput.js       # Username input component
│   ├── StatsContainer.js  # Main stats display container
│   ├── ProgressCircle.js  # Circular progress indicators
│   └── StatsCard.js       # User statistics cards
├── App.js                 # Main application component
├── index.js              # React entry point
└── index.css             # Global styles
```
## Screenshots
<img width="1919" height="971" alt="image" src="https://github.com/user-attachments/assets/530bd26c-f4a9-49b6-bee0-df114205cdd7" />
<img width="1919" height="968" alt="image" src="https://github.com/user-attachments/assets/f1f2525f-996c-46e8-bdfb-9f3e39edb82d" />
<img width="1919" height="967" alt="image" src="https://github.com/user-attachments/assets/4194ffed-0f9f-4c3e-a5ed-ddd90cb85ef0" />



## Technologies Used

- React 18
- JavaScript (ES6+)
- CSS3 with custom properties
- LeetCode Stats API

## API

This app uses the LeetCode Stats API: `https://leetcode-stats-api.herokuapp.com/{username}`
