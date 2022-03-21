<h1>Interactive Frontend Milestone Project 2 - Alzheimer's Awareness Website</h1>

<img src=assets/images/screenshots/responsive-page.png>

View live project [here](https://duggyl.github.io/frontend-milestone-project-2/).

# Design Briefs
This frontend project is designed to raise Alzheimer's awareness in an interactive, easily digestible reading layout with a simple memory base game to keep visitors engage and emphasise the importance of brain exercises to improve short term memory. The website will not be comprehensive but present bitesize information to help visitors understand Alzheimer's. It is designed to be responsive and accessible on a range of devices, making it easy to navigate for the potential visitors.

## Purpose & Goals
-   Fun memory base game (match pairs game) for visitor to play.
-   Raise awareness of Alzheimer's.
-   Provide bitsize information to visitor (Types of dementia, diagnosis and treatments).
-   Encourage visitor to participate in "World Alzheimer's Awareness Month".

## User Experience (UX)
-   ### First Time Visitor Goals
    - As a First Time Visitor, I want to easily understand the main purpose of the site. Play fun memory game and learn more about Alzheimer’s.
    - As a First Time Visitor, I want to know how to play the game and I want jump straight into the game. 
    - As a First Time Visitor, I want to navigate around the game easily, UI are responsive and maybe play a few more rounds.
    - As a First Time Visitor, I want to be able to easily navigate throughout the site.
    - As a First Time Visitor, I want to find more information about Alzheimer's.

-   ### Returning and Frequent Visitor Goals
    - As a Returning Visitor, I want to play memory game again.
    - As a Returning Visitor, I want to find the best way to find more information about Alzheimer's, research and charities.

## Main Landing Page Layout
-   Memory game.
-   How to play the game.
-   The World Alzheimer's Day information.

## Wireframes
At the early conception stage of the project, the idea was to have a 4x4 grid of the memory game and Alzehimer related information pop up after the player clears the game.

-   1st draft of Homepage Wireframe [view](./assets/images/memory-game-wireframe/desktop-wireframe.png)
-   1st draft of Popup Wireframe [view](./assets/images/memory-game-wireframe/popup-wireframe.png)
-   1st draft of Wireframe [view](./assets/images/memory-game-wireframe/mobile-wireframe.png)

But as the project progress, I feel the webpage need to teach visitors how to play the game and offer visitors the option to explore Alzheimer's related content and not bombard the visitor with too much information after they win the game. 

<img src=assets/images/screenshots/new-wireframe.png>

After meeting with mentor [Narender Singh](https://github.com/nar3nd3r), a few changes were made to declutter the landing page, increase emphasis on the memory game and group Alzheimer related information in one place. Simplify the win screen to congratulate the players and encourage replay. The difficulty option feature was scrapped in favour for increase icons and one difficulty. 

# Design
-   The landing page is designed with ease of use for visitors in mind. The memory game is the first thing visitor see, next to how to play instructions. 
    The visitors can engage with the game without the need to navigate around the page, the page designed with a minimum scroll in mind. The visitor can interact with everything on the page with a single click. 
-   The pink banner at the top and bottom is designed to help visitors focus on the game in the middle. The icons have small animation when you hold and click. 
    The icons shrink slightly in response to interaction, creating small feedback and satisfaction when interacting with it.
-   Within the <b>“Let’s Play Memory Game”</b> box, if visitors wish to learn more about Alzheimer's, they can click on the link provided, and it will send visitors directly to the “About Alzheimer’s” content below. 
    The link changed colour to purple when hovering above “click here”. A small interaction to entice visitors to click on the link.

<img src=assets/images/screenshots/desktop-screenshot.png>

-   About Alzheimer’s pieces of information is a brief and quick summary of the disease. All the text information provided by [Alzheimer's Society](https://www.alzheimers.org.uk/get-involved/world-alzheimers-month/).

I did not add Alzheimer's Society website link and their contact details as I don’t have an affiliation with Alzheimer's Society Charity.
This project was inspired by their works in research, cure, care and prevention of dementia. Hopefully, this project help raise awareness and encourage visitors to seek more information about Alzheimer’s and dementia. 

<img src=assets/images/screenshots/desktop-screenshot1.png>

## Responsive Design and Features
-   Responsive on all device sizes.
-   Pictures box resize base on device sizes.
-   Text paragraph expands or collapse base on device sizes.
-   Text layout adjusts base on the screen sizes. Allow better readability on small screen sizes.
-   Adaptive design page layout will reorder into columns based on screen sizes, allowing easy navigation and improving page clarity.

I make the decision to maintain the memory game grid to the column of 4 on all device sizes. After multiple testing on various small screen sizes, 
I feel if the tile break into a column of 3 or 2, it is really difficult for the player to navigate around the icons and remember their previous position. 
When the game tile stacks into the column and create multiple rows, it forces the player to scroll around the page to click on different icons. 
After further testing, a column of 4 hit the right balance of readability on small screen size and provide the minimum amount of scrolling.

<img src=assets/images/screenshots/mobile-screenshot.png>

Responsive Tablet Layout [view](./assets/images/screenshots/tablet-screenshot.png)

## Win Screen
<img src=assets/images/screenshots/winoverlay-desktop.png>

After the players successfully complete the game. A “You Win! screen will pop up to congratulate the player for clearing the game. If the player which to play the game again, they can click on “Replay” to play the game all over again. 

Mobile Win Overlay [view](./assets/images/screenshots/winoverlay-mobile.png)

## Colour
<img src=assets/images/screenshots/colour.png>

-   The two main primary colours used are Pale Violet Red (Pink) and Medium Slate Blue (Violet Purple).
-   Black text for readability on white background.

The reason I chosen these 2 combinations colour for my project is that it synergise very well with the brain mascot(logo/icon). According to the psychology of colour, pink is a sign of hope. It is a positive colour that inspires warm and comforting feelings. Pink calms and soothes our emotional energies, relieving feelings of anger, aggression, resentment, abandonment and neglect. And the color purple means wisdom, bravery, and spirituality. 

## Typography
<img src=assets/images/screenshots/fredoka-font.png>

I used <b>Fredoka</b> throughout the webpage to maintain cohesion across the project. Using different font weights to convey emphasis and importance on some of the content. The reason I chosen to Fredoka family on this project, it because the font conveys a sense of fun, friendliness and is easy on the eyes. The big, round and bold typeface are clear and has great letter-spacing leading to ease of communication.

## Imagery
<img src=assets/images/screenshots/icons.png>

-   The brain mascot sets a fun whimsical tone and grabs visitor's attention. 
-   The happy cheering brain mascot uses on the win overlay screen to reflect the   player's success.
-   I have chosen these everyday household images to create familiarity with things people use every day. Icons are easily recognised and differentiated. The icon's art style compliment the brain mascot.

##  Future Features
In the future, I would like to add the following features:-

-   Option to pick different difficulties.
-   Option to play other memory-based games.
-   Leaderboard feature.
-   Subscribe to newsletter.
-   Direct donation feature (To Alzheimer's charities).
-   Google Map API (help locate nearby specialists and clinics).

# Technologies Used

### Languages Used

-   HTML5
-   CSS3
-   Javascript

### Frameworks, Libraries & Programs Used
1. [Bootstrap v5.1.3:](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
 Bootstrap was used to assist with the responsiveness and styling of the website.
1. [Google Fonts:](https://fonts.google.com/)
Google fonts were used to import the Fredoka font family.
1. [Gitpod:](https://gitpod.io/)
Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
GitHub is used to store the project's code after being pushed from Git.
1. [Photoshop:](https://www.adobe.com/ie/products/photoshop.html)
Photoshop was used to resizing images and editing photos for the website.   
1. [Balsamiq:](https://balsamiq.com/)
Balsamiq was used to create the wireframes during the design process.
1. [Firefox Develop Tools:](/cssgradient.io)
Develop Tools used to maintenance the web page.

# Testing

### Testing User Stories from User Experience (UX) Section

-   #### First Time Visitor Goals
    -  As a First Time Visitor of the website, I want to easily understand the main purpose of the site and learn more about Alzheimer’s.

        - Upon entering the site, users are automatically greeted by the main image, which immediately draws Visitors eyes to the page
        - Easily readable navigation bar
        - Each section has been layout carefully to increase readability, easy for the eyes to follow.

    -  As a First Time Visitor, I want to be able to easily navigate throughout the site to find content.

        - The site has been designed to be fluid to read. At the top of each page there is a fixed navigation bar, each link describes what section they will end up at clearly.

    -  As a First Time Visitor, I want to play fun & engaging memory game. I want the game to be easy to navigate UI and maybe play a few more rounds.

        - 
        

    -  As a First Time Visitor, I want to find the best way to find more Alzheimer base information, research and charities.

        -
        
-   #### Returning and Frequent Visitor Goals
    -  As a Returning Visitor, I want to find the best way to find more Alzheimer base information, research and charities.

        - 

### Further Testing
-   The website was tested on Google Chrome, Firefox, Microsoft Edge and Safari browsers.
-   Testing was done to ensure that all pages were linking correctly.
-   Friends were asked to review the site and report any bugs or user experience issues.

### Mobile / Tablet Devices:
The website was tested for responsiveness using Google/Firefox Chrome Developer Tools.
-   Galaxy S10
-   Galaxy S20
-   Galaxy Note
-   iPhone X Pro/Max
-   iPhone 11 Pro/Max
-   iPhone 12 Mini/Pro/Max
-   iPhone 13 Mini/Pro/Max
-   iPad
-   iPad Pro
-   Kindle

### Known Bugs

# Deployment

### GitHub Pages
The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/).
2. At the top of the Repository locate the "Settings".
3. Click on "Pages" will open "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. At the top near github header to locate the now published site [link](https://duggyl.github.io/chef-dicson-milestone-project-1/).

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps:-

1. Log in to GitHub and locate the GitHub Repository.
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone
1. Log in to GitHub and locate the GitHub Repository.
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash.
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied.

# Credits

### Code
-   This memory game based on multiple javascript tutorials. I studied tutorials extensively and breakdown all the components it needs to build a funtional javascript memory game.
    -   Create a memory game with JavaScript by Fakorede Damilola. [link](https://dev.to/fakorededamilola/create-a-memory-game-with-js-1l9j)
    -   Memory Game in Vanilla JavaScript by Marina Ferreira. [link](https://www.freecodecamp.org/news/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae)
    -   Learn JavaScript by Building 7 Games - Full Course by Ania Kubów. [link](https://www.youtube.com/watch?v=ec8vSKJuZTk&list=PLDpvVzk1kZl_xWyRhgVk5o2QUIaW_WyQc&index=36&t=3140s)
-   How to Overlay by w3school. [link](https://www.w3schools.com/howto/howto_css_overlay.asp)
-   Bootstrap Library used throughout the project mainly to make site responsive.

### Media
-   All icon images from freeject - Free 15 Home Living Stuff Illustration. [link](https://www.freeject.net/2022/03/free-15-home-living-stuff-illustration.html)
-   Brain mascot from Vecteezy. [link](https://www.vecteezy.com/vector-art/1859771-world-mental-health-day-human-head-cartoon-brain)
-   Footer banner from upsplash by Robina Weermeijer. [link](https://unsplash.com/photos/3KGF9R_0oHs)
-   Fredoka font supplied by Google Fonts.
-   Images used in readme were screen shot from W3 Validators and Am I Responsive.

### Acknowledgements
-   My Mentor [Narender Singh](https://github.com/nar3nd3r) for helpful feedback regarding design, features and functionality. 
-   Stack Overflow developers on questions forum who provided helpful tips and solutions.
-   W3schools and MDN Webdocs helped me learn more about HTML/CSS/JS.