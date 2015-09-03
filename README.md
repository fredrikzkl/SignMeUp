# SignMeUp
Course Registration Project website built using [Node.js](https://nodejs.org/) and [Express](http://expressjs.com/).

## Prerequisites
Following software needs to be installed on your computer to be able to edit and run the website.

* git
* Node.js

Need help? Read the ['Getting Started'](../../wiki#getting-started) section in the wiki.

##Guide

### Installation
If you haven't already, clone the project to your computer using the Git Bash tool.
```bash
# Cloning the project will create a folder named 'cs532courseReg'
# and download all the source code into it.
$ git clone https://github.com/fredrikzkl/cs532courseReg.git

# Now navigate into the folder
$ cd cs532courseReg
```

### Starting the server
To view the webpage in your browser, you need to start the server on your computer.
```bash
# It is important that you are in the project folder 'cs532courseReg' when running this command.
$ npm start
```
A message should appear saying that the server is running and listening to port 3000. To view the page on your computer, simply go to http://localhost:3000

If you want to stop the server, use the shortcut Ctrl+c on Windows or Cmd+c on OS X. Do not close the window while running the server, this will close the server too. If you need to use Git Bash for something else, open up a new Git Bash window.

Where to go from here? Most of the files you use should be saved to the [public folder](public/). The HTML code for the first page should be put into the [views/index.ejs](views/index.ejs) file. To understand how this works, I highly recommend watching [this tutorial for Node.js](https://www.youtube.com/playlist?list=PL6gx4Cwl9DGBMdkKFn3HasZnnAqVjzHn_). The last videos in the playlist are specifically for Express, the tool this webpage is built on.

Need help with Bootstrap, MongoDB or other tools for this project? Check out [thenewboston tutorials](https://www.youtube.com/user/thenewboston/playlists).
