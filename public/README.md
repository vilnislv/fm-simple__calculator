# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference


### Screenshots

[Desktop](/calculator_desktop.png)
[Mobile](/calculator_mobile.png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

A good challenge was creating a color changer using both html and js.

```html
<form class="color-picker" action="">
  <fieldset>
    <legend class="visually-hidden">Pick a color scheme</legend>
    <label for="blue" class="visually-hidden">Blue</label>
    <input type="radio" name="theme" id="blue" checked>
    <label for="light" class="visually-hidden">Light</label>
    <input type="radio" name="theme" id="light">
    <label for="violet" class="visually-hidden">Violet</label>
    <input type="radio" name="theme" id="violet">
  </fieldset>
</form>
```
```css
.blue,
:root:has(#blue:checked) {...}

```
```js
colorThemes.forEach(themeOption => {...})
```

### Continued development

I learn a lot of new things and strengthen the existing ones.

### Useful resources

- [Example resource 1](https://www.freecodecamp.com)
- [Example resource 2](https://www.w3schools.com) 


## Author

- Website - [Add your name here](http://www.vilnislv.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/vilnislv)
- Twitter - [@yourusername](https://www.twitter.com/@VBeltins)




