# Timer Game 🎮⏲️

This is a simple, fun game built with React where the goal is to stop a timer as close to a target time as possible! If you stop the timer before the target time, you win and get a score showing how close you were. If you don't stop it in time, you lose.

## Features

- **React Refs**: Used to interact directly with the DOM elements for precise timer control.
- **Portals**: For rendering modal dialogs and pop-ups outside of the main DOM hierarchy.
- **Target Time**: A random target time is set, and the player must stop the timer as close as possible to win.
- **Real-Time Feedback**: The game gives you feedback on how close you were to the target time, showing how many milliseconds off you were.

## How to Play

1. **Start the Timer**: Press the "Start" button to begin.
2. **Stop the Timer**: Try to stop the timer before the target time by pressing the "Stop" button.
3. **Win or Lose**: 
    - If you stop the timer before the target time, you win, and the game will tell you how close you were.
    - If you stop the timer too late, you lose.
4. **Reset**: After each game, you can reset the timer and play again!

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/timer-game.git
    ```
2. Navigate to the project folder:
    ```bash
    cd timer-game
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Run the app:
    ```bash
    npm start
    ```

The app will run on `http://localhost:5173` in your browser.

## Tech Stack

- **React**: Functional components and hooks (useState, useEffect).
- **React Refs**: For precise control of the timer logic.
- **Portals**: For managing pop-ups and modals.
- **CSS**: Basic styling for the game layout.

## Future Improvements

- Add difficulty levels with varying target times.
- Implement animations for better visual feedback.
- Track high scores across multiple games.

---

Feel free to play the game and contribute to the project! 😊

