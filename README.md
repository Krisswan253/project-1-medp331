# MEDP33100 - Project 1 Interactive Storytelling 
[EDIT THIS FILE for documentation]

## Live Demo
https://krisswan253.github.io/project-1-medp331/


## Project Overview

- Briefly describe the purpose of the project.
- Explain the story you are telling through the webpage and the key interactive elements.
This project is an interactive storytelling website that’s meant to feel like a broken/ dying computer system suddenly being opened up to the previous user's last inputs. It’s inspired by old terminal interfaces and the Fallout Pip-Boy style, but instead of being functional, it’s more about mood and narrative.

The story is presented as a “memory archive” that the user moves through. As you go deeper, things start to feel off, like the system is warning you of something. The idea was to make something atmospheric and slightly unsettling, where the story unfolds through interaction instead of just reading normally.

## Features

- List the key features of the project, including:
    - **Animations**: The main animation in the project is the typing effect, where text appears one letter at a time instead of all at once. This was done in JavaScript using setTimeout() and textContent to add one character at a time into the text box. I also used simple CSS effects like text-shadow, glowing borders, and hover states to make the interface feel more like an old terminal screen.

    - **Sound Effects**: I used HTML <audio> elements and JavaScript .play() and .pause() so the user could toggle the looping background sound on and off. I also used currentTime = 0 for the beep sound so it restarts every time it is triggered. I found the sample on pixabay (https://pixabay.com/sound-effects/technology-computer-sounds-25541/).

    - **User-triggered Events**: 
    The main interaction is done with keyboard input using addEventListener("keydown"). The user presses the left and right arrow keys to move through the archive entries. I also used button clicks for the boot screen, music toggle, and restart button on the crash screen.

    - **Responsive Design**: I used simple CSS media queries to make the layout stack differently on smaller screens. The main layout uses display: grid, and then changes to one column when the screen gets smaller.

## Technologies Used

- List the technologies and tools used in the project:
    - **Languages**: HTML, CSS, JavaScript
    - **Libraries**: none
    - **Other**: GitHub Pages for hosting, fallout 4 pipboy for design

## Credits

- List any third-party assets used in the project (e.g., sound effects, images, fonts) and provide proper attribution.
Google Fonts - https://fonts.google.com/specimen/VT323?preview.script=Latn
Pixabay - https://pixabay.com/sound-effects/technology-computer-sounds-25541/

- Acknowledge any resources, tutorials, or references you used to help complete the project.
used a lot of references from previous projects from other classes. 
JavaScript Typing Effect (W3Schools)
https://www.w3schools.com/howto/howto_js_typewriter.asp

This helped with understanding how to create the typing effect using setTimeout() and charAt() to display text one character at a time.

Typewriter Effect Explanation (GeeksforGeeks)
https://www.geeksforgeeks.org/javascript/typewriter-effect-in-js/

I used this as a reference for how recursive setTimeout() works for typing animations and how the function keeps calling itself until all characters are displayed.

Typewriter Effect Guide (Dev.to)
<!-- https://dev.to/topefasasi/how-to-create-a-typewriter-effect-with-html-css-and-js-a-step-by-step-guide-1f99 -->

This was helpful for understanding the overall structure of the typing effect and how it’s commonly used in storytelling websites.

CSS Typewriter Effect (CSS-Tricks)
https://css-tricks.com/snippets/css/typewriter-effect/

Used as inspiration for styling, especially things like blinking cursor effects and controlling how text appears visually.

JavaScript setTimeout() Logic (Stack Overflow)
https://stackoverflow.com/questions/52008777/settimeout-and-typing-effect

Helped clarify how setTimeout() works with functions and why it needs to be passed as a function instead of being called directly.

## Future Enhancements

- List any features you would’ve liked to add if given more time
more of a narrative, maybe have it glitch more
fit for moblie devices
more of user interaction such as typing to it
mini game to save the terminal? 
