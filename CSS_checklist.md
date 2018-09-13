# CSS Checklist


## Syntax

- [ ] Indents use soft tabs of 2 spaces.
- [ ] When grouping selectors, each selector is on its own line.
- [ ] There's one space before opening braces `{`.
- [ ] Closing braces `}` of declaration blocks are on a new line.
- [ ] There's one space after the colon `:` in each declaration.
- [ ] Each declaration is on its own line ending with a semicolon `;`.
- [ ] No spaces after commas in `rgb()`, `rgba()`, `hsl()`, `hsla()`, or `rect()` values.
  For example: `rgba(220,200,200,.3)`
- [ ] No zeros `0` prefixing property values or color parameters.
  For example do: `.5` don't: `0.5`.
- [ ] Hex values are lowercase and shorthand if possible ie: `#fff`.
- [ ] No units on zero values for example: `margin: 0;`, not: `margin: 0px;`.
- [ ] No trailing white spaces.
- [ ] Single quotes are used rather than double for property values:
  ```css
  .primary-header {
    font-family: 'Open Sans', sans-serif;
  }
  ```
- [ ] All rules within rules are indented. For example:
  ```css
  @media screen and (min-width: 800px) {

    .masonry {
      column-count: 4;
    }

  }
  ```


## Naming

- [ ] Consistent naming conventions are used throughout (see [CSS_architecture.md](https://github.com/jessicarush/css-notes/blob/master/CSS_architecture.md)).
- [ ] Dashes are preferred over camelCase when naming and underscores used for BEM child elements only. For example:
  ```css
  .media-box {}
  .media-box__heading {}
  ```
- [ ] Selectors are only as specific as they need to be.
- [ ] Selectors are not (or rarely) tag qualified.
- [ ] Classes are used over generic element selectors.
- [ ] ID selectors are not used.
- [ ] The universal selector `*` is not used.
- [ ] Classes used for JS hooks are named with a prefix: `js-` and are not used for styling purposes.


## Document

- [ ] Property declarations are alphabetical (except vendor prefixes which should come before the non-prefixed declaration). For example:
  ```css
  .media-box {
    background: #fff;
    border: 1px solid #000;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    padding: 10px;
    text-align: center;
  }
  ```
- [ ] Styles are commented where needed and appropriate
- [ ] Media queries are placed close to their relevant rule sets whenever possible.
- [ ] White space is used consistently to separate sections of code.
- [ ] Rules are separated with one blank line.


## Declarations

- [ ] Styles applied to `:hover` are also applied to `:focus`.
- [ ] `font-size`s are declared using `rem` units.
- [ ] `line-height`s are declared using `em` units.
- [ ] `border: 0;` is used, rather than `border: none;`.


## Validators

- [ ] CSS validates against the [W3C CSS validator](https://jigsaw.w3.org/css-validator/).
- [ ] CSS validates against [CSS Lint](http://csslint.net/).
