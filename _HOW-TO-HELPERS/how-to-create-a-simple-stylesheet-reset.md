# A Simeple CSS Reset

A CSS reset helps to ensure a consistent baseline across different browsers by removing default styling. Here’s a simple and effective CSS reset. Add this to the top of your css stylesheet:

```css
/* Simple CSS Reset */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  font-family: Arial, sans-serif;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

button, input, select, textarea {
  font-family: inherit;
}

a {
  text-decoration: none;
  color: inherit;
}

ul, ol {
  list-style: none;
}
```

This reset will remove the default margins and paddings, ensure that elements are sized consistently using `box-sizing: border-box`, and apply some common normalization rules. 

