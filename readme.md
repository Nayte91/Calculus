#Calculus the ultimate calculator

##How to install
1. Start the containers.
```bash
docker-compose up --build -d
```
2. Launch tests.
```bash
docker-compose exec backend ./vendor/bin/simple-phpunit
```
3. React part ?
```bash
docker run --rm -it -v $PWD:/app -w /app node yarn install
```

Reachable on https://127.0.0.1/

##Few information
* React reach back's API on 127.0.0.1/computation
* PHP8, SF5.3, React 17, Typescript, SASS

Julien "Nayte" Robic.