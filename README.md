# Birthday Tracker

A React application built with Vite for tracking birthdays. This app helps you keep track of upcoming and recent birthdays of your friends and family.

It all started when my friend started calling me out when I couldnt remember her birthday. It was not just her birthday, I tend to forget most of my friend's birthday. They maybe relatively close friends, but i am bad at dates or even when I do remember, I wont have the slightest idea that it was that day which I missed. Of Course, I remember other birthdays but the majority lies on the other side of the fence.

So I saw this problem of mine and decided to develop a solution on my own, At first, I used to write down some names down in my Notes or my calendar. but I tend to miss it still. This is where my BIRTHDAY TRACKER comes in.

Now I can easily know my friend's birthday and even have a look at the recent ones I missed, all properly categorized and ready to not miss a birthday starting this year!

## Getting Started

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## How It Works

The Birthday Tracker app displays a list of upcoming birthdays sorted by the number of days left until each birthday. It also shows recent birthdays that have passed in the current year.

### Features

- **Upcoming Birthdays**: Shows birthdays sorted by days remaining, with color-coded indicators (red for <7 days, yellow for <31 days, green for others).
- **Recent Birthdays**: Displays the last 3 birthdays that have occurred this year, sorted by days ago.
- **Search Functionality**: Filter birthdays by name using the search bar.
- **Birthday Cards**: Each birthday displays the person's name, age, birth date, day of the week, and days left/until.
- **Tags**: Birthdays are categorized as Family, Friend, or College with color-coded tags.

### Data Structure

Birthdays are stored in `src/birthdays.js` as an array of objects with the following properties:
- `id`: Unique identifier
- `name`: Person's name
- `dob`: Date of birth (string format: "Month DD YYYY")
- `tag`: Category (Family, Friend, College)
- `image`: Image filename

### Date Utilities

The app uses utility functions in `src/utils/date.js` to calculate:
- Age based on current date
- Days left until next birthday
- Days since last birthday
- Day of the week for birth date
- Birth month and date extraction

## Project Directory

```
birthday-tracker/
├── eslint.config.js          # ESLint configuration
├── index.html                # Main HTML file
├── package.json              # Project dependencies and scripts
├── README.md                 # This file
├── vite.config.js            # Vite configuration
├── public/
│   └── iloveimg-converted/    # Converted images (possibly optimized)
└── src/
    ├── App.css               # Main app styles
    ├── App.jsx               # Main React component
    ├── birthdays.js          # Birthday data
    ├── index.css             # Global styles
    ├── main.jsx              # React entry point
    ├── assets/               # Static assets
    ├── components/
    │   ├── BirthdayCard.css  # Styles for birthday cards
    │   ├── BirthdayCard.jsx  # Component for upcoming birthdays
    │   ├── RecentCard.css    # Styles for recent birthday cards
    │   └── RecentCard.jsx    # Component for recent birthdays
    └── utils/
        └── date.js            # Date calculation utilities
```
