# 🕹️ Tic Tac Toe Game

A sleek, responsive, and interactive web-based **Tic Tac Toe** game built using HTML, CSS (Bootstrap 5), and JavaScript. The game features background music, turn sound effects, dynamic winner announcements with animations, and an automated draw detection system.

---

## ✨ Features

* **Dynamic Sound & Audio:** * Smooth background music that automatically starts when the player makes their first move (bypassing browser autoplay blocks).
    * Distinct audio sound effects (`ting`) for active player moves.
    * Winning celebratory sound effects (`gameover`).
* **Interactive UI:** Hidden grid layouts during winner declarations paired with a fun animated victory GIF.
* **Fully Responsive:** Optimized for both desktop and mobile viewports using custom CSS media queries and Bootstrap 5 utility classes.
* **Smart State Resetting:** Switch smoothly between "Reset" mid-game or "Play Again" after a match concludes without needing a page refresh.

---

## 🛠️ Tech Stack

* **Structure:** HTML5
* **Styling:** CSS3, Google Fonts (*Croissant One, Dela Gothic One, Lora, Ubuntu*), and [Bootstrap v5.3](https://getbootstrap.com/)
* **Logic & Audio Processing:** Vanilla JavaScript (ES6+)

---

## 🚀 How to Run the Project Locally

Since modern browsers enforce strict **CORS policies** regarding local audio file streams, launching the raw `index.html` directly from your file manager might block the sound effects. 

Follow these simple steps to host it correctly:

### Option 1: VS Code Live Server (Recommended)
1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension by Ritwick Dey.
3. Click the **Go Live** button at the bottom right corner of VS Code.

### Option 2: Using Python (Terminal/Command Prompt)
Navigate to your project directory and run:
```bash
# For Python 3.x
python -m http.server 8000
