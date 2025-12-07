# Optibus AI Class Exercise

Welcome to the Optibus AI Class Exercise! This project is a React-based "Workforce Planner" application designed to simulate a real-world scheduling interface. It includes a main planning grid, a sidebar, and an interactive AI Assistant panel.

## 🚀 Getting Started

Follow these instructions to set up the project on your local machine.

### Prerequisites

- **Node.js**: Ensure you have Node.js installed (v18 or higher is recommended).
- **npm**: Comes with Node.js.

### Installation

1.  **Unzip the project** (if you haven't already).
2.  **Open your terminal** and navigate to the project folder:
    ```bash
    cd Optibusaiclassexercise
    ```
3.  **Install dependencies**:
    ```bash
    npm install
    ```

### Running the Application

Start the development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` (or the port shown in your terminal, e.g., `http://localhost:5173`).

---

## 📂 Project Structure

- **`src/components/WorkforcePlanner.tsx`**: The main application container. It manages the state for the AI Assistant (open, minimized, fullscreen).
- **`src/components/LeftPanel/`**: Contains the main schedule view.
    -   `ScheduleGrid.tsx`: The grid displaying shifts and schedules.
    -   `ActionToolbar.tsx`: The toolbar above the grid with filters and action buttons.
- **`src/components/RightPanel/`**: Contains the AI Assistant chat interface.
- **`src/guidelines/Guidelines.md`**: **IMPORTANT**. This file contains the design system rules (colors, typography, spacing). Refer to this when styling components.

---

## 📝 Student Tasks

Complete the following tasks to familiarize yourself with the codebase and React development.

### Task 1: Explore the Design System
1.  Open `src/guidelines/Guidelines.md`.
2.  Find the color token for the **Success** state (`--communication-green-base`).
3.  **Action**: Update the "Allocate" button in `src/components/LeftPanel/ActionToolbar.tsx` to use this green color for its background instead of the default, indicating a positive action.

### Task 2: Implement "Clear Filters"
1.  Navigate to `src/components/LeftPanel/ActionToolbar.tsx`.
2.  **Action**: Add a new button labeled **"Clear"** next to the "Filter" button.
3.  When clicked, it should log "Filters cleared" to the console (or clear the search input if you want to attempt a more advanced challenge!).

### Task 3: Enhance Profile Navigation
1.  Currently, the "Back" button in `src/components/ProfilePage.tsx` is just an icon.
2.  **Action**: Update the button to include the text **"Back to Planner"** next to the arrow icon.
3.  Style it so the text appears on hover, or is always visible, making it clearer for users how to exit the profile view.

### Task 4: Responsive Adjustments
1.  Open the AI Assistant panel (Right Panel).
2.  **Action**: Modify the styling in `src/components/RightPanel/RightPanel.tsx` so that when the screen width is very small (mobile size), the panel automatically takes up 100% of the width.

---

## 💡 Tips
- Use the **Browser Developer Tools** (F12) to inspect elements and debug.
- Pay attention to the **Console** in your browser for errors.
- Refer to `package.json` to see available libraries (e.g., `lucide-react` for icons, `tailwindcss` for styling).

Good luck!
