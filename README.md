# Iniciando o projeto
Este projeto foi construído em React com [Create React App](https://github.com/facebook/create-react-app).

## Comandos importantes
### Instalação
Para instalar as dependências do projeto é necessário baixá-los localmente e executar o seguinte comando:

`npm install`

### Execução
Para iniciar o projeto em modo de desenvolvimento é necessário rodar o seguinte comando

`npm start`

Com isso o projeto estará executando no seguinte endereço: [http://localhost:3000](http://localhost:3000)

### Build
Para preparar o projeto para o ambiente de produção é necessário executar o seguinte comando:

`npm run build`

# Detalhes do projeto
## Motivo da existência
Este projeto nasceu da necessidade de testar meus conhecimentos em Front-end.

## Arquitetura
No momento do desenvolvimento deste projeto, possuo maior conhecimento em [Vue.js](https://vuejs.org/), entretanto quis relembrar e aprimorar minhas habilidades em [ReactJS](https://pt-br.reactjs.org/).

Em minhas pesquisas por arquitetura no front-end, encontrei o seguinte artigo [Vue.js, Clean Architecture e Package by feature Pattern ](https://dev.to/booscaaa/vuejs-clean-architecture-e-package-by-feature-pattern-56lb). Foi baseado neste artigo que trouxe um pouco da estrtura de pastas deste projeto.

O motivo principal era testar uma arquitetura modular. Neste primeiro momento não estou utilizando TypeScript, por conta de tempo de entrega do projeto.

## Estrutura de pastas
### /System
A pasta `/system` contém os arquivos utilizados por todo o sistema, por conta disso dentro dela é possível encontrar as seguintes pastas:

- `/assets`: contém arquivos como imagens, css, etc;
- `/repository`: contém os clients que a aplicação poderá utilizar. Desta forma tornamos escalável a aplicação para diversos clients. Neste momento estou utilizando o [Axios](https://axios-http.com/ptbr/docs/intro), mas por conta dessa estrutura é fácil trocá-lo e/ou adicionar novos sem afetar o restante da aplicação;
- `/context`: responsável pelo estado da aplicação;
- `/components`: responsável pelos componentes globais e base da aplicação. Neste caso estamos utilizando o [Material UI](https://mui.com/). Os componentes base da aplicação envolvem os componentes nativos do [Material UI](https://mui.com/), pois desta maneira ficaria relativamente simples realizar a troca de compoententes da aplicação sem a necessidade de trocar em todas as telas.

### /Modules
A pasta `/modules` contém os módulos da aplicação, neste caso, cada módulo representa uma página.

Os módulos são independentes de forma que cada um deles tem seus próprios componentes (`/components`), regras de negócio (`/domain` ~~ainda não implementado~~), camada de persistência (`/repository`) e camada de visualização/página (`/view`).

O fato de cada módulo ser independente possibilita a manutenção individual de cada um deles sem que interfiram uns nos outros.
