# CSS Miscellaneous Stuff

## Table of contents

<!-- toc -->

## scrollbar-color

The `scrollbar-color` property controls the two colors of a scrollbar: the thumb and the track color. The track refers to the background of the scrollbar, which is generally fixed regardless of the scrolling position. The thumb refers to the moving part of the scrollbar, which floats on top of the track. See [MDN scrollbar-color](https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-color) for additional information.

*Note:* currently not a standard and only works in Firefox

```css
.scrollable-element {
  scrollbar-color: red yellow;
}
```
