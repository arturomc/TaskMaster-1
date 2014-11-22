# TaskMaster
A time reporting and task management tool for software development teams

    By: arturomc
    
# [![Taskmaster Logo](http://th09.deviantart.net/fs33/200H/i/2008/311/0/a/Ogre_Taskmaster_by_silverswift.jpg)](http://www.blueribbon-ti.com/) 

## Prerequisites
* Node.js - Download and Install [Node.js](http://www.nodejs.org/download/). You can also follow [this gist](https://gist.github.com/isaacs/579814) for a quick and easy way to install Node.js and npm
* MongoDB - Download and Install [MongoDB](http://docs.mongodb.org/manual/installation/) - Make sure `mongod` is running on the default port (27017).
* MySQL   - Download and Install [MySQL](http://www.mysql.com/downloads/) - The default username and password are assumed by TaskMaster if this change, you have to make the respective changes on server/conf.js  

### Tools Prerequisites
* NPM - Node.js package manage; should be installed when you install node.js.
* Bower - Web package manager. Installing [Bower](http://bower.io/) is simple when you have `npm`:
```
$ npm install -g bower
```

* Gulp - Our automation tool, make sure you install [Gulp](http://gulpjs.com/) globally and locally for gulp to work:
```
$ npm install -g gulp
```


## Additional Packages
* Express - Defined as npm module in the [package.json](package.json) file.
* Mongoose - Defined as npm module in the [package.json](package.json) file.
* Sequelize - Defined as npm module in the [package.json](package.json) file.
* MySQL - Defined as npm module in the [package.json](package.json) file.
* Passport - Defined as npm module in the [package.json](package.json) file.
* AngularJS - Defined as bower module in the [bower.json](bower.json) file.
* Twitter Bootstrap - Defined as bower module in the [bower.json](bower.json) file.
* UI Bootstrap - Defined as bower module in the [bower.json](bower.json) file.

## Troubleshooting
During install some of you may encounter some issues.

Most issues can be solved by one of the following tips, but if are unable to find a solution feel free to contact us via the repository issue tracker or the links provided below.

#### Update NPM, Bower or Grunt
Sometimes you may find there is a weird error during install like npm's *Error: ENOENT*. Usually updating those tools to the latest version solves the issue.

* Updating NPM:
```
$ npm update -g npm
```

* Updating Bower:
```
$ npm update -g bower
```

#### Cleaning NPM and Bower cache
NPM and Bower have a caching system for holding packages that you already installed.
We found that often cleaning the cache solves some troubles this system creates.

* NPM Clean Cache:
```
$ npm cache clean
```

* Bower Clean Cache:
```
$ bower cache clean
```