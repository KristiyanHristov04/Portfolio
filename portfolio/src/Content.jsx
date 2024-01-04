import Typed from 'typed.js';
import React from 'react';
import './Content.css'

export default function Content() {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['C#', '.NET', 'ASP.NET', 'SQL', 'HTML', 'CSS', 'JavaScript', 'React', 'jQuery'],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true
        });

        return () => {
            typed.destroy();
        };
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
                    <a className='btn' href='/src/assets/Kristiyan Hristov (CV) - Full-Stack CSharp Developer.pdf' download>Download CV</a>
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
                        <a href='https://softuni.bg/certificates/details/190659/bc8a1d94' target='_blank'>
                            <img src="/src/assets/html-image.jpg" alt="" />
                        </a>
                    </div>
                    <div>
                        <a href='https://softuni.bg/certificates/details/199080/21a6a7c3' target='_blank'>
                            <img src="/src/assets/js-image.jpg" alt="" />
                        </a>
                    </div>
                    <div>
                        <a href='https://softuni.bg/certificates/details/150803/2a597899' target='_blank'>
                            <img src="/src/assets/oop-image.jpg" alt="" />
                        </a>
                    </div>
                </article>
                <article>
                    <h3>Software University</h3>
                    <p>C# Full-Stack Developer</p>
                    <p>An instense software enineering program from which I acquired invaluable skills to create modern web applications.</p>
                </article>
            </section>
        </>
    )
}