# TP-02 : Introduction to Webpack
[Setup and install](#setup-and-install) | [Tasks](#tasks) | [Resources](#resources)

## Setup and install

Simply download the `.zip` bundle with the contents inside.

#### Dependency installation

During the time building this project, you'll need development dependencies of
which run on Node.js, follow the steps below for setting everything up (if you
have some of these already, skip to the next step where appropriate):

1. Download and install [Node.js here](https://nodejs.org/en/download/) for
   Windows or for Mac.

2. Install TypeScript globally via `npm i -g typescript`

That's about it for tooling you'll need to run the project, let's move onto the
project install.

#### Project installation and server

Now you've pulled down the repo and have everything setup, using the terminal
you'll need to `cd` into the directory that you cloned the repo into and run
some quick tasks:

```
cd <TP-01-typescript-basics>
yarn install
# OR
npm install
```

This will then setup all the development and production dependencies we need.

Now simply run this to boot up the server:

```
yarn start
# OR
npm start
```

Visit `localhost:3000` to start building.

## Tasks

A quick reminder of all tasks available:

#### Development server

```
yarn start
# OR
npm start
```

## Resources

There are several resources used inside this course, of which you can read
further about to dive deeper or understand in more detail what they are:

* [TypeScript Docs](https://www.typescriptlang.org)
* [TypeScript Playground](https://www.typescriptlang.org/play)
* [AST Explorer](https://astexplorer.net)


## Work TODO

1. Specify entry ts file in webpack.config.js set `entry` attribute with the right ts file path. 
2. Specify output js file in webpack.config.js set `output` attribute. 
```
        filename: 'app.js',
        path: __dirname + './dist'
```
3. Set dev server port to 3000 : `devServer` attribute.
4. execute `npm run start`. Observe the output. 
5. open `http://localhost:3000`. Observe. 
