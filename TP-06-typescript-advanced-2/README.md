# TP-07 part 2 : Typescript Advanced 
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

1. Create an interface LoginRequest with the attributes : username and password 
2. Create UserInfo interface with the following attributes : email, fistname (optional), lastname(optional), user_role (can take only one of the following values : ADMIN, NORMAL_USER, SUPER_ADMIN, MANAGER)
3. Create a LoginService Class and add a constructor to it
4. Create under LoginService loginUser function : 
`loginUser(request : LoginRequest) : Promise<UserInfo>` 
5. Check if the username and password are admin/admin then resolve the promise with a generated user information using faker.js (add a timer to resolve the response after 2000ms)
6. Try your code and console log the results. 


