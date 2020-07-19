# Dollar Tracker App
Electron Cross-Platform App that tracks the parallel dollar price in Venezuela's currency based on Dolar Today's API

## Installation

### Clone

- Clone this repo to your local machine using `git clone https://github.com/gilbertomarcano/dollar-tracker-app`

### Setup

* Install the dependencies

> Install nodejs
```shell
$ sudo apt install nodejs
```

> Install npm
```shell
$ sudo apt install npm
```

> Go into the root directory
```shell
$ cd ../dollar-tracker-app
```

> Install electron with npm
```shell
$ npm install electron --save-dev --save-exact
```

> Install axios with npm
```shell
$ npm install axios --save
```



## Usage

* Go into the source directory
```shell
$ cd ../src
```

* Run the app with npm
$ npm start

## Build

> Install electron packager 
$ npm install electron-packager --save-dev

> Run electron packager for your OS
```shell
$ npm run package-win
$ npm run package-linux
$ npm run package-mac
```

## What I Learn

* Install and setup Electron
* Work with Electron menus
* Integrate an HTTP library for making API with Axios
* Communicate between multiple windows with IPC
* Access native desktop functionality (notifications)
* Style an Electron app (HTML/CSS)
* Deploy cross-platform Electron app (Windows, Linux, MacOS) 
