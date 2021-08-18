import { ProjectInstance } from './ProjectInstance';
import React from 'react';

function Projects () {

    const projects = [
        {   
            title: 'E-commerce Website',
            img: '/Images/Shopping.png',
            description: 'A multi-page e-commerce mock-up built in React that showcases React routing and state to facilitate a persistent shopping basket.',
            codeLink: 'https://github.com/tblackmore0/shopping-website.git',
            liveLink: 'https://tblackmore0.github.io/shopping-website/',
        },
        {
            title: 'Restaurant Website',
            img: '/Images/Rest.png',
            description: 'A restaurant website built using Vanilla Javascript and Webpack with an emphasis on stylish, clean, and efficient design.',
            codeLink: 'https://github.com/tblackmore0/restaurant-site.git',
            liveLink: 'https://tblackmore0.github.io/restaurant-site/',            
        },
        {
            title: 'Weather App',
            img: '/Images/WeatherApp.png',
            description: 'A lean, single-page application designed to showcase my understanding of API calls and asynchronous functionality in Javascript.',
            codeLink: 'https://github.com/tblackmore0/weather-app.git',
            liveLink: 'https://tblackmore0.github.io/weather-app/',
        },
        {
            title: 'Rock-Paper-Scissors Game',
            img: '/Images/RPS.png',
            description: 'A simple game application built in Vanilla Javascript that exhibits game logic and DOM manipulation. ',
            codeLink: 'https://github.com/tblackmore0/rock_paper_scissors.git',
            liveLink: 'https://tblackmore0.github.io/rock_paper_scissors/',
        }
  /*      {
            title: 'Portfolio',
            img: '/Images/Portfolio.png',
            description: 'This site! Built using React, with a contact form set up through Express and MailGun email API.',
            codeLink: 'https://github.com/tblackmore0/portfolio-2.git',
            liveLink: 'https://tblackmore.herokuapp.com/',
        }*/
    ]
    
    return (


        <div className='projectsDiv' id='projects'>
            <h2>Projects</h2>
            <ProjectInstance project={projects[0]} id={1}/>
            <ProjectInstance project={projects[1]} id={2}/>
            <ProjectInstance project={projects[2]} id={3}/>
            <ProjectInstance project={projects[3]} id={4}/>
   {//         <ProjectInstance project={projects[4]} id={5}/> 
       }       </div>
    )
}

export { Projects }