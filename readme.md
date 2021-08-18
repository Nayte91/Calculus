# Calculus the ultimate calculator

## How to install

1. Start the containers.
```bash
docker compose up --build -d
```
2. install dependencies & build
```bash
composer install && yarn install --frozen-lockfile && yarn build
```
3. Want to launch tests ?
```bash
docker compose exec backend php bin/phpunit
```

Reachable on https://127.0.0.1/ and back's API on /computation URI (with Postman i.e.).

## What will you find in this project ?

### On the system department

* PHP8, SF5.3, PHPUnit 9.5, React 17, TypeScript 4.3, SASS
* Symfony's src/ renamed as back/
* Webpack Encore's assets/ renamed as front/
* Docker's resources can be found in system/
* Dockerfile split in stages : yarn, composer, php, caddy
* Automatically download dependencies for back & front
* Automatically build front's static files
* Versions of PHP, caddy, composer, node are set up in .env file and can therefore be overwritten easily
* Use of .dockerignore file to ensure light & easy deployment
* Use of YAML anchors in docker-compose to factorize arguments

### On the Back department

* Functional tests for controllers, unit test for services
* Calculator's service has its own exception and interface used for D.I
* Calc service has proper Interface and Exception
* Coding style PSR-12 compliant
* Use of regex to sanitize and parse math string
* Use of recursive function in Calculator private methods
* Use of short-circuited evaluator, in test
* Use of PHP8's named parameters when parameter's position is unknown
* Use of PHP8's attributes in MainController
* Use of PHP8's new match expression
* Use of PHP8's constructor promotion
* Use of PHPUnit's data providers

### On the Front department

* Front makes use of smart component with Calculator, and dumb one with Button 
* Design inspired by [Google's calculator](https://www.google.com/search?client=firefox-b-d&q=calculator)
* All variables, functions, arrays and objects are TypeScript's typed
* Axios' fetch async method is abstracted in data/computation.ts
* CSS classes compliant with BEM methodology
* Use of CSS grid system for buttons
* Use CSS transition and animation for button pressing
* Use of SASS variables and nested properties
* Use of Short-circuit evaluation and ternary operators on TS side
* Use of async / await, useState hook, map on TS side
* Use of Functional components instead of classes for improved performances
* Use of double-destructuring, in data/computation.ts
* Use of useEffect hook

### On the versioning department

* Each change has an issue, a branch, commits, a PR
* Modified GitHub's labels in order for better qualification

Julien "Nayte" Robic.