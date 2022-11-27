# portfolio

Deployed @ TBD

## How to run

## Libraries used

1. To create border style around my avatar -- https://9elements.github.io/fancy-border-radius/

## Journal

Deployed @ TBD
repo -> https://github.com/reedx8/Portfolio

_nov 26 2022:_
- worked on and eventually finished mobile navbar by following this tutorial and modifying the code -> https://www.youtube.com/watch?v=OjQP7rPwJyE 

_nov 23 2022:_
- focused on adding all of the basic content (text for all sections, etc) to webpage, as well as contact form, to get the bare minimum done. However, having problem where adding text content in one section randomly adds space (ie padding) in other sections of the webpage. Fixing the grid rows to 600px each in root styles.css file instead of 1fr each seemed to fix this, and also further fixing rows in subrows (aboutSection's subgrid rows) also removed unwanted spacing being added as well, instead of just defaulting to using 1fr for row sizing. However, eventually I found the best way to fix this was to instead always use `grid-auto-rows: minmax(min-content, max-content);` instead of something like `grid-templates-rows: repeat(2, 1fr);`
- used a contact form from a code pen i found, and modified it to fit my needs with my own code

_nov 21 2022:_
- added the rest of the text content to all sections of page
- started fully filling in about section.
- had troubles with aboutHeadline h2 text messing up padding in introSection when h2 was 2em, also affecting position of aboutHeadline in its grid. Both were fixed when aboutHeadline h2 text changed to 1.5em.

_nov 19 2022:_

- Created general layout of website for both mobile and desktop
- Started adding content like my avatar in intro section.
- had a lot of trouble getting intro text to vertically center. Solved by correcting introTexts position in grid first, then adding flexbox to its child headline elements.

_nov 17 2022:_

- worked on navbar, wanted navbar html in separate file, learned to use jQuery in order to do this.
- Had a lot of trouble with the proper layout of the navbar.

_nov 15th 2022:_

- adding to the README, and rereading the final project guidelines to get a better understanding of the assignment. I then worked on getting a general outline of both what exact text content i would be using (eg describing myself in the about section) and general layout (eg ill use a one page website with sections to jump to, how i want each section to look, etc)

_nov 14th 2022:_

- worked on setting up github repo for the project, creating the initital folder structure

Things to touch on:

1. sessions work (tech used, how tech came together):
2. what worked:
3. what didnt work:
4. issues:
5. how fixed:
