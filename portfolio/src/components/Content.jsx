import Typed from 'typed.js';
import React from 'react';
import Card from './Card.jsx'
import { ContactMe } from './ContactMe.jsx'
import { useEffect, useRef } from 'react';
import './Content.css'

export default function Content() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['C#', '.NET', 'ASP.NET', 'EF Core', 'SQL', 'HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'TailwindCSS'],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    //useEffect(hook) runs in this case when the component is attached to the DOM.
    //If we don't use useEffect this won't work because our observer API will try to
    //make changes over something that is currently not on the page(does not exist)!
    useEffect(() => {
        //Intersection Observer API
        const cards = document.querySelectorAll('#root .projects-section article .card');

        const options = {
            root: null, //By default is the viewport(null). Can be changed.
            threshold: 0.15, //From 0 to 1.
            rootMargin: "0px" //Must be specified in pixels surrounded by double quotes.
        };

        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    //Add animation class to this entry(card).
                    entry.target.classList.add('play-project-animation');

                    //Remove this entry from the observer since it's no longer needed.
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        cards.forEach(card => {
            observer.observe(card); //Add to the observer every card.
        });

    }, []);


    return (
        <>
            <section className='hero-section'>
                <article>
                    <h3>Hi, I'm Kris</h3>
                    <p>I am a <span>Software Engineer</span> from Gabrovo, Bulgaria.</p>
                    <ul className='socials'>
                        <li><a href='https://www.linkedin.com/in/kristiyan-hristov-2575a5239/' target='_blank'><i className="fa-brands fa-linkedin"></i></a></li>
                        <li><a href='https://github.com/KristiyanHristov04' target='_blank'><i className="fa-brands fa-github"></i></a></li>
                    </ul>
                    <a className='btn' href='/pdf/KristiyanHristovResume.pdf' download>Download CV</a>
                </article>
                <article>
                    <h3>Tech Stack: </h3>
                    <div>
                        <span ref={el}></span>
                    </div>
                </article>
            </section>

            <section className='education-section'>
                <article>
                    <div>
                        <a href='https://softuni.bg/certificates/details/242161/35f92b0f' target='_blank'>
                            <img src="/images/reactjs.jpg" alt="certificate-image" />
                        </a>
                    </div>
                    <div>
                        <a href='https://softuni.bg/certificates/details/250268/f95e9ec9' target='_blank'>
                            <img src="/images/diploma.jpg" alt="certificate-image" />
                        </a>
                    </div>
                    <div>
                        <a href='https://softuni.bg/certificates/details/249637/6042dcde' target='_blank'>
                            <img src="/images/containers-and-cloud.jpg" alt="certificate-image" />
                        </a>
                    </div>
                </article>
                <article>
                    <h3>Software University</h3>
                    <p>C# Full-Stack Developer</p>
                    <p>An instense software enineering program from which I acquired invaluable skills to create modern web applications.</p>
                </article>
            </section>

            <section className='projects-section' id='projects'>
                <h3 className='section-title'>Projects</h3>
                <div className='title-underline'></div>
                <article>
                    <Card
                        name='Social Media'
                        description='A social media platform  built with ASP.NET Core for posting, reporting, chatting, and sharing announcements, with built-in moderation and role management.'
                        link='https://github.com/KristiyanHristov04/SocialMedia-ASP.NET-Core-MVC'
                        image='/images/socialmedia.png'
                    />

                    <Card
                        name='MusicApp'
                        description='A modern React + Supabase app for managing and exploring your favorite music and artists.'
                        link='https://github.com/KristiyanHristov04/ReactMusicApp'
                        image='/images/musicapp.png'
                        isHosted={true}
                        url='https://react-music-app-delta.vercel.app/'
                    />

                    <Card
                        name='Car Renting System'
                        description='Web application made with ASP.NET Core MVC. It fully incorporates all CRUD operations.'
                        link='https://github.com/KristiyanHristov04/CarRentingSystem-ASP.NET-MVC?tab=readme-ov-file'
                        image='/images/car-renting-system-mvc-image.jpg'
                    />

                    <Card
                        name='OceanPure'
                        description='Landing page made for educational purposes built with ReactJS and TailwindCSS.'
                        link='https://github.com/KristiyanHristov04/Landing-Page-Tailwind-v4'
                        image='/images/oceanpure.png'
                        isHosted={true}
                        url='https://oceansea.netlify.app/'
                    />

                    <Card
                        name='Weather App'
                        description='Weather Application using OpenWeather API made with Windows Forms (.NET 6.0).'
                        link='https://github.com/KristiyanHristov04/WeatherApp?tab=readme-ov-file'
                        image='/images/weather-app-image.png'
                    />

                    <Card
                        name='Coding Trivia'
                        description='Quiz-themed website featuring questions about both C# and JavaScript programming languages. Made using HTML, CSS and JavaScript.'
                        link='https://github.com/KristiyanHristov04/CodingTrivia'
                        image='/images/coding-trivia.png'
                        isHosted={true}
                        url='https://codingtrivia2023.netlify.app/'
                    />


                    <Card
                        name='Movies'
                        description='Laravel app built with Breeze. Users manage their own movies. Includes CRUD, pagination, sorting, and filtering.'
                        link='https://github.com/KristiyanHristov04/Movies-Laravel/tree/main'
                        image='/images/movies.png'
                    />

                    <Card
                        name='Portfolio'
                        description='This portfolio is made using HTML, CSS, Material UI and ReactJS.'
                        link='https://github.com/KristiyanHristov04/Portfolio'
                        image='/images/portfolio-image.png'
                        isHosted={true}
                        url='https://portfolio-kristiyanhristov.netlify.app/'
                    />
                </article>
            </section>

            <section className='contact-us-section' id='contact-me'>
                <h3 className='section-title'>Contact Me</h3>
                <div className='title-underline'></div>
                <article>
                    <ContactMe />
                </article>
            </section>
        </>
    )
}