#Calculus the ultimate calculator

##How to install
1. Start the containers.
```bash
docker-compose up -d --build
```
2. React part ?
```bash
docker run --rm -it -v $PWD:/app -w /app node yarn install
```

Reachable on https://127.0.0.1/

##Few informations
* React reach back's API on 127.0.0.1/compute
* PHP8, SF5.3, React 17

Julien "Nayte" Robic.