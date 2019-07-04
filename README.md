[ci.tests-master-badge]: https://circleci.com/gh/eugene-matvejev/react-js-battleship/tree/master.svg?style=svg
[ci.tests-master]: https://circleci.com/gh/eugene-matvejev/react-js-battleship/tree/master
[ci.coverage-master-badge]: https://codecov.io/gh/eugene-matvejev/react-js-battleship/branch/master/graph/badge.svg
[ci.coverage-master]: https://codecov.io/gh/eugene-matvejev/react-js-battleship/branch/master

[ci.tests-heroku-badge]: https://circleci.com/gh/eugene-matvejev/react-js-battleship/tree/heroku.svg?style=svg
[ci.tests-heroku]: https://circleci.com/gh/eugene-matvejev/react-js-battleship/tree/heroku
[ci.coverage-heroku-badge]: https://codecov.io/gh/eugene-matvejev/react-js-battleship/branch/heroku/graph/badge.svg
[ci.coverage-heroku]: https://codecov.io/gh/eugene-matvejev/react-js-battleship/branch/heroku

|                  | master                                                      | heroku
|---               |---                                                          |---
| __tests__        |
| _< Circle CI >_  | [![tests][ci.tests-master-badge]][ci.tests-master]          | [![tests][ci.tests-heroku-badge]][ci.tests-heroku]
| __coverage__     |
| _< codecov.io >_ | [![coverage][ci.coverage-master-badge]][ci.coverage-master] | [![coverage][ci.coverage-heroku-badge]][ci.coverage-heroku]

# battleship GUI

```
targets/goals
* to demostrate:
 ** DRY/KISS/SOLID principles
 ** software development pattern knowledge
 ** JS/SASS knowledge
 ** react.js best practices
 ** DevOps knowledge [Docker/CI/CD etc]
 ** QA Automation knowledge, and best practices [jest/enzyme/cypress]
```

## THIS IS SPARE TIME PROJECT, WORK IN PROGRESS!

### software requirements

if you're using `make` commands, local **node.js** and **npm** aren't required
* [node.js](https://nodejs.org/) v10+
* [npm](https://www.npmjs.com/) v6+ or [yarn](https://yarnpkg.com/)
* __optional__ [makefile](https://en.wikipedia.org/wiki/Makefile) comes out of the box in *nix enviroments
* __optional__ [docker](https://www.docker.com/) v18.09+
* __optional__ [docker-compose](https://docs.docker.com/compose/) v3+ *for 'cypress' tests only*

### used technologies

* [react.js](https://reactjs.org/)
* [sass](https://sass-lang.com/)
* [jest](https://facebook.github.io/jest/)
* [enzyme](http://airbnb.io/enzyme/)
* [cypress](https://www.cypress.io/)

### used services

* [circle ci](https://circleci.com/dashboard)
* [codecov](https://codecov.io/)
* [code climate](https://codeclimate.com/)
* [snyk](https://snyk.io/)
* [heroku](https://www.heroku.com/)

### how to install

* if you're using `make` commands and have [docker](https://docs.docker.com/install/) and [docker-compose](https://docs.docker.com/compose/install/) installed, then no steps required
* otherwise you need **node.js** installed, and execute `$ npm i`

### how to run tests

* 'cypress' integration tests `$ make cypress` or `$ npm test` inside `./cypress` directory
* 'jest' unit and functional tests `$ make test` or `$ npm test`
  * __[optional 'jest' CLI params](https://facebook.github.io/jest/docs/en/cli.html)__
    * to generate coverage report `--coverage`, example: `$ npm test -- --coverage`, report will be located in __./coverage__ directory
    * to run tests __only__ in specific file, example: `$ npm test src/validation/rules.test.js`

### how to run in 'development' mode

* `$ make` or `$ npm start`

### how to run in 'production' mode

* `$ make serve`, there is no _npm only_ analogue
  * to run on non-default port you can overwrite PORT variable, example `$ make serve PORT=18080`
* if you need __only__ generate static assets
  * `$ make build` or `$ npm run build` - generated assets will be located in __./build__ directory

### gitflow

* master -> most upto date __production__ version
* __proxy branch__ heroku -> master is not deployed to heroku with every push, because of limiations of 'free account'
* other branches -> 'feature branches' get merged into master
CI build is mandatory check for every PR into master/heroku branches

### used environment variables

* **PORT** [default 8080] as number [ for development only ]

* **REACT_APP_GAME-MIN-SIZE** [default 5] as number
* **REACT_APP_GAME-MAX-SIZE** [default 10] as number
* **REACT_APP_GAME-MIN-OPPONENTS** [default 1] as number
* **REACT_APP_GAME-MAX-OPPONENTS** [default 3] as number

* **REACT_APP_API_PROTOCOL** [default "http"] as string
* **REACT_APP_API_HOST** [default "localhost"] as string
* **REACT_APP_API_PORT** [default 8081] as number
* **REACT_APP_WEBSITE_NAME** [default "Battleship"] as string
