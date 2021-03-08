# Animal Flip
## A Memory Game Website created by Vijayalakshmi Dhandapani
### [GitHub](https://github.com/vijusuren/my-MS2)
![Responsive-view](assets/image/Capture.PNG)
# Milestone Project 2
## Table of Contents
* [**Project overview**](#project-overview)
* [**UX**](#ux)
  - [**User Goals**](#user-goals)
  - [**User Stories**](#user-stories)
  - [**Design**](#design)
  - [**Libraries**](#libraries)
  - [**Colour Scheme**](#colour-scheme)
  - [**Wireframes**](#wireframes)

* [**Features**](#features)
  - [**Existing Features**](#existing-features)
  - [**Features Left to Implement**](#features-left-to-implemement)

* [**Technologies Used**](#technologies-used)

* [**Testing**](#testing)
  - [**Validators**](#validators)

* [**Deployment**](#deployment)

* [**Credits**](#credits)
  - [**Content**](#content)
  - [**Media**](#media)
  - [**Acknowledgements**](#acknowledgements)

## Project Overview
This Website was created for the purpose of completing the Second Milestone Project for the Code Institute's Full Stack Developer Course.
The purpose of this project is to make a fun memory game for both kids and adults.Kids will enjoy the interactive game with beautiful images 
and mild sound clips, and adults can also enjoying while playing. There is fun facts about each and every animals sure to learn something intersting about animal.

## UX 
### User Goals
- Display and work on all devices from large screen monitors, Laptops to tablets and phones.
- Provide an interactive scoring game for animals that would challenge the users memory.
- Provide fun facts about animals based on the pictures in the memory game.
- Provide a contact page for a user to receive new updates of upcoming gmaes.

### User Stories
From the designer perspective:-
- The site needs to easy to use and navigate.
- The site colour and backgrounds needs to attract on the eye.
- The picture on the site need to be clear so that user can easily identify the animal.
- The Animalinfo page have some effects on Image. And easy to read and learn some interesting things.
- The contact form needs to be easy to enter the information to attract more people.

From the User perspective:-
- As a user, I want to find the game a challenge but not hard.
- As a user, I want to learn some intersting information about animal.
- As a user, I want to know how much moves I took to finish the game.
- As a user, I want to restart my game if I make a mistake.
- As a user, I want to contact the game maker and give my feedback.
- As a user, I want to the website to make me want to visit and play the game again. 

### Design
#### Strategy
The main aim to build this game is to test my knowledge of **Javascript** and learn more in the building process. To select Animal for memory games because animals are easily attract by both kids and adults.
I wanted a simple game that has easy to understand and site is easy to navigate through.

#### Scope
- I wanted to make a memory game that is easy to play and images should be different from each other so that it will test the memory of the user.
- There will be one Restart button to restart the game and Music button to control the backgorund music.
- Timer will be there to show the time taken to complete the game in minutes and seconds.
- After finishing the game popup message will occur with claps sound shows the Moves taken, Stars and Time taken to complete the game.
- Animal Info page site have the information about animals.
- The contact page will be a contact form to get the feedback from the players.
- And link to social network will also be in site.

#### Structure
- This website contains three pages which are linked to each other through Navigation bar and also fixed.
- The Header section will have Introduction of the game, How to play instructions, Moves and match counter.
- The timer to show the game timing in minutes and seconds.
- The star counter (which will show 3 stars for less than 14 moves, 2 stars for moves between 14 and 22, and 1 star for moves more than 23). 
- The first page memory game will be on Home page. The second page will be Animal Info contains some some information about animal.
- The last page will be the contact page to give the feedback about the game and website.
- The footer section will be fixed at the bottom having link to social network.

#### Skeleton
**Wireframes**
- [Home Page](assets/wireframe/home_page.pdf)
- [Animal Info](assets/wireframe/animal_info.pdf)
- [Contact Page](assets/wireframe/contact_page.pdf)

#### Surface
**Colors**
- The background color is Kaitoke Green![#295939]
- Navigation bar and Footer bar is Olivine![#96bb7c]
- Restart button and Music button is Olivine![#96bb7c]

**Libraries**
- [Bootstrap 4.5](https://getbootstrap.com) - is a framework for building responsive, mobile-first websites.

- [Google Font](https://fonts.google.com/) - is a font application.

**Images**:
Images are from google.

**Sound**:
The background music is from www.fesliyanstudios.com/happy-music.

##### back to [top](#table-of-contents)
---

## Features

**Navigation Bar**

This website features a **Responsive** navigation bar on the top of the page with the brand name on the left 
and Menu links on the right. The brand name is linked to the Home page of the site. 
Menu links are linked to 3 different pages of the site. 
Home link is linked to the **index.html** page, Animal Info link is connected to the second-page **animalinfo.html** 
and the third link is contact, which is connected to the third-page **contact.html**.

**Home page**

The home page is having the game board which is 4X4 grid with a total of 16 images. 
The back image is of animal zoo and front image is of 8 different animal.

* Cheetah
* Deer
* Giraffe
* Hippopotamus
* Lion
* Rabbit
* Tiger
* Zebra

The heading has name of the game and instruction abut how to play the game.

**Moves and matches counter** shows how many moves have been made and how many matches have been done.

**Star ratings** will show the numbers of stars based on the moves made by the player, 
3 stars for less than 14 moves, 2 stars for moves between 14 and 22, and 1 star for moves more than 23.

A **Timer** will show the time taken by the player to finish the game in minutes and seconds.

The **Restart button** will restart the game when clicked.

**Music** button will play/mute the background music.

**Pop Up** modal is added to show with background applause sound when the game is finished.
The heading will show animated text in rainbow color.
It will show the number of moves taken to complete the game and the number of stars earned during the game. 
The timer in the modal shows the time taken to complete the game.

**Animal Info Page**

The second page of the website is the information page about animal. 
This has one dropdown box to select a animal, and after selection, the page will show the 
**Fun Facts** and one big **Image** of the selected animal. 

**Contact Page**

The third page of the website has a **Contact form**, which is implemented to give feedback about the game. 
The contact form is connected to my Gmail account through **emailJS**, 
and the feedback submit button will become green and its text will turn to *Feedback Sent* after 
sending the feedback.

**Footer**
The footer is pinned to the bottom of all three pages and it has a link to social networks like **Facebook**,
**Twitter** and **Github**. The icons are represented from **Font awesome** icons.

### Existing Features

- Navigation bar is fixed on top, the page links are grey and when hovered or chosen page is live and these are colored with white.
- The game board contains a grid which stays the same grid on all devices from large screen devices to tablets and phones.
- When a card is clicked it trunaround and show the image of animal user can remember where animal are to match the pair.
- The number of moves and matches are counted.
- The star rating also updated depending on the number of moves as a user can complete the game. This feature is added
to give feedback to the player about their game.
- Timer is added which starts with first card clicked and it will show the time taken to complete the game.
- The Restart button is added to reset the game board and restart the game. 
- The Music button is added to play the background music, which is mute automatically when the game finish.
- In the animal info page dropdown box is added with list of animals in it to be selected.
- The fun facts is added as a user they can learn some intersting information about animal.
- The Contact form is added in the contact page to get feedback about the game.

### Features Left to Implement

- A popup section to be added for Easy,Medium and Hard level of game. This would allow to extended the grid to more
cards and more animal depending on the level selected.
- The sound effects and moving animation of Image would be added in the animalinfo page.
- Userboard to be added to display list of user who completed the game in less moves and time.

##### back to [top](#table-of-contents)
---

## Technologies Used

- [HTML5](https://en.wikipedia.org/wiki/HTML)
    * The language used to create and sort the content of the website.
- [CSS](https://en.wikipedia.org/wiki/CSS)
    * The language used to style the HTML5 elements according to the design purposes.
- [Javascript](https://en.wikipedia.org/wiki/JavaScript)
    * Javascript is used to add functionality and make the site more interactive.
- [jQuery](https://jquery.com/)
    * jQuery is used in making the site more interactive.
- [Bootstrap framework](https://getbootstrap.com/)
    * I decided to use Bootstrap's grid container system as I wanted to design my project with a 'mobile first' approach.
- [Gitpod](https://www.gitpod.io/)
    * I relied on Gitpod's dev environment to write the code for my project.
- [GitHub](https://github.com/)
    * I hosted my deployed website to GitHub, with previous versions of my code stored through the commit history.
- [Balsamiq](https://en.wikipedia.org/wiki/Balsamiq)
    * I used Balsamiq to make Wireframes for the project in skeleton stage.
- [Font Awesome](https://en.wikipedia.org/wiki/Font_Awesome)
    * Font awesome is used to import Github, Facebook, Twitter, and Linkedin font awesome icons to beautify the page.
- [Google Fonts](https://fonts.google.com/)
    * Google Fonts is used to import font for this project.

##### back to [top](#table-of-contents)
---

## Testing 
### Testing User Stories

1. As a user, I want to find the game a challenge but not hard.

    * The game is very simple memory game with no hard level.The instruction are given below the heading.
      Easily uderstand by both the kids and adults.
    * The moves and matches display in the side of the screen. If they are playing on mobile it will display in the top of the page.
    
2. As a user, I want to learn some intersting information about animal.

    * The second page of the site is information about animal. User can learn some interesting facts about animal.
    * Tested dropdown menu on all devices to make sure it showed ok.
    * Tested images on second page are animates on all devices.

3. As a user, I want to know how much moves I took to finish the game.

    * Tested the moves in the game counted correctly and also display moves in congratulation popup window.
    * Tested the stars for the game counted correctly and also display stars in congratulation popup window.
