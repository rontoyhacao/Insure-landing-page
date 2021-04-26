# Frontend Mentor - Insure landing page solution

This is a solution to the [Insure landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/insure-landing-page-uTU68JV8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot/mobile.jpg)

![](./screenshot/desktop.jpg)

### Links

- Solution URL: [https://github.com/rontoyhacao/Insure-landing-page](https://github.com/rontoyhacao/Insure-landing-page)
- Live Site URL: [https://insure-landing-page-git-main-rontoyhacao.vercel.app/](https://insure-landing-page-git-main-rontoyhacao.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Javascript
- [Sass](https://sass-lang.com/)
- Flexbox
- CSS Grid
- Mobile-first workflow
- Fontawesome

### What I learned

This project contains lots of overlays and it has tested my layout skills. I used the `::before` pseudo-class in making those overlays. Using properties `background` and `background-image` could also be an alternative in adding a background image but I preferred to use pseudo-classes because images are on top of the layout.

```css
&::before {
  content: url(/assets/images/bg-pattern-intro-left-mobile.svg);
  position: absolute;
  top: 0;
  left: 0;
}
&::after {
  content: url(/assets/images/bg-pattern-intro-right-mobile.svg);
  position: absolute;
  right: 0;
}
```

## Author

- Website - [Ron Paolo Toyhacao](https://www.your-site.com)
- Frontend Mentor - [@rontoyhacao](https://www.frontendmentor.io/profile/rontoyhacao)
- Twitter - [@rontoyhacao](https://twitter.com/rontoyhacao)
