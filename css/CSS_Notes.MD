## css Propeties Notes
selector {
color: value;
}

## 1. color
The `color` property sets the text color of an element.
--RGB (Red, Green, Blue)
The rgb() function defines colors using a combination of red (R), green (G), and blue (B) values,
each ranging from 0 to 255.
--RGBA - Adding Transparency
rgba() adds an alpha (opacity) value ranging from 0 (completely transparent) to 1 (fully opaque).

h1 {
color: blue;
}

p {
color: #ff5733;
}

span {
color = rgb(255,0,0); /* red */
}

## 2. background-color
The `background-color` property sets the background color of an element.

h1 {
background-color: yellow;
}

p {
background-color: #ff5733;
}

span {
background-color: rgba(255,0,0,0.5); /* red with 50% transparency */
}

## Text Properties

## 1. text-align
The `text-align` property sets the horizontal alignment of a text.
•	left (default) → Aligns text to the left
•	right → Aligns text to the right
•	center → Centers the text
•	justify → Spreads the text evenly

h1{
text-align: center;
}

## 2. width
The `width` property sets the width of an element.

h1 {
width: 50%;
}

## 3. font-weight
The `font-weight` property sets the weight of the font.
•	normal → Default weight
•	bold → Bold text
•	lighter → Lighter text
•	100 to 900 → Numeric values for different weights

h1 {
font-weight: bold;
}

## 4. text-decoration
The `text-decoration` property sets the decoration of a text.
•	none → No decoration
•	underline → Underlines the text
•	overline → Overlines the text
•	line-through → Strikes through the text
• wavy → Adds a wavy line under the text
add color name before any decoration to change the color of the decoration.

p {
text-decoration: underline;
text-decoration: red line-through;
}

## 5. line-height
The `line-height` property sets the height of a line of text. It is used to specify the space between lines of text.

p {
line-height: 1.5;
}

## 6. letter-spacing
The `letter-spacing` property sets the space between characters in a text.

p {
letter-spacing: 2px;
}

## 7. font-size
The `font-size` property sets the size of the font.

p {
font-size: 16px;
}

## 8. font-family
The `font-family` property sets the font of an element.
backup font is used if the first font is not available,you can add multiple font. like-sans-serif

p {
font-family: Arial, sans-serif;
}

## 9. font-style
The `font-style` property sets the style of the font.
•	normal → Default style
•	italic → Italic text

p {
font-style: italic;
}

## 10. text-transform
The `text-transform` property sets the capitalization of a text.
•	uppercase → Transforms text to uppercase
•	lowercase → Transforms text to lowercase
•	capitalize → Transforms the first letter of each word to uppercase

p {
text-transform: uppercase;
}

## 11. text-shadow
The `text-shadow` property adds shadow to text.
•	horizontal offset → The horizontal distance of the shadow
•	vertical offset → The vertical distance of the shadow
•	blur radius → The blur radius of the shadow
•	color → The color of the shadow

p {
text-shadow: 2px 2px 4px red;
}

## 12. word-spacing
The `word-spacing` property sets the space between words in a text.

p {
word-spacing: 5px;
}

## 13. text-indent
The `text-indent` property sets the indentation of the first line of text.

p {
text-indent: 50px;
}

## 14. text-overflow
The `text-overflow` property specifies how overflowed text should be displayed.
•	clip → Clips the text
•	ellipsis → Displays an ellipsis (...) to represent clipped text

p {
text-overflow: ellipsis;
}

## 15. white-space
The `white-space` property specifies how white-space inside an element is handled.
•	normal → Collapses white-space
•	pre → Preserves white-space

p {
white-space: pre;
}

## 16. overflow
The `overflow` property specifies what should happen if content overflows an element's box.
•	visible → Content is not clipped
•	hidden → Content is clipped
•	scroll → Adds scrollbars
•	auto → Adds scrollbars only when necessary

p {
overflow: scroll;
}

## 17. direction
The `direction` property specifies the text direction of an element.
•	ltr → Left-to-right text direction
•	rtl → Right-to-left text direction

p {
direction: rtl;
}

## 18. text-align-last
The `text-align-last` property sets the alignment of the last line of text in a block.
•	left → Aligns the last line to the left
•	right → Aligns the last line to the right
•	center → Centers the last line
•	justify → Justifies the last line

p {
text-align-last: center;
}





















border
The `border` property is a shorthand property for setting the width, style, and color of an element's border.
--border-width: Specifies the width of the border.

h1 {
border: 2px solid black;
}

-- Using the border-width property to specify the width of the border.
h1 {
border-width: 2px;
border-style: solid;
border-color: black;
}
