# Hockey Score Board



![Am I Responsive](assets/images/amiresponsive.png)

## Features

The website is a simple ball hockey Score board with program time for each period. The user can add the rooster in the bottom of the score board at the beginning of the game. Once the game has started, the user can easily stop and play the timer, add/remove goal to/from a team, add/remove shot to/from each team. The timer can also be modified manually to accomodate different time rules.

### Existing Features

__Timer__

- The timer is the biggest object in the page to ensure all players can see the time. The timmer has 3 functions:
    - Set Time: By click on the setting button, the user can modify the time. If the value of second exceed 60, a error message is sent to the user. If the value of minutes exceed 100, a alert message is sent to the user telling him that the game is way too long but the command is still executed to accomodate user who would like to set up the timer for a 2 hours free play by example.
    - Play time: The timer start going down by one second for every tick.
    - Stop time: The timer stop ticking.

![Score Board](assets/images/scoreboard.png)
![Score Board Setting](assets/images/scoreboard-setting.png)

__Goal panel__

- The goal panels are shown on each side for each team. The user can add/remove a goal to/from each team.

![Goal Panel](assets/images/goal-team-1.png)
![Goal Panel](assets/images/goal-team-2.png)

__Period Panel__

- The period panel is between the goal panel of each team. It is initially set to 0. If the user try to remove a period when it is at 0, it will send an error message 'Impossible!'. When the user increase the period to 1,2 & 3, the time will be set to 10 minutes and a alert message is sent stating 'Beginning or Period 1/2/3. When the user increase to period 4, the message is 'Beginning of overtime!' and the time is set to 5 mins.


![Period Panel](assets/images/period.png)

__Shot panel__

- The shot panels are shown on each side for each team. The user can add/remove a shot to/from each team. 

![Shot Panel](assets/images/shot.png)

__Rooster Panel__

- The Rooster panels are shown on each side for each team. The user can add the rooster of each team. When the button is clicked, a form is added to the div setting. 3 entry are required before submiting the form: the player #, player first name and player last name. Once submitted, the form is removed from the div setting the the information of the player are added to the div rooster.


![Rooster Panel](assets/images/rooster.png)

### Features left to implement

- A penality panel will be implemented in a futur version. The penality panel will add the player number with the time he is on penality. Once the button in the Timer panel play is clicked, the time of the penality would also start. When the the is egal to 0:00, the block is removed.

- A function to the goal panel will be implemented in a futur version where the user can enter when a team score the details of the player who scored and the player who did the pass to the scorer. Those data will be kept in a database for the next function.

- At the end of the game, the statistic of the game will be sent in a format that shows who won the game, the details of each goal (Scorer + passer) and the number of shot for each team. 

## Testing

You can find below that all testing has been completed.

### Validator Testing

- HTML validator have been completed and all errors and warnings have been fixed.

![HTML validator](assets/images/html-validator.png)

- CSS validator have been completed and no errors or warnings have been found.

![CSS validator](assets/images/css-validator.png)

- Lighthouse has been run through all the pages, see the below result:

![Lighthouse](assets/images/lighthouse.png)

- The performance is the only assessment which has not achieved 100 points. Two main factors explain the lack of performance: 
    - The CSS files is too heavy. To achieve a perfect performance, CSS file should have been optimised.
    - The JS files is too heavy. To achieve a perfect performance, JS file should have been optimised. The use of library would greatly improve the performance.


### Unfixed Bugs

 - All bugs have been fixed. Performance could be upgraded by optimizing the CSS & JS files.

## Deployment

- The website has been deployed using Github following the below steps
    -  The files have been prepared using Gitpod
    -  The files have been pushed to Github using Git commands
    -  The correct files in the repositories have been selected
    -  In the setting / page, the source has been put on "Deploy from a branch" and the branch on "main" then click save
    -  The website is now deployed

The live link can be found here: 
## Credits

- The project idea came from a request of my brother who would like his ball hockey website to be updated. The colors represent his hockey league colors.

- The coding itself was developped using the tool of the course. For details how to run specific functions, the website Stack Overflow was a great help. Please note that no code have been copy/paste from any website. The website were only a tool to understand the mechanic of the code.

### Content

- The icons in the navigation menu and the scam form were taken from [Font Awesome](https://fontawesome.com/).

- The font family were taken from [Google Fonts](https://fonts.google.com)

### Media

- Non-applicable.


