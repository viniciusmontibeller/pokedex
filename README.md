# Pokédex &nbsp; <img src='./public/pokeball_fav.png'>


<p align="center">
<a href="https://react.dev/" target="_blank"><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" target="_blank"></a>
<a href="https://reactrouter.com/en/main" target="_blank"><img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" target="_blank"></a>
<a href="https://styled-components.com/" target="_blank"><img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" target="_blank"></a>
<a href="https://vitejs.dev/" target="_blank"><img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E"/></a>
<a href="https://vercel.com/" target="_blank"><img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"/></a>
</p>

## Desafio de React Avançado do curso [DevQuest](https://devemdobro.com/matriculas-abertas/)

A Pokédex é uma aplicação baseada na franquia mundial Pokemon, onde mostramos uma lista de pokemons conhecidos e suas características. 

## Tabela de Conteúdos

- [Descrição](#descricao)
- [Funcionalidades](#funcionalidades)
- [Screenshots](#screenshots)
- [Deploy](#deploy)
- [Tecnologias](#tecnologias)
- [Processo](#processo)
    - [Página inicial](#pagina-inicial)
    - [Página interna](#pagina-interna)
    - [Adicionais](#adicionais)
- [Pré-requisitos e como rodar a aplicação](#pre-requisitos-e-como-rodar-a-aplicacao)
- [Agardecimentos](#agradecimentos)

## Descrição

Essa Pokédex foi desenvolvida em React.js e consiste em uma Single Page Aplication(SPA), com uma página inicial(home) com a listagem de pokemons, e uma página interna com os detalhes do pokemon selecionado. A listagem de pokemons é feita através da [PokeApi](https://pokeapi.co/).

## Funcionalidades

- A página inicial home possui uma lista de 10 pokemons contendo imagem, nome, e tipo.

- A página inicial(home) possui um campo de busca pelo nome do pokemon.

- A página inicial(home) possui um seletor de busca pelo tipo do pokemon.

- Cada pokemon na lista é clicável e redireciona o usuário a uma página interna com os detlahes do pokemon selecionado.

- Botão "carregar mais" abaixo da lista que quando clicado busca(adiciona) mais 10 pokemons a lista ja existente.

- O clique no logo "Pokemon" possibilita o retorno para a página inicial e reseta os filtros de busca da página inicial(home).

- A página interna de detalhes consiste em informações do pokemon como: imagem, nome, id, lista de movimentos, lista de abilidades(nome e descrição), tipo.

- A página interna de detalhes possui um botão de retorno para a página inicial.

- A página interna de detalhes possui botôes de próximo e anterior para navegar entre os pokemons.

- A aplicação possui um alternador de temas entre claro e escuro com permanência localizada.

## Screenshots

- Versão desktop

<img src="./public/screenshots/desktop.gif">

- Versão mobile

<p align="center">
<img src="./public/screenshots/mobile.gif" width="50%">
</p>

## Deploy

Link para a página do projeto: [Deploy através da vercel](https://pokedex-4pytvwf4h-viniciusmontibeller.vercel.app/)

## Tecnologias

- [Vite](https://vitejs.dev/)
Usado por ser uma forma mais moderna e atualizada de criação de projetos react no lugar do padrão CRA(create-react-app)

- [React](https://react.dev/)
Além do objetivo de praticar essa tecnologia, usamos o React.js para termos uma aplicação SPA e pela reausabilidade que se tem quando se trabalha com componentes.

- [Styled-Components](https://styled-components.com/)
Biblioteca escolhida por combinar muito bem com o React.js deixando o estilos mais dinamicos e evitar confusões com nomes de classes.

- [React-router-dom](https://reactrouter.com/en/main)
Biblioteca escolhida por trabalhar com o conceito de SPA deixando a navegacão entre páginas sem atualização e mais dinamico.

- [React-icons](https://react-icons.github.io/react-icons/)
Usado para adicionar icones na aplicação de forma simplificada.

## Processo 

### Página inicial

Para conseguir a lista na página inicial com o nome, imagem e tipo, foi preciso requisitar da api a lista de pokemons que retorna os nomes e as URL's com os dados de acordo com o nome do pokemon. Dessa forma fiz uma nova requisição com URL e o nome retornados, assim tendo a lista de pokemons e seus dados.

Para adicionar mais pokemons com o botão de "carregar mais" iniciei o estado com 10, e foi adicionado um evento de clique no botão que adiciona mais 10 ao estado anterior.

Para conseguir fazer os filtros passarem um pelo outro, foi feito uma função passando pelos dois filtros comparando com os valores vindos de cada filtro. A lista é montada apenas com os dados ja filtrados.

### Página interna

Para a página interna, após o clique, foi criado uma rota usando o React-router-dom para o detalhe do pokemon selecionado, e então feito uma nova requisição para a URL baseada no id do pokemon.

Para pegar as abilidades e descrição das abilidades é preciso fazer uma requisição para API de acordo com o nome da abilidade, e para cada nome de abilidade pega a descrição de acordo com a lingua desejada.

### Adicionais

Enquanto realizava o projeto, me deparei com os componentes vazios na hora de ir para as paginas, devido ao fato do tempo das requisições. Para deixar essa transição mais agradavél resolvi colocar um componente de loading para fazer uma transição mais agradavel.

Para que o usuário tenha uma melhor exeperiência, ao clicar na logo do pokemon, além de ir para a página inicial, os estados dos filtros foram reiniciados, dessa forma temos a lista original sem filtro.

Para facilitar a navegação entre pokemons dentro da página de detalhes, foi adicionado botões de proximo e de anterior usando como base o id do pokemon vindo da api.

## Pré-requisitos e como rodar a aplicação

:warning: Necessário ter o [Node](https://nodejs.org/en) instalado.

Para rodar a aplicação basta clonar o repositório utilizando a linha de comando
```
https://github.com/viniciusmontibeller/pokedex.git
```
Entre na pasta do projeto
```
cd pokedex
```
Baixe as dependências do projeto usando o gerenciador de pacotes escolhido. npm - yarn - pnpm
```
npm install  
```
Ou de forma abreviada 
```
npm i
```
Como o pojeto foi criado usando o [Vite](https://vitejs.dev/), para rodar a aplicação use
```
npm run dev
```
Pronto agora é possível acessar a aplicação apartir da porta criada Ex: http://localhost:3000/

## Agradecimentos

Preciso dizer que estou muito feliz em estar estudando proramação com as aulas do [Dev em Dobro](https://github.com/devemdobro). Eu comecei com zero habilidades em programação e agora eu consigo ver que estou evoluindo pouco a pouco aonde quero chegar.

I got to say that i'm really happy to be studying with the lessons by [Dev em Dobro](https://github.com/devemdobro). I started with zero programing skills and now i can see that i'm growing little by little into what i wanted to be.