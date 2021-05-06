# Mobile-first adaptive landing page

This is my first attempt at a mobile-first web design with standard set of languages for coding and styling.

## Technology stack

For this project I used HTML5, CSS3 and JavaScript ES6 (this ECMAScript standard is represented by statements to declare variables, i.e. `let`. There are no semantic sugar in the form of arrow functions or advanced function execution methods such as `forEach()`).

## Test environment

- Google Chrome 90.0.4430.93
- Firefox 88.0.1
- Microsoft Edge 90.0.818.51

## Challenges

It took a while to complete this project but it's safe to say I had a lot of fun doing it! In the course of the work I've faced several challenges.

### Layout

At the beginning I had an idea to populate the page with reusable components. I decided to go with the BEM methodology. Somewhere in the middle I change my mind but refused to change the HTML that had already been written in a lousy BEM-like manner. This decision led to unwanted declarations of the same rules on more than one occasion which is quite opposite to what I intended to do. I should put more time in learning the techniques to keep CSS organized and pay attention to other methodologies.

Initially planned as a flexbox only, the page ultimately incorporates CSS grid layout in a `.clubs` section for tablets and desktops. The lack of a plan of attack while coding and slicing the ready-made design layout in Figma and the nature of the design itself for this particular section are among main reasons that force me to resort to such decision. However, I couldn't be happier as I finally tried out grids that I was afraid of previously and it's fantastic!

Another well-known practice I neglected right from the start involved containers to ensure responsiveness. I was trying to keep the HTML as \*div-less\* as possible and only realized how much I miss them when I began styling tablet and desktop versions. What I should keep in mind for future projects is wrappers are greater good when it comes to adaptivity/responsiveness. The trick is to keep an amount of them within reasonable limits.

### JavaScript

As for JS, the main struggle for me was scripting a slider in a `.feedback` section. At first, I tried absolute positioning and coordinates. This way I intended to move each slide on click at a certain distance in pixels. This plan was scrapped as I realized the variety of possible viewport widths it can be viewed and interacted on. The slides rely on flexbox ordering instead and this idea seemed to me only logical in given circumstances. Although, the code and subsequent customizations (it is based on a ready-made solution I found. See Attributions for reference) I made for this slider look and feel rather clunky because of tedious trial and error sessions I've spent with it. At one point it became devastating, but eventually it turned out to be the way I imagine. It's true that my pieces of JavaScript code are far from being well-structured and fail-proof for now, but I'm going to keep learning the best practices and ways to ensure the safety and performance of my scripts.

All of these are `!important` things I've drawn from this experience and I'm looking forward to *not making* the same mistakes in my next project. I surely wouldn't make it to the final commit without knowledge that I received from the following people and resources.

## Attributions

1. [HTMLAcademy](https://htmlacademy.ru/) team is made the original design layout in Figma. I got it through free subscription campaign which is sadly had been discontinued;
2. [Kevin Powell](https://www.kevinpowell.co/). Apart from his excellent [youtube videos](https://www.youtube.com/user/KepowOb), his [Conquering responsive layouts](https://courses.kevinpowell.co/conquering-responsive-layouts) course was a real eye-opener for me in many aspects. I wish I'd attend it earlier! It's highly recommended to check out if you're the beginner like me;
3. [Angela Delise](https://www.youtube.com/channel/UC_TjoSnaI3CTgIgmSn3rruA) saved me from nightmare with her videos on how to make [hamburger menu button](https://www.youtube.com/watch?v=uugicVDUzMA&ab_channel=AngelaDelise) and [CSS grid crash course](https://www.youtube.com/watch?v=yOPCQ5nD1Vs&ab_channel=AngelaDelise). Excellent content!
4. [Katherine Kato](https://codepen.io/kathykato) helped me to realize how to make flexbox slider in JS with this [excellent solution](https://codepen.io/kathykato/pen/prEmKe). I customized her solution a little bit to solve my problem with feedback slider;
5. [Nicolas Gallagher](http://nicolasgallagher.com/) for a great opportunity to use normalize css instead of css reset: https://necolas.github.io/normalize.css/;
6. [MEAbid](https://stackoverflow.com/users/5906922/meabid) for the matchmedia js method which was taken from the [following post](https://stackoverflow.com/a/48502306), https://creativecommons.org/licenses/by-sa/3.0/. I used my media query and DOM elements;
7. [W3Schools](https://www.w3schools.com/) for the solution to enable switching `.active` class between menu-toggle elements which was taken from the 3rd step of this article https://www.w3schools.com/howto/howto_js_active_element.asp. I used my DOM elements and query selectors;
8. [Shubham Prakash](https://stackoverflow.com/users/8134055/shubham-prakash) for the way to add 'box-shadow' to navigation bar which was taken from the [following post](https://stackoverflow.com/a/58785027), https://creativecommons.org/licenses/by-sa/4.0/.


## Road map for the next project

I've already chalk out plan for the next project including new and yet uncharted technologies including webpack module bundler and LESS CSS preprocessor.

## Conributing

If you get interested in this project, I'd be glad to see your solutions. Pull requests are welcome!

## License

[MIT](LICENSE.md)