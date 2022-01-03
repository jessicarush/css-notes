# CSS Architecture

This describes some best practices and thoughts for structuring CSS code.

## Table of Contents

<!-- toc -->

- [Goal](#goal)
- [Suggestions](#suggestions)
  * [1. Avoid modifying components based on who the parents are.](#1-avoid-modifying-components-based-on-who-the-parents-are)
  * [2. Avoid overly complicated selectors.](#2-avoid-overly-complicated-selectors)
  * [3. Avoid using *qualified selectors*](#3-avoid-using-qualified-selectors)
  * [4. Avoid overly generic class names.](#4-avoid-overly-generic-class-names)
  * [5. Avoid making a single rule do too much.](#5-avoid-making-a-single-rule-do-too-much)
  * [6. Be DRY - but don't be ridiculous about it.](#6-be-dry---but-dont-be-ridiculous-about-it)
  * [7. Favor Composition over Inheritance](#7-favor-composition-over-inheritance)
  * [8. Name classes using a logical structure](#8-name-classes-using-a-logical-structure)
  * [9. Helpers](#9-helpers)
  * [10. Organize your CSS into a logical structure](#10-organize-your-css-into-a-logical-structure)
- [Naming](#naming)
  * [1. CSS that depends on HTML](#1-css-that-depends-on-html)
  * [2. HTML that depends on CSS](#2-html-that-depends-on-css)
  * [Summary:](#summary)
- [Sources:](#sources)

<!-- tocstop -->

## Goal

CSS should be written in such a way that it is:
- Predictable
- Scalable
- Reusable
- Maintainable


## Suggestions


### 1. Avoid modifying components based on who the parents are.

First, CSS should assume as little HTML structure as possible. Second, if a certain component needs to look different in a different scenario, it should be called something different.

For example, don't:

```css
.widget {
  /* rules */
}
#sidebar .widget {
  /* overrides rules in .widget */
}
.footer .widget {
  /* overrides rules in .widget */
}
```

Instead, create classes that extend:

```css
.widget {
  /* base rules */
}
.widget--sidebar {
  /* extend rules */
}
.widget--footer {
  /* extend rules */
}
```


### 2. Avoid overly complicated selectors.

For example, don't:
```css
#main-nav ul li ul li {
  /* rules */
}
#content article h1:first-child {
  /* rules */
}
```
This makes for tidy HTML, but at the cost of messy unscalable, unreusable CSS. Complex selectors are fragile. Aggressive attempts to avoid putting any style hints or hooks in markup only lead to overloading stylesheets with DOM information.

In general, you should try to avoid tag selectors. Apply classes directly to the elements you want to style to improve predictability.


### 3. Avoid using *qualified selectors*

A *qualified selector* is one that includes the HTML element, for example, `div.error` is a *qualified selector*. In most cases it reduces reusability.

For example, instead of this:

```css
.error {
    color: red;
}
div.error {
    border: solid 1px red;
    padding: 20px;
}
```

Do this:
```css
.error-text {
    color: red;
}
.error-box {
    border: solid 1px red;
    padding: 20px;
}
```

In the event that you want to use a qualified selector to indicate the HTML element that the class is intended for, use the following convention.

Instead of:

```css
ul.nav {}
```

Do this:

```css
/*ul*/.nav {}
```


### 4. Avoid overly generic class names.

In this example `.title` is too common a name. It may end up being used somewhere else and unexpected styling will occur.

```css
.widget {}
.widget .title {}
```

Instead, do this:

```css
.widget {}
.widget__title {}
```


### 5. Avoid making a single rule do too much.

The *Separation of Concerns Principle* suggests that code should be broken up into distinct sections, such that each section addresses a separate concern. For example, positioning styles (width, height, position, display, margin) should be separated from styles that determine look & feel (font, color, etc).

CSS components should be modular. They should style themselves but they should not be responsible for their layout or positioning. Styles should be location independent. Layout and position should be handled by a separated layout class or a separate container element.

The *Single Responsibility Principle* is the idea that our CSS should be composed of a series of smaller classes that focus on providing very specific and limited functionality. This means that we need to decompose UIs into their smallest pieces that each serve a single responsibility; but can be easily combined and composed to make much more versatile and complex constructs. Some example CSS that does not adhere to the single responsibility principle:

```css
.error-message {
  display: block;
  padding: 10px;
  border-top: 1px solid #f00;
  border-bottom: 1px solid #f00;
  background-color: #fee;
  color: #f00;
  font-weight: bold;
}
.success-message {
  display: block;
  padding: 10px;
  border-top: 1px solid #0f0;
  border-bottom: 1px solid #0f0;
  background-color: #efe;
  color: #0f0;
  font-weight: bold;
}
```

We can break these two classes out into four smaller, reusable responsibilities:

```css
.box {
  display: block;
  padding: 10px;
}
.message {
  border-style: solid;
  border-width: 1px 0;
  font-weight: bold;
}
.message--error {
  background-color: #fee;
  color: #f00;
}
.message--success {
  background-color: #efe;
  color: #0f0;
}
```

What we're doing here is extending out components with modifier classes. This supports the *Open/Closed Principle* common to many other coding best practices. It basically says that classes should be open for extension but closed for modification.

Another easy example for demonstrating *separation of concerns* is with layouts. If you're using a grid system, all of the code pertaining to layout should exist on its own. You’ve written code that handles the layout, and that’s it:

```html
<div class="layout">

  <div class="layout__item  two-thirds">
  </div>

  <div class="layout__item  one-third">
  </div>

</div>
```

You would then write new, separate code to handle the content inside of that layout:

```html
<div class="layout">

  <div class="layout__item  two-thirds">
    <section class="content">
      ...
    </section>
  </div>

  <div class="layout__item  one-third">
    <section class="sub-content">
      ...
    </section>
  </div>

</div>
```

Code which adheres to the *separation of concerns* can be more confidently modified, edited, extended, and maintained because we know how far its responsibilities reach.


### 6. Be DRY - but don't be ridiculous about it.

*Don’t Repeat Yourself*, aims to keep the repetition of information to a minimum. Although a simple principle, it's often misinterpreted as the necessity to never repeat the exact same thing twice at all. This is impractical and usually counterproductive, and can lead to forced abstractions and over-thought, over-engineered code.

The key isn’t to avoid all repetition, but to normalize and abstract meaningful repetition. If two things happen to share the same declarations coincidentally, then we needn’t DRY anything out; that repetition is purely circumstantial and cannot be shared or abstracted. For example:

```css
.btn {
  display: inline-block;
  padding: 1em 2em;
  font-weight: bold;
}
.page-title {
  font-size: 3rem;
  line-height: 1.4;
  font-weight: bold;
}
.user-profile__title {
  font-size: 1.2rem;
  line-height: 1.5;
  font-weight: bold;
}
```

The `font-weight: bold;` declaration appears three times purely coincidentally. To try and create an abstraction to cater for this repetition would be overkill, and would tie these three rulesets together based purely on circumstance. If, however, we’re using a web-font that requires `font-weight: bold;` to be declared every time:

```css
.btn {
  display: inline-block;
  padding: 1em 2em;
  font-family: "My Web Font", sans-serif;
  font-weight: bold;
}
.page-title {
  font-size: 3rem;
  line-height: 1.4;
  font-family: "My Web Font", sans-serif;
  font-weight: bold;
}
.user-profile__title {
  font-size: 1.2rem;
  line-height: 1.5;
  font-family: "My Web Font", sans-serif;
  font-weight: bold;
}
```

In this instance, we probably would DRY out our CSS since we’re repeating a more meaningful snippet of CSS; two declarations that are always declared together. This would be an appropriate situation to use a `mixin`:

```css
@mixin my-font() {
  font-family: "My Font", sans-serif;
  font-weight: bold;
}
.btn {
  display: inline-block;
  padding: 1em 2em;
  @include my-font();
}
.page-title {
  font-size: 3rem;
  line-height: 1.4;
  @include my-font();
}
.user-profile__title {
  font-size: 1.2rem;
  line-height: 1.5;
  @include my-font();
}
```

In short, only DRY code that is actually, thematically related. Do not try to reduce purely coincidental repetition: duplication is better than the wrong abstraction.


### 7. Favor Composition over Inheritance

[Nicole Sullivan](https://github.com/stubbornella/oocss-code-standards) likens this to using Lego; small, single responsibility pieces which can be combined in a number of different ways to create a multitude of different looking results. This idea of building through composition is not new, and is often referred to as composition over inheritance. This principle suggests that larger systems should be composed from much smaller, individual parts, rather than inheriting behaviour from a much larger, monolithic object.

Composition is a valuable principle for an architecture to make use of, particularly considering the move toward component-based UIs. It will mean you can more easily recycle and reuse functionality, as well rapidly construct larger parts of UI from a known set of composable objects.


### 8. Name classes using a logical structure

These suggestions use [BEM](http://getbem.com/naming/)-like conventions.

```css
.component-name {
    /* rules */
}
.component-name--modifier {
    /* rules that extend .component-name  */
}
.component-name__descendant {
    /* child styles of .component-name  */
}
.u-utilityname {
    /* single property styles */
}
.is-state {
    /* to define state styles */
}
.js-function {
    /* create separate class names for js hooks
    DO NOT define styles on these classnames */
}
```

For example:

```css
.nav {
    /* rules */
}
.nav--primary {
    /* rules */
}
.nav__item {
    /* rules */
}
.u-center {
    text-align: center;
}
.is-hidden {
    visibility: hidden;
}
.js-dropdown {
    /* js- prefixed styles should never actually appear in your stylesheet, they're only used in the HTML as a hook for js */
}
```

Try to consider each piece of the UI as a component. Some advise using two words to identify components and one word (if possible) for descendants, for example:

```css
.play-btn {}
.play-btn__icon {}
.search-form {}
.search-form__field {}
.profile-box {}
.profile-box__name {}
```

To reiterate from earlier, avoid defining any positioning type properties (position, floats, margins, width, height) in these component styles. The exception to this is when you have elements that are intended to have a fixed width, for example logos or icon images.


### 9. Helpers

In the event that you absolutely need to override something with `!important;`, name these classes with a leading underscore and place them in a separate file called helpers.css. For example:

```css
._unmargin {
    margin: 0 !important;
}
._center {
    text-align: center !important;
}
._pull-left {
    float: left !important;
}
```

**Try to keep these to a minimum!**


### 10. Organize your CSS into a logical structure

There are a number of different approaches for categorizing your CSS.

[SMACSS](https://smacss.com/book/categorizing) example:

```css
/* BASE */
/* The defaults, mostly single element selectors */

/* LAYOUT */
/* Divide the page into sections, layouts hold modules */

/* MODULE */
/* Reusable parts of the design */

/* STATE */
/* Rules that define how modules or layouts will look in a particular state (hidden, active, smaller screen sizes)*/

/* THEME */
/* Similar to state, most websites don't use this */
```

[MCSS](https://operatino.github.io/MCSS/en/) example:

```css
/* FOUNDATION */
/* resets */

/* BASE */
/* the core parts of the interface including forms, buttons, nav blocks*/

/* PROJECT */
/* isolated "project" modules like registration forms */

/* COSMETIC */
/* link colors, low-level object-oriented css */
```

Ultimately, you have to find a pattern that works for you and your team. The structure that I personally use is:

```css
/* VARIABLES */
/* BASE */
/* LAYOUT */
/* COMPONENTS */
/* LINKS & BUTTONS */
/* COSMETIC */
/* UTILITY */
/* STATE */
```

Beyond that, you could also select a pattern for organizing the actual properties within the selectors. Though many people don't bother with this at all, some teams find it easier to order them alphabetically. Others prefer grouping properties by "type", for example:

```css
.selector {
  /* positioning */
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;

  /* display & box model */
  display: inline-block;
  overflow: hidden;
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  padding: 10px;
  border: 10px solid #333;
  margin: 10px;

  /* color */
  background: #000;
  color: #fff

  /* text */
  font-family: sans-serif;
  font-size: 16px;
  line-height: 1.4;
  text-align: right;

  /* other */
  cursor: pointer;
}
```

Given the recommendation to try to separate visual css from positioning css, I would probably lean towards alphabetical or random myself.


## Naming

Think about *dependency direction*. There are two ways you can write HTML/CSS:

### 1. CSS that depends on HTML

This is when you name your classes based on your HTML, for example `author-bio`, or `footer-links`. In this model, your HTML is restyleable (think [CSS Zen Garden](http://www.csszengarden.com/)) but your **CSS is not reusable**.

### 2. HTML that depends on CSS

This is when you name your classes in a content-agnostic way after repeating patterns in your UI, for example `media-card` or `sub-links`. In this model your CSS is more reusable but your HTML is not as restyleable (as components marked with the same class are fixed to look the same).

Choosing reusability will result in more generic class names like:
```css
.btn {}
.btn--primary {}
.btn--secondary {}
.card-list {}
.img--round {}
```

The idea of breaking things up for reusability like this is a big part of [OOCSS](https://github.com/stubbornella/oocss/wiki).

### Summary:

In the end neither approach is right or wrong. The question to ask is... for the project you're working on, what would be more valuable: restyleable HTML or reusable CSS?

Consider this:

- The primary purpose of a class name is to provide a hook for CSS or JavaScript.
- Class names impart little or no semantic information to machines or human readers.
- Semantics are already served by the HTML markup.
- Class names should communicate useful information to developers. For example:

```html
<div class="news">
    <h2>News </h2>
    <p>... </p>
</div>
```

Giving the class name `news` provides no useful information and ensures the style can't be used for anything other than news.

In short, pick a name that is sensible but somewhat ambiguous. **Aim for high reusability**.

Note however that the more a component does, or the more specific a component is, the harder it is to reuse. This is where we may want to *also* use some [Utility-first CSS](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/) to help reuse components. For example, utility classes for common visual tweaks like:

- Text sizes, colors, and weights
- Border colors, widths, and positions
- Background colors
- Flexbox utilities
- Padding and margin helpers

To take thinks further (as Tailwind's creator explains in the link above), these utility classes can also be used to remove component classes that will never actually get reused (e.g. main navigation bar), thus removing of a lot of bloat and complexity in stylesheets.

Keep in mind though, the cost od using too much utility-first CSS, is your code can become harder to read and maintain in the long-term. There’s also a deeper problem: because you are essentially recreating the CSS API with utility classes, you can end up with a huge file and layering complexity on complexity.

------

## Sources:

[About HTML semantics and front-end architecture](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/)
[cssguidelin.es](https://cssguidelin.es/)
[codeguide.co](http://codeguide.co/)
[CSS Utility Classes and "Separation of Concerns"](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/)

