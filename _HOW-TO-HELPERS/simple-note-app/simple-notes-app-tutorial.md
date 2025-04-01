# 📝 Build a Simple Notes App with HTML, CSS & JavaScript

Welcome! In this tutorial, we’re going to build a simple notes app using just **HTML**, **CSS**, and **vanilla JavaScript** — no frameworks, no complicated setup. This is perfect for beginners who are comfortable with HTML and CSS but are just starting to learn how JavaScript works.

---

## ✅ What We’re Building

A basic notes app where users can:
- Write a note
- Save the note
- See all their saved notes
- Delete notes and keep them saved in the browser even after refreshing

Here’s what the final result will look like (more or less — styling is up to you!):

```
+----------------------------------+
|          My Notes App           |
+----------------------------------+
| [Write your note here...]       |
| [ Save Note ]                   |
|---------------------------------|
| - Remember to water the plants  |
| - Call Mom                      |
| - Finish homework               |
+----------------------------------+
```

---

## 📁 Part 1: Project Setup
### 🗂 Folder Structure

Create a new folder anywhere on your computer for this project. Inside that folder, create three files:
```
notes-app/
├── index.html
├── style.css
└── script.js
```

### 🧱 Create the HTML Skeleton
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Simple Notes App</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">
    <h1>My Notes</h1>
    <textarea id="note-input" placeholder="Write your note here..."></textarea>
    <button id="save-btn">Save Note</button>
    <div id="notes-list"></div>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

### 🎨 Add Some Basic Styling
Paste this into `style.css`:
```css
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 40px;
}

.container {
  max-width: 500px;
  margin: auto;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

h1 {
  text-align: center;
}

textarea {
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  resize: none;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: #2e8b57;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #256d47;
}

#notes-list {
  margin-top: 20px;
}

.note {
  background-color: #eaeaea;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
}```

---

## ⚙️ Part 2: Make It Interactive with JavaScript

### 🧾 Get the Elements from the Page
```javascript
const saveButton = document.getElementById("save-btn");
const noteInput = document.getElementById("note-input");
const notesList = document.getElementById("notes-list");
```

### 🖱 Add a Click Event
```javascript
saveButton.addEventListener("click", function () {
  const noteText = noteInput.value;
  if (noteText.trim() === "") return;
  const note = document.createElement("div");
  note.className = "note";
  note.textContent = noteText;
  notesList.appendChild(note);
  noteInput.value = "";
});
```

---

## 💾 Part 3: Save Notes in localStorage

### 📥 Load Saved Notes
```javascript
function loadNotes() {
  const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
  savedNotes.forEach(function (noteText) {
    const note = document.createElement("div");
    note.className = "note";
    note.textContent = noteText;
    notesList.appendChild(note);
  });
}

loadNotes();
```

### 💾 Save New Notes
Update the save button code:
```javascript
saveButton.addEventListener("click", function () {
  const noteText = noteInput.value;
  if (noteText.trim() === "") return;
  const note = document.createElement("div");
  note.className = "note";
  note.textContent = noteText;
  notesList.appendChild(note);
  let savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
  savedNotes.push(noteText);
  localStorage.setItem("notes", JSON.stringify(savedNotes));
  noteInput.value = "";
});
```

---

## 🗑️ Part 4: Add Delete Buttons

### 🔁 Reusable Note Element Function
```javascript
function createNoteElement(noteText) {
  const note = document.createElement("div");
  note.className = "note";

  const text = document.createElement("span");
  text.textContent = noteText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑️";
  deleteBtn.className = "delete-btn";

  deleteBtn.addEventListener("click", function () {
    notesList.removeChild(note);
    let savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    savedNotes = savedNotes.filter(function (noteItem) {
      return noteItem !== noteText;
    });
    localStorage.setItem("notes", JSON.stringify(savedNotes));
  });

  note.appendChild(text);
  note.appendChild(deleteBtn);
  return note;
}
```

Update where notes are created (load and save):
```javascript
function loadNotes() {
  const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
  savedNotes.forEach(function (noteText) {
    const note = createNoteElement(noteText);
    notesList.appendChild(note);
  });
}

saveButton.addEventListener("click", function () {
  const noteText = noteInput.value;
  if (noteText.trim() === "") return;
  const note = createNoteElement(noteText);
  notesList.appendChild(note);
  let savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
  savedNotes.push(noteText);
  localStorage.setItem("notes", JSON.stringify(savedNotes));
  noteInput.value = "";
});
```

Add this CSS:
```css
.note {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.delete-btn {
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
  margin-left: 10px;
}

.delete-btn:hover {
  color: red;
}
```

---

## 🌐 Part 5: Polish and Deploy

### ✨ Optional Styling Enhancements
```css
body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(to right, #d3cce3, #e9e4f0);
}

.container {
  background-color: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

textarea {
  border: 1px solid #ccc;
  border-radius: 8px;
}

button#save-btn {
  background-color: #6c63ff;
}

button#save-btn:hover {
  background-color: #554cd1;
}
```

### 🚀 Deploy to GitHub Pages
1. Push your project to a GitHub repo
2. Go to **Settings > Pages**
3. Set source to `main` branch and root
4. GitHub will give you a live URL 🎉

---

## 🎉 You Did It!
You now have a full app using only HTML, CSS, and JavaScript — and it’s live on the internet!