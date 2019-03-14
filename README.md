# Week 2 Project To Do App

This project is live on: https://fac-sixteen.github.io/sparks-todo

## To run the project locally :computer:

1. Clone or fork the repo
2. Go into the project folder `cd sparks-todo`
3. Run `npm i` to install npm and the project dependencies (see below)
4. Run `npm test` to check all logic.js functions are working correctly

---

## 👩‍🔧 Team:
Anna @aniablaziak

Kate @dubhcait

Bobby @bobbysebolao

## 🏌️‍♂️ Our goals:
- mobile first design from the start
- accessible design
- two sets of buttons (one smaller on top, one bolder below) for adding a new todo and switching the order
- optimizing the app to be dyslexia-friendly

### 🏋️‍♀️ Some stretch goals:
- function for the switch button
- editing the todos
- adding CSS animations

## 👷‍♀️ Built with:
* JavaScript
* HTML
* CSS
* Node packages: tape, tap-spec, istanbul, nodemon
* skeleton folder from FAC
* [Figma for design](https://www.figma.com/file/FnJKDAXS9XO8d3xh9VHR6gqs/To-do-App?node-id=0%3A1)

## 🌊 Our workflow:
Step 1. First work on JavaScript and testing (programming together in a team of three)
Step 2. Link the JavaScript functionality to the DOM interface
Step 3. Spruce up the user interface with CSS, web fonts and images

## 🔬 Testing:

## 🖍 Design:
- Two-tone colour palette
- Each to-do is large and clearly separated from the others
- Different styling on completed to-dos (grayed out)
- Icons for add/delete/submit buttons (with aria labels for screen reader accessibility)

## 🤷‍♂️ Issuses and what we struggled with:
- starting the project with JavaScript (instead of HTML and styling)
- working on the code provided instead of starting a project from scratch
- working on functions first rather than working on the tests
- not knowing about equal vs deepEqual

## 🧗‍♂️ What we've learned:

### 1. TDD is testing, in more ways than one!
![img_5101](/tdd-in-a-nutshell.png)

We struggled to write tests for functions that we hadn't yet written. This was frustrating at first, especially because we thought we new ways to write the same code that would work without testing. As the project went on, it started to make more sense - the point of testing before writing the code was to make sure we wrote code as concisely as possible, and only for functions that were essential for the project requirements.

### 2. Not all methods are created deepEqual

![img_5101](https://media.giphy.com/media/ALZ1PPM20REZ2/giphy.gif)

Tape has two methods for comparing `actual` and `expected` - `equal` and `deepEqual`.

`equal` only compares return values.

`deepEqual` only compares two return objects, but it also checks nested objects (i.e. comparing values in a 2D array with values in a 3D array)

### 3. preventDefault

This prevents ...

### 4. Communicating with other teams is useful

![img_5101](https://files.gitter.im/foundersandcoders/FAC16/uHcM/WhatsApp-Image-2019-03-13-at-16.57.17.jpeg)

After spending several hours stuck trying to make our first js function work, we spoke to another team who had run into the same issue and told us what we had been doing wrong. It helps to check in with other teams, 15 heads are better than 3!
