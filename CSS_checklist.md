# CSS Checklist


## Syntax

- [ ] Indents use soft tabs of 2 spaces.
- [ ] When grouping selectors, each selector is on its own line.
- [ ] Include one space before opening braces.
- [ ] Place closing braces of declaration blocks on a new line.
- [ ] Include one space after the colon `:` in each declaration.
- [ ] Each declaration on it's own line ending with a semicolon `;`.
- [ ] Don't include spaces after commas in `rgb()`, `rgba()`, `hsl()`, `hsla()`, or `rect()` values. For example:
  `rgba(220,200,200,.3)`
- [ ] Don't prefix property values or color paramters with a zero `0`. For example do: `.5` not: `0.5`.
- [ ] All hex values are lowercase and shorthand if possible ie: `#fff`.
- [ ] No units on zero values for example: do: `margin: 0;` not: `margin: 0px;`.
- [ ] No trailing white spaces.
- [ ] Single quotes are used rather than double for property values:
  ```css
  .primary-header {
    font-family: 'Open Sans', sans-serif;
  }
  ```
- [ ] Indent all rules within rules. For example:
  ```css
  @media screen and (min-width: 800px) {

    .masonry {
      column-count: 4;
    }

  }
  ```


## Naming

- [ ] Consistent naming conventions are used throughout (see [CSS_architecture.md](https://github.com/jessicarush/css-notes/blob/master/CSS_architecture.md)).
- [ ] Prefer dashes over camelCase when naming and only use underscores for BEM child elements
- [ ] Selectors are only as specific as they need to be.
- [ ] Selectors are not (or rarely) tag qualified.
- [ ] Classes are used over generic element selectors.
- [ ] ID attributes are used sparingly or not at all.
- [ ] Don't use the universal selector `*`.

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
- [ ] Style are commented where appropriate
- [ ] Media queries are places as close to their relevant rule sets whenever possible.
- [ ] White space is used consistently to separate sections of code.
- [ ] Rules are separated with one blank line.


## Declarations

- [ ] Styles applied to `:hover` are also applied to `:focus`.
- [ ] Font-sizes are declared using `rem` (except the root HTML rule).
- [ ] `border: 0;` is used, rather than `border: none;`.


## Validators

- [ ] CSS validates against the [W3C CSS validator](https://jigsaw.w3.org/css-validator/).
- [ ] CSS validates against [CSS Lint](http://csslint.net/).
