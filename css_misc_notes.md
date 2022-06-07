# CSS miscellaneous notes

## Table of contents

<!-- toc -->

## button reset

```css
.Btn {
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;
  text-align: inherit;
  cursor: pointer;
}
```

> The all shorthand CSS property resets all of an element's properties except unicode-bidi, direction, and CSS Custom Properties. It can set properties to their initial or inherited values, or to the values specified in another cascade layer or stylesheet origin.

```css 
button {
  all: unset;
}
```

## scrollbar-color

The `scrollbar-color` property controls the two colors of a scrollbar: the thumb and the track color. The track refers to the background of the scrollbar, which is generally fixed regardless of the scrolling position. The thumb refers to the moving part of the scrollbar, which floats on top of the track. See [MDN scrollbar-color](https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-color) for additional information.

*Note:* currently not a standard and only works in Firefox

```css
.scrollable-element {
  scrollbar-color: red yellow;
}
```

## min(), max(), clamp()

These three, like `calc()` are math functions which allow math expressions with (`+` `-` `*` `/`).

> The max() CSS function lets you set the largest (most positive) value from a list of comma-separated expressions as the value of a CSS property value. The max() function can be used anywhere a `<length>`, `<frequency>`, `<angle>`, `<time>`, `<percentage>`, `<number>`, or `<integer>` is allowed.

e.g. `width: max(20vw, 100px);`

The above value will be set to 20vw or 100px, whichever is greater. If the viewport width was 1000px, the element actual width would be 200px. Think of the `max()` value as providing the *minimum* value a property can have.

> The min() CSS function lets you set the smallest (most negative) value from a list of comma-separated expressions as the value of a CSS property value.

e.g. `width: min(50vw, 200px);`

If the viewport width was 1000px, the element actual width would be 200px.
Think of the `min()` value as providing the *maximum* value a property can have.

> The clamp() CSS function clamps a value between an upper and lower bound. clamp() enables selecting a middle value within a range of values between a defined minimum and maximum. It takes three parameters: a minimum value, a preferred value, and a maximum allowed value.

e.g. `width: clamp(250px, 50vw, 800px);`

To use `clamp()`, enter three values: a minimum value, ideal value (from which to calculate), and a maximum value.

see also: <https://web.dev/min-max-clamp>


## minmax()

> The minmax() CSS function defines a size range greater than or equal to min and less than or equal to max. It is used with CSS Grids.

## repeat()

Note the difference between `auto-fit` and `auto-fill`.
