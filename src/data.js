import besteats from './assets/besteats.png';   
import nbo from './assets/nbo.png';
import portfolio from './assets/portfolio.png';
import salesledger from './assets/salesledger.png';
import sheltos from './assets/sheltos.png';
import aspnet from './assets/asp.net.jpeg';
import react from './assets/react.svg';
import css from './assets/css.webp';
import html from './assets/html.webp';
import javascript from './assets/javascript.webp';
import mongodb from './assets/mongodb.webp';
import tailwind from './assets/tailwindcss.webp';
import nodejs from './assets/nodejs.webp';
import mysql from './assets/mysql.png';
import firebase from './assets/firebase.png';

export const skills = [
    {
        id: 1, image: html,
    },
    {
        id: 2, image: css,
    },
    {
        id: 3, image: javascript,
    },
    {   
        id: 4, image: react,
    },
    {   
        id: 5, image: tailwind,
    },
    {
        id: 6, image: nodejs,
    },
    {
        id: 7, image: mongodb,
    },
    {
        id: 8, image: mysql,
    },
    {
        id: 9, image: aspnet,
    },
    {
        id: 10, image: firebase,
    },
];
export const projectData = [
    {
        id: 1,
        image: besteats,
        title: "BestEats - Food Delivery App",
        description: "A mobile application that allows users to order food from local restaurants and have it delivered to their doorstep.",
        skills:[4,5]
    },
    {
        id: 2,
        image: nbo,
        title: "NBO-Properties - Real Estate Platform",
        description: "A web platform that connects buyers, sellers, and renters of real estate properties.",
        skills:[4,6,7,5,3]
       
    },
    {
        id: 3,
        image: portfolio,
        title: "Portfolio Website",
        description: "A personal portfolio website to showcase my projects and skills as a frontend developer.",
        skills:[4,5]
       
    },
    {
        id: 4,
        image: salesledger,
        title: "SalesLedger - Sales Management System",
        description: "A web application that helps businesses manage their sales processes, track leads, and generate reports.",
        skills:[9,8],
        
    },
    {
        id: 5,
        image: sheltos,
        title:"Sheltos - Property platform",
        description: "A web platform that connects property buyers, sellers, and renters.",
        skills:[1,2,3,9,8]
        
    },
];