---
layout: doc

hero:
  name: What is the span HTML Element?
  text: An inline HTML element
  tagline: Tutorial for span HTML element
---
## Tutorial: Understanding and Using the `<span>` Element in HTML

### What is the `<span>` Element?

The `<span>` element is a generic inline container in HTML that is used to group text or other inline elements for the purpose of applying styles or manipulating with JavaScript. Unlike block-level elements (e.g., `<div>`), the `<span>` element does not create a new line; it simply surrounds the content it encloses.

### Why Use `<span>`?

- **Styling**: The most common use of `<span>` is for applying CSS styles to a specific part of text.
- **JavaScript**: It allows targeting specific sections of content for dynamic updates or interactions.
- **Semantic Grouping**: It helps in logically grouping content within other elements.

### Basic Syntax

```html
<span>Content goes here</span>
```

### Example: Applying Styles

Here’s a basic example of using `<span>` to apply styles to a part of a paragraph:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        .highlight {
            color: red;
            font-weight: bold;
        }
    </style>
    <title>Span Example</title>
</head>
<body>
    <p>This is a <span class="highlight">highlighted</span> text.</p>
</body>
</html>
```

In this example, the word "highlighted" is styled with a red color and bold font weight.

### Example: JavaScript Manipulation

You can also use the `<span>` element to manipulate specific parts of your content with JavaScript:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Span Example with JavaScript</title>
</head>
<body>
    <p>This is a <span id="dynamicText">dynamic</span> text.</p>
    <button onclick="changeText()">Change Text</button>

    <script>
        function changeText() {
            document.getElementById("dynamicText").innerText = "changed";
        }
    </script>
</body>
</html>
```

Here, clicking the button changes the content of the `<span>` from "dynamic" to "changed".

### Common Use Cases

1. **Highlighting Text**: Emphasizing a portion of text within a paragraph.
2. **Styling Icons or Emojis**: Applying specific styles to inline elements like icons.
3. **Dynamic Content**: Targeting text for JavaScript updates without affecting the entire paragraph.

### Best Practices

- **Keep it Minimal**: Use `<span>` sparingly and only when necessary for styling or scripting purposes.
- **Class Names**: Use descriptive class names to ensure your styles are maintainable and understandable.
- **Accessibility**: Ensure that the use of `<span>` does not hinder the readability or accessibility of your content.

### Conclusion

The `<span>` element is a powerful tool for inline styling and content manipulation in HTML. By understanding its proper use, you can enhance the visual presentation and interactivity of your web pages without disrupting the document flow.

### Further Reading

- [MDN Web Docs on `<span>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span)
- [W3Schools on `<span>`](https://www.w3schools.com/tags/tag_span.asp)

Happy coding!