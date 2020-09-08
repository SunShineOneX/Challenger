![Project Showcase](https://github.com/SunShineOneX/Challenger/blob/master/src/assets/CHALLENGER.png?raw=true)

# Install directions
- Clone challenger repo
- Open up Postico or similar PostgresSQL database client
- Create a database named challenger ( The spring app will auto create the collections upon running the application)
- Open Challenger back-end in Java and import as a maven project
- Launch the spring app in intellij
- Open up the Challenger react-app in your preferred IDE and npm i- to obtain all of the dependencies
- navigate in terminal to the challenger react app folder and type npm start to launch the app on your local server
- Enjoy!

# Challenger

Challenger is a PC gamers dream e-commerce store. Offering the best games, high-res monitors,
and mechanical keyboards at incredible prices and customer service that is impossible to find these days.
(Target clientele: Primarily PC gamers however gamers in general)
(MIssion: It is hard to have a refreshing, over-the-top customer service experience these days. It's also hard to find dirt cheap prices.
Challenger does both.)

### Front-end Technologies Used
- JS (primarily ES6)
- React
- React Router
- Use of async actions and AJAX requests
- Has 3 model APIs
- 1 API is a unique model CRUD API
- Bootstrap
- Responsive mobile design

### Back-end Technologies Used
- Java 
- Use of Postgres as SQL database
- Uses Spring Boot with Maven as a build tool
- Uses MVC architecture

### Anticipated Challenges
- connecting the front-end to the back-end 
- full CRUD capabilities on one of the model APIs
- being able to update my SQL database in real-time


### Stretch Goals
 - Redux
 - Live deploy
 - Google Firebase


### CRUD model API
One of the model APIs will include full CRUD capabilities where you are able to suggest your favorite video games to be reviewed by Challenger staff.
(The page will have a preset few popular games that "customers" want to have reviewed on page load. You will be able to enter the name of the game you want reviewed, the company who makes it, a text field to describe why you want Challenger to review it, and your email address for contact info.
This entered data will be updated into a seperate component called 'Review List' where you can see the changes you made. The goal is to have this also
update my PostgreSQL database)
