# Rock-Paper-Sciscors
[live project on Github](https://joelsita.github.io/project-two/)

## Project Description
Rock, Paper, Scissors. The familiar game of Rock, Paper, Scissors is played like this: at the same time, two players display one of three symbols: a rock, paper, or scissors. A rock beats scissors, scissors beat paper by cutting it, and paper beats rock by covering it.
- Website consist of two pages
  - Home page: this includes an explaination of the game and the rules on how to play.

  - Game page:there are four sections

      - Game choices section: there are 3 buttons to chose from(Rock, paper and scissors)
      - results section: this displays the result of each player choices. red message is for computer, black for tie and green is for user.

      - Score section: this keep record of the game. this is to let each player knows of their results as they play the game.

      - restart section: here the user can chose to restart the game from scratch instead of keep refreshing the page. This function wipes all the previous results and brings the game back to zero.



![overall site](assets/images/responsive-one.png)
![overall site](assets/images/responsive-two.png)



# Table of Contents
1. [UX](#user-experience-ux)
    - [User stories](#user-stories)
    - [New User](#new-user)
    - [Old User](#old-user)
2. [Design](#design) 
    - [Wireframes](#wireframes)
      - [Mobile](#mobile)
      - [Desktop](#desktop)
    - [ Colour Scheme](#colour-scheme)
    - [ Imagey](#imagery)
3. [Deployment](#deployment) 
4. [Features](#features)
   - [Video](#video)
   - [Welcome Message](#welcone-message)
   - [About US](#about-us-section)
   - [Galleries](#galleries-section)
   - [News & Events](#news-events)
    - [Contact US](#contact-us)
     - [Footer](#footer)

5. [Testing](#testing)
    - [Features Testing](#features-testing)
    - [Browser Testing](#browser-testing)
    - [Responsiveness](#responsiveness)
    - [Responsive testing](#responsive-testing)

6.   [Code Validation](#code-validation) 
      - [HTML Validation](#html-validation)
      - [CSS Validation](#html-validation) 

7.   [Lighthouse Test](#lighthouse-test) 
      - [Performance](#performance)

8.   [Libraries and Programs](#libraries-and-programs) 

9.   [Technologies Used](#technologies-used) 
      - [Languages](#languages)

10.   [Bugs & Solution](#bugs--solutions) 
      - [Solution](#solution)

11.   [Credits & Reference](#credits) 
      - [Code Used](#code-used)

12. [Media](#media)
12. [Acknowledgements](#acknowledgements)



# User experience (UX)
## User Stories

- As a user playing the game, I want the description of the game to be simple and clear to understand.
- I want a simple diagram which shows elements of the game.
- I want want the game buttons to be easy to use and navitage around.

- I want a message to display which options each player selected.

- I want to keep track of my score.
- I want to have the option to restart the game.
- I want to be able to return from home page easily so I can go back read the game rules and description.






## Design
Website is consist of one page. easy to navigate and smooth transition to go through each sections.
## Wireframes
#### Mobile
 ![wireframes](assets/documents/mobileWireframe.jpg)


  #### Desktop
 ![wireforme](assets/documents/desktopWireframe.jpg)

## Colour Scheme
 ![wireforme](assets/documents/color-scheme.jpg)

## Imagery
- Images for this website was taken from mags foundation social media pages.


# Deployment
1. Select the project, and go to the Settings tab of your GitHub repository.
2. On the left-hand > under the Code and Automation section, select Pages.
3. under build and deployment >set 
Source to 'Deploy from Branch'.
The main branch is selected.
The folder is set to / (root).
4. Under Branch, click Save.
5. Go back to the Code tab. Wait a few minutes for the build to finish and refresh your repo.
6. On the right-hand side, in the Environments section, click on 'Github-pages'.

# Features
## Home Page
  ![navigation](assets/images/home.png)
  - Home page to serve as a teaser and trustworthy guide towards the pages that have the necessary information. 
  - Home page displays the game Title and image which covers the element of the game.
  - A brief descriptions of the game and rules on how to play.
  - There are 4 buttons in home page
    - Home button: display in grey colour to show where you are located in the page. I have added orange colour when the user hover-on home button.
    - play game button: Displays in blue colour, when when the user hover-on  button it changes in orange. This button brings the user in game page.

  - play now button: Displays in blue colour, when when the user hover-on  button it changes in orange. This button brings the user in game page.

## Game Page
  ![navigation](assets/images/game.png)
 - Game title
 - There are 6 buttons in Game page
   - Play-game button: display in grey colour to show where you are located in the page. I have added orange colour when the user hover-on home button.
   - home game button: Displays in blue colour, when when the user hover-on  button it changes in orange. This button brings the user in home page. 
   - Three buttons of game choce .used hands emoji symbol which represent Rock Paper and Scissors.
   - restart button: instead of the user to keep refreshing the page to start new game this functionlity gives the user the power to clear the results and start fresh.
- player and computer choice section:
  - computer choice shows first follow by player's choice.
- Results section
  - if computer wins the message is display in red colour
  - if user wins the message is display in green colour
  - if the result is tie then the message is displayed in black colour.
- Game score section
  - when computer win the score board is increamented by 1 and the colour is displayed in red. 
   - when user win the score board is increamented by 1 and the colour is displayed in green. 


## About us Section
This section provide about information about mags foundation. This outline your principle and goals. it provides great deatils of the services we operate.
![video](assets/documents/about.jpg)

## Galleries section
Here I have included some of the pictures that was captured during our annual events. Those images provide physical represention of the activies we run. I have added a hover affect when user hover  on a picture the sizes increases and has shadow
![video](assets/documents/galleries.jpg)

## News &Events 
In this section we have provided users with all the news & events that will take place throughout the year.

![news](assets/documents/new-one.jpg)
![news](assets/documents/news-two.jpg)

## Contact US
This section is divided in two halves. I have provided our contact details in case the users want to get in contact with us. 
I have also provide a form for users to submit their inquiries 
![contact](assets/documents/contact-one.jpg)
![contact](assets/documents/contact-two.jpg)
created activation <a href="https://formsubmit.co/" target="_blank"> here </a>. I replaced my naked email and replaced it with string ID "68b701a9289a54a8c8eab30e59949984. I submited a form and received the form in my email.

## Footer
footer section contain our social media in case the visitor want to follow us.
![footer](assets/documents/footer.jpg)

# Testing:
## Features Testing
All th feaures of the website have been tested to make sure it working as designed.

<table>
  <thead>
    <tr>
      <th>Feature</th>
      <th>Test case</th>
      <th>outcome</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Navbar| About</td>
      <td>click on about link</td>
      <td>This brings the user to about section</td>
    </tr>
    <tr>
      <td>Navbar| Gallery</td>
      <td>click on gallery link</td>
      <td>This brings the user to Gallery section/ pass</td>
    </tr>
    <tr>
      <td>Navbar| Event</td>
       <td>click on Event link</td>
      <td>This brings the user to Event section/ pass/ all the text is readble/font and size  is good.</td>
    </tr>
    <tr>
       <td>Navbar| Contact</td>
       <td>click on Contact link/ this brings the user to contact section. user tried to submit a form without filling all the required fields</td>
      <td>This brings the user to Event section/user was prompt to fill the required field before submitting the form/ pass</td>
    </tr>
    <tr>
      <td>social media icon</td>
       <td>click on icon link</td>
      <td>this open new page and brings the user to our social media pages/ pass</td>
    </tr>
  </tbody>
</table>

## Browser Testing
Website is tested acrossed below browsers to check performance
<table>
  <thead>
    <tr>
      <th>Tested browser</th>
      <th>Appearance</th>
      <th>Responsiveness</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Chrome</td>
      <td>All the links, form, button appears good</td>
      <td>responsive design/ Good</td>
    </tr>
    <tr>
       <td>Edge</td>
      <td>All the links, form, button appears good</td>
      <td>responsive design / Good</td>
    </tr>
    <tr>
      <td>Firefox</td>
      <td>All the links, form, button appears good</td>
      <td>responsive design/ Good</td>
    </tr>
 
  </tbody>
</table>

##  Responsiveness
Website is tested acrossed below browsers to check performance
<table>
  <thead>
    <tr>
      <th>Tested device</th>
      <th>Appearance</th>
      <th>Responsiveness</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Chrome</td>
      <td>All the links, form, button appears good</td>
      <td>responsive design/ Good</td>
    </tr>
    <tr>
       <td>Edge</td>
      <td>All the links, form, button appears good</td>
      <td>responsive design / Good</td>
    </tr>
    <tr>
      <td>Firefox</td>
      <td>All the links, form, button appears good</td>
      <td>responsive design/ Good</td>
    </tr>
 
  </tbody>
</table>

## Responsive testing
<table>
  <thead>
    <tr>
      <th>Tested Device</th>
      <th>Site responsive  min-width: 600px</th>
       <th>Site responsive min-width: 768px</th>
        <th>Site responsive min-width: 992px600px</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Phone 14 pro</td>
      <td>Good/ nav Links are hiden. Menu icon display</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
       <td>ipad tablet</td>
      <td>N/A</td>
      <td>Good/ nav Links are displayed</td>
      <td>N/A</td>
    </tr>
    <tr>
       <td>nest hub larger screen</td>
      <td>N/A</td>
      <td>N/A</td>
      <td>Good/ nav Links are displayed</td>
    </tr>
 
  </tbody>
</table>

# Code Validation:
## HTML Validation
![HTML](assets/documents/html-validation.jpg)

## CSS Validation
![CSS](assets/documents/css-validation.jpg)

## Lighthouse Test
### performance 
* was less than 90%. I reduced image width to 600px and this improves the overall preformance and accessibility. 
![CSS](assets/documents/lighthouse%20test.jpg)

## Libraries and Programs:
- Used Visual Studio Code  as editor.
- Used Font Awesome for the social media icons.
- Used GitHub as version control to add, commit and push to repository
- Used Google fonts to traget elements font style.
- Used balsamiq for wireframes
- Google Chrome 
- Firefox (For testing purpose)
- MS Edge (For testing purpose)


# Technologies Used
## Languages
languages used: HTML(page structures) and CSS3(styling of the page).

## Bugs & Solutions

<table>
  <thead>
    <tr>
      <th>Bugs</th>
      <th>Section</th>
       <th>Solution & Fix</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Once you switch to mobile version, click menu icon the dropdown displayed. This is remain on a larger screen</td>
      <td>navigation bar</td>
      <td>I included min-width: 768px
 #check:checked ~ ul li {
    display: inline-block;
    border: none;
  } in media query 
</td>
    </tr>
    <tr>
       <td>At min-width: 768px I added padding of 24px .as result this made contact-us link showing out of place. </td>
      <td>Navigation Bar</td>
      <td>I removed padding</td>
    </tr>
    <tr>
       <td>page width scretching making page's contect displaying out of place.</td>
      <td>All Sections</td>
      <td>added a container 
.container {
  max-width: 1080px;
  width:100%;
  margin: 0 auto;
}</td>
    </tr>
      <tr>
       <td>Welcome video auto playing</td>
      <td>Main section</td>
      <td> removed autoplay loop muted and added controls. This gives the users the ability to control the video</td>
    </tr>
  </tbody>
</table>

### Issue

![bugs](assets/documents/bugs2.jpg)

### Solution

![bugs](assets/documents/bugs2-fixed.jpg)


# Credits
## Reference
- Toggle feature was taken from Ci project "love Running"
- Used <a href="https://www.w3schools.com/" target="_blank"> W3Schools </a> to implement some sections of my website.
- I watched video <a href="https://www.youtube.com/watch?v=Jq_Zebxa-YI&ab_channel=EasyCode" target="_blank">here </a> on how to add background video.


- I watched video <a href="https://www.youtube.com/watch?v=Trw_9lisYVY&ab_channel=Tech2etc" target="_blank">here </a> on how to make responsive gallary.
- I watched video <a href="https://www.w3schools.com/html/html5_video.asp" target="_blank">here </a> on how to control in the video so it doesn't autoplay.
- followed the steps provided in PP1 readMe video <a href="https://www.youtube.com/watch?v=jFGIQU2VVHc&ab_channel=MediaUpload" target="_blank" >here</a>

## Media
- All videos and pictures are from <a href="https://www.facebook.com/magloire.ndongo1" target="_blank">Mags foundation </a>
- Used <a href="https://favicon.io/">Favicon</a> to add to site.
- Used <a href="https://kit.fontawesome.com/be62d1111c.js" target="_blank">font awesome </a> to add social media icon.
- Used <a href="https://fonts.google.com/" target="_blank"> Google Fonts </a> to style website page.
    - Roboto (H1)
    - Lato (H3 & H4)
    - Poppins (H2)
    - sans-serif (Body)


## Acknowledgements
I would like to thank my mentor Spence for the help and support. I would like to also thank my wife, family and friend for the incredible support they have showed me during this project by doing all the testing for me.

[Return to top](#project-description)