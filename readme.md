#Calculus the ultimate calculator

##How to install
1. Start the containers.
```bash
docker-compose up --build -d
```
2. Want to launch tests ?
```bash
docker-compose exec backend ./vendor/bin/simple-phpunit
```
3. React part WIP
```bash
docker run --rm -it -v $PWD:/app -w /app node yarn install
```

Reachable on https://127.0.0.1/ and back's API on /computation URI (with postman i.e.).

##What will you find in this project ?
* PHP8, SF5.3, PHPUnit 9, React 17, Typescript, SASS
* symfony's src folder renamed as back
* encore's assets folder renamed as front
* docker's resources can be found in system folder
* Controllers are annotated with PHP8's attributes
* PHP8's named parameters when parameter's position should be bypassed
* Tests use data providers
* Functional tests for controllers, unit test for services
* Calculator's service has its own exception and interface used for D.I
* Calc service is powered by eval, and the given string is sanitized by regex check
* Front makes use of smart component with Calculator, and dumb one with Button 
* Use of Short-circuit evaluation, ternary operators on TS side
* Use of async / await, useState hook, map on TS side
* Use of Functional components instead of classes for improved performances
* All variables, functions, arrays and objects are TypeScript's typed
* Axios' fetch async method is abstracted in data/computation.ts
* SASS stylesheets in styles, compliant with BEM methodology
* CSS grid system used for buttons
* Design inspired by [Google's calculator](https://www.google.com/search?client=firefox-b-d&q=calculator)

Julien "Nayte" Robic.