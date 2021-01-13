# TP-01 : Introduction to TypeScript course
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

1. Excecute `tsc -version` and observe 
2. init the typescript configuration file using `tsc --init `, observe. 
3. generate js code from ts file (use `tsc` )
4. generate js code from ts file in the correct directory ./dist (use `tsc --help` to look for the right parameter to use )
5. add the right property to your tsconfig.json file to specify the output directory, instead of passing it in the CLI 
6. run `tsc` to generate the js code in the dist folder
7. run `tsc` in watch mode (use `-watch` parameter). Observe. 
