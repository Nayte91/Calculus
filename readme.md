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
docker compose exec backend ./vendor/bin/simple-phpunit
```

Reachable on https://127.0.0.1/ and back's API on /computation URI (with Postman i.e.).

## What will you find in this project ?

### On the system department

* PHP8, SF5.3, PHPUnit 9.5, React 17, TypeScript 4.3, SASS
* Symfony's src/ renamed as back/
* Webpack Encore's assets/ renamed as front/
* Docker's resources can be found in system/

### On the Back department

* Functional tests for controllers, unit test for services
* Calculator's service has its own exception and interface used for D.I
* Calc service is powered by eval, and the given string is sanitized by regex check
* Use of short-circuited evaluator, in test
* Use of PHP8's named parameters when parameter's position is unknown
* Use of PHP8's attributes in MainController
* Use of PHPUnit's data providers

### On the Front department

* Front makes use of smart component with Calculator, and dumb one with Button 
* Use of Short-circuit evaluation and ternary operators on TS side
* Use of async / await, useState hook, map on TS side
* Use of Functional components instead of classes for improved performances
* All variables, functions, arrays and objects are TypeScript's typed
* Axios' fetch async method is abstracted in data/computation.ts
* SASS stylesheets in styles, compliant with BEM methodology
* CSS grid system used for buttons
* Design inspired by [Google's calculator](https://www.google.com/search?client=firefox-b-d&q=calculator)

Julien "Nayte" Robic.