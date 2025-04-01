# Step by Step Instructions for Setting Up a Website and Publishing It

---

## ✅ Step 1: Set Up Your Website Folder

1. **Create a folder** on your computer where your website files will live.
   - Name it something like `tannergsell` (no spaces).
2. Inside that folder, create the following files:
   - `index.html` → this will be your homepage.
   - `about.html` → a page about you or the business.
   - `contact.html` → a contact page.
   - `style.css` → for your CSS styles.
   - `script.js` → for any JavaScript.

👉 This is what your folder should look like:

```
tannergsell/
├── index.html
├── about.html
├── contact.html
├── style.css
└── script.js
```

---

## ✅ Step 2: Open the Folder in VSCode

1. Open **Visual Studio Code (VSCode)**.
2. Go to **File > Open Folder**.
3. Select your `tannergsell` folder.
4. You’ll now see your files listed in the **Explorer** on the left.

---

## ✅ Step 3: Add Basic HTML to Each Page

You can paste this as a starting point into each `.html` file:

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Home - Website for Tanner Gsell</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <h1>Welcome to My Website</h1>
  <nav>
    <a href="index.html">Home</a> |
    <a href="about.html">About</a> |
    <a href="contact.html">Contact</a>
  </nav>
  <p>This is the homepage.</p>

  <script src="script.js"></script>
</body>
</html>
```

Repeat this for `about.html` and `contact.html`, just change the `<title>` and `<h1>` text.

---

## ✅ Step 4: Add Styles and JS (Optional)

- Open `style.css` and add some basic styling:

```css
body {
  font-family: Arial, sans-serif;
  margin: 20px;
}
nav a {
  margin-right: 10px;
}
```

- Open `script.js` and add something simple to test it works:

```javascript
console.log("Your website is working!");
```

---

## ✅ Step 5: Preview Your Website

You can install the **Live Server extension** in VSCode to preview locally:

1. In VSCode, go to **Extensions** (left sidebar) and search for:
   ```
   Live Server
   ```
2. Click **Install**.
3. Now right-click `index.html` and choose **"Open with Live Server"**.
4. Your default browser will open with a live preview.

---

## ✅ Step 6: Upload Files to Web Hosting Server

You’ll need your **FTP credentials** (provided by your web host). This usually includes:

- **Host/server**  `200.225.43.151`
- **Username** `tanner`
- **Password** `Jackie will send you a text with this`
- **Port** 21

### Option A: Use FileZilla (recommended for beginners)

1. [Download and install FileZilla](https://filezilla-project.org/).
2. Open FileZilla and fill in the top bar:
   - **Host**: `200.225.43.151`
   - **Username** and **Password**  `See above`
   - **Port**: usually leave it as `21`
3. Click **Quickconnect**.

Once connected:

- On the **left side**, find your `tannergsell` folder.
- On the **right side**, open the folder where your website files go (usually `public_html`, `www`, or something similar).
- **Drag and drop** all your files (`index.html`, etc.) from the left into the right.

Wait for the upload to finish.

---

## ✅ Step 7: Test Your Website Online

1. Open a browser and go to your domain name:
   ```
   https://tannergsell.com
   ```
2. You should see your homepage!
3. Click the **About** and **Contact** links to make sure everything is working.

---

## ✅ Optional: Organize Further

You could add folders later, like:

- `images/` for pictures
- `css/` if you want to move your stylesheets there
- `js/` for JavaScript files

But for now, keeping everything in one folder is great for learning.

---

Troubleshooting:
1. Check file paths, making sure uploads go to the right directory. 
2. Clear browser cache or open website in incognito mode.