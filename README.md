![Description Bar](/images/longBar.png?raw=true "")
# Team Goals

Team Goals is a React program to organize goals with a select focus on competition between users to incentivize productivity. Firebase is ingrained to keep track of goals wherever you are as well as connect with others.


# Links

1. [Run](#run)
2. [Features](#features)
   * [Adding Goals](#adding-goals)
   * [Friendly Competition](#friendly-competition)<br />
3. [Documentation](#documentation)
4. [License](#license)
5. [Contact](#contact)

# Run

To run this project, download it first with
```
$ git clone https://github.com/EdwaRen/Team_Goals
```
## Installation
```
$ cd Team_Goals
$ npm install
$ npm start
```

Finally go to localhost:3000 on your favorite browser to access Team Goals. Make sure to sign up with a simple email/password when prompted. Although emails are part of the communal goal system, passwords are securely hashed through Firebase's services.

# Features

![Display](/images/teamGoals.png?raw=true "")

## Adding Goals

Personal goals can be added when logged in and all goals can be checked off non-sequentially. React was used alongside redux to facilitate the overall Firebase integration process, with a particular focus on authentication. Adding a goal records the email address by the user who added the goal and completing it also displays the email address for others to see. Furthermore, the completion date is also handled through momentJS and displayed accordingly when a goal is completed.

## Friendly Competition

Competition is a proven method to increase worker productivity and Team Goals strives to make use of this innate instinct by selectively showing the goals that other users have completed. This is achieved by accessing goals from the Firebase server and displaying a goal that others have completed alongside their email address. With this ability to see what peers and colleagues are completing, users are encouraged to spend more dedication to their own goals.

# Documentation

Create a local repository with
```
$ git clone https://github.com/EdwaRen/Team_Goals
```

This project can be customized by inputting a personal Firebase configuration key in './src/firebase.js'. Using a separate Firebase database can be customized to bring a level of exclusivity into a personal project rather than the open-user approach favored by Team Goals. If one chooses to not change the Firebase config options in their separate project, completed goals will be considered communal information.

# License

Licensed under the MIT license. See [LICENSE](../blob/master/LICENSE)
Copyright (c) 2017 Edward Ren

# Contact

If you have any questions or inquiries concerning Team Goals or suggestions for future releases, send an email to Edward.ren.2013@gmail.com

-"Let's do this!"
