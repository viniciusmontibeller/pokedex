# Pokédex

<p align="center">
<a href="https://react.dev/" target="_blank"><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" target="_blank"></a>
<a href="https://reactrouter.com/en/main" target="_blank"><img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" target="_blank"></a>
<a href="https://styled-components.com/" target="_blank"><img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" target="_blank"></a>
<a href="https://vitejs.dev/" target="_blank"><img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E"/></a>
<a href="https://vercel.com/" target="_blank"><img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"/></a>
</p>

## Advanced React Quest by [DevQuest](https://devemdobro.com/matriculas-abertas/) course

The Pokédex it's a aplication based on the world wide franchise Pokemon, where we have a list of known pokemons and their characteristics.

## Table of contents

- [Description](#description)
- [Functionalities](#functionalities)
- [Screenshots](#screenshots)
- [Deploy](#deploy)
- [Technologies](#technologies)
- [My process](#my-process)
    - [Home page](#home-page)
    - [Internal page](#internal-page)
    - [Addicional](#addicional)
- [Requirements and install](#requirements-and-install)
- [Acknowledgments](#Acknowledgments)

### description

This Pokédex was developed in React.js and consists of a Single Page Application (SPA), with an initial page(home) with a list of pokemons, and an internal page with the details of the selected pokemon. The list of pokemons is done through the [PokeApi](https://pokeapi.co/).

### functionalities

- The home page has a list of 10 pokemons containing it's image, name, and type.

- The home page has a pokemon name search field.

- The home page has a pokemon type search selector.

- Each pokemon in the list is clickable and redirects the user to an internal page with the details of the selected pokemon.

- There is a "load more" button below the list that when clicked it searches (adds) 10 more pokemons to the existing list

- Clicking on the "Pokemon" logo makes it possible to return to the homepage and resets the search filters on the homepage.

- The internal details page consists of pokemon information such as: image, name, id, list of moves, list of abilities (name and description), type.

- The inner detail page has a return to home page button.

- The application has a theme switcher between light and dark with local storage.

### Deploy

Link to project page: [Deploy by Vercel](https://pokedex-4pytvwf4h-viniciusmontibeller.vercel.app/)

### Screenshots

- Desktop version

<img src="./public/screenshots/screenshot.desktop.gif">

- Mobile version

<p align="center">
<img src="./public/screenshots/screenshot.mobile.gif" width="50%">
</p>

### Technologies

- [Vite](https://vitejs.dev/)
Used because it is a more modern and up-to-date way of creating react projects instead of the standard CRA(create-react-app)

- [React](https://react.dev/)
In addition to the objective of practicing this technology, we use React.js to have a SPA application and for the reusability that you have when working with components.

- [Styled-Components](https://styled-components.com/)
Library goes really well with React.js being a in-javascript css, and it makes dynamic styles without class names problems.

- [React-router-dom](https://reactrouter.com/en/main)
Library chosen for working with the concept of SPA making the navigation between pages more dynamic and withoud any updates.

- [React-icons](https://react-icons.github.io/react-icons/)
Simplified way of adding icons on the aplication.

### My process

### Home page

To get the pokemon list on the homepage with the name, image and type, it was necessary to make an api request to get the list that contains their names, and URLs with the data according to the pokemon's name. On that note, I made a new request for the URL within the pokemons lists names, thus having the list of pokemons and their data.

To add more pokemons with the "load more" button, I started the state with 10, and a click event was added on the button that adds another 10 to the previous state.

In order to make the filters pass through each other, a function was created passing the list through the two filters and comparing it with the values coming from each filter. The list is mounted only with the already filtered data.

### Inner page

For the inner page, a route was created using React-router-dom for the selected pokemon's detail, and after the click, a new request was made for the URL based on the pokemon's name.

To get the abilities and the description of the abilities it was necessary to make a new request to the API according to the name of the ability, and for each name of the ability it takes the description according to the desired language.

### Addicional

While carrying out the project, I came across empty components when navigating through pages, due to the time of the requests. To make this transition more pleasant I decided to put a loading component to make more smooth transition.

For a better user experience, when clicking on the pokemon logo, in addition to going to the home page, the states of the filters were reset to the original, so we have the original list without filters.

### Requirements and install

:warning: It's necessary to have [Node](https://nodejs.org/en) installed.

To run the application just clone the repository using the command line
```
https://github.com/viniciusmontibeller/pokedex.git
```
Go to the project folder
```
cd pokedex
```
Install all dependencies required using your package manager of your choice. npm - yarn - pnpm
```
npm install  
```
Or
```
npm i
```
As the project was created by using [Vite](https://vitejs.dev/), to run de application use
```
npm run dev
```
It is now possible to access the application from the port created Ex: http://localhost:3000/

## Acknowledgments

I got to say that i'm really happy to be studying with the lessons by [Dev em Dobro](https://github.com/devemdobro). I started with zero programing skills and now i can see that i'm growing little by little into what i wanted to be.