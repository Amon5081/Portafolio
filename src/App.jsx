import Darkmode from "./components/Dark-mode/Dark-mode";
import Card from "./components/Card/Card-model";
import Social from "./components/Social/Social-buttom";
import CardContact from "./components/Card-Contact/Card-contact";

function app() {
    return (
        <>
            <div className="container">
                <div className="button-Darkmode">
                    <Darkmode />
                </div>

                <div className="present">
                    <h1>Abrahan Corona</h1>
                    <h2>Frontend Developer</h2>
                    <p className="description">apasionado por crear interfaces de usuario intuitivas y atractivas. Experiencia sólida en HTML, CSS, Sass, JavaScript, TypeScript, Angular y React. Me encanta construir aplicaciones web escalables y de alto rendimiento. Avido por aprender nuevas tecnologías y colaborar en equipos dinámicos.</p>
                    <div>
                        <Social />
                    </div>
                </div>

                <div className="Proyect">
                    <h1>Proyectos</h1>
                    <div className="card-container">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>

                <div className="About-me">
                    <div>
                        <h1>Sobre mi</h1>
                        <p className="About-me-descrip">Me considero alguien apacionado por la programacion llengando a ser mi hobby por lo que paso mucho tiempo programando, me encanta aprender nuevas tecnologías, colaborar en proyectos y resolver problemas en equipo, me considero bastante bueno a la hora de expresar y entender las ideas de los demas, proactivo y responsable al momento de resolver un problema. </p>
                    </div>

                    <div className="Habilities-container">
                        <h1>Habilidades</h1>

                        <ul className="Habilities">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 16 16"><g fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="#f5a97f" d="M1.5 1.5h13L13 13l-5 2l-5-2z" /><path stroke="#cad3f5" d="M11 4.5H5l.25 3h5.5l-.25 3l-2.5 1l-2.5-1l-.08-1" /></g></svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 16 16"><g fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="#8aadf4" d="M1.5 1.5h13L13 13l-5 2l-5-2z" /><path stroke="#cad3f5" d="M5 4.5h6l-.5 6l-2.5 1l-2.5-1l-.08-1m1.08-2h4" /></g></svg>
                            </li>

                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 16 16"><path fill="none" stroke="#f5bde6" strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.38c1.85 1.07 3.35.74 4.83-.2c1.5-.95 2.7-2.78 1.3-4.15c-.7-.68-3.25-.8-5.62.19c-2.36.99-4.59 3.02-4.74 4.11c-.31 2.19 3.15 2.88 3.64 4.23s.28 1.98-.2 2.83c-.5.85-1.96 1.62-2.8.68c-.83-.95 1.67-2.75 2.98-3.25c1.3-.5 3.1-.4 3.69.25c.58.64-.07 1.79-.03 1.79" /></svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 16 16"><g fill="none" stroke="#eed49f" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 11a1.5 1.5 0 0 0 3 0V7.5m5 1.25c0-.69-.537-1.25-1.2-1.25h-.6c-.663 0-1.2.56-1.2 1.25S10.037 10 10.7 10h.6c.663 0 1.2.56 1.2 1.25s-.537 1.25-1.2 1.25h-.6c-.663 0-1.2-.56-1.2-1.25" /><path d="M4 1.5h8c1.385 0 2.5 1.115 2.5 2.5v8c0 1.385-1.115 2.5-2.5 2.5H4A2.495 2.495 0 0 1 1.5 12V4c0-1.385 1.115-2.5 2.5-2.5" /></g></svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 16 16"><g fill="none" stroke="#8aadf4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 1.5h8A2.5 2.5 0 0 1 14.5 4v8a2.5 2.5 0 0 1-2.5 2.5H4A2.5 2.5 0 0 1 1.5 12V4A2.5 2.5 0 0 1 4 1.5" /><path d="M12.5 8.75c0-.69-.54-1.25-1.2-1.25h-.6c-.66 0-1.2.56-1.2 1.25S10.04 10 10.7 10h.6c.66 0 1.2.56 1.2 1.25s-.54 1.25-1.2 1.25h-.6c-.66 0-1.2-.56-1.2-1.25m-3-3.75v5M5 7.5h3" /></g></svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 16 16"><g fill="none" stroke="#8aadf4" strokeLinecap="round" strokeLinejoin="round"><path d="M8 11.3c4.14 0 7.5-1.28 7.5-2.86S12.14 5.58 8 5.58S.5 6.86.5 8.44s3.36 2.87 7.5 2.87Z" /><path d="M5.52 9.87c2.07 3.6 4.86 5.86 6.23 5.07c1.37-.8.8-4.34-1.27-7.93S5.62 1.16 4.25 1.95s-.8 4.34 1.27 7.92" /><path d="M5.52 7.01c-2.07 3.59-2.64 7.14-1.27 7.93s4.16-1.48 6.23-5.07c2.07-3.58 2.64-7.13 1.27-7.92c-1.37-.8-4.16 1.47-6.23 5.06" /><path d="M8.5 8.44a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5a.5.5 0 0 1 .5.5" /></g></svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 16 16"><g fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"><path stroke="#ed8796" d="m8 1l6.5 2l-1 9.5L8 15l-5.5-2.5l-1-9.5z" /><path stroke="#cad3f5" d="m4.5 10.5l3.5-7l3.5 7m-5.796-2h4.635" /></g></svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 16 16"><g fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="#cad3f5" d="M8.5 10.5a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1m0-6a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1m3 3a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1m-4-2v4m-1-6l-1-1m4 4l-1-1" /><path stroke="#f5a97f" d="m9.06 1.06l5.88 5.88a1.5 1.5 0 0 1 0 2.12l-5.88 5.88a1.5 1.5 0 0 1-2.12 0L1.06 9.06a1.5 1.5 0 0 1 0-2.12l5.88-5.88a1.5 1.5 0 0 1 2.12 0" /></g></svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 16 16"><path fill="none" stroke="#8aadf4" strokeLinecap="round" strokeLinejoin="round" d="M10.5 11L3 4.5h-.5l-1 1V6l9 8.5l4-2v-9l-4-2v13m0-13L5.3 6.41M3.53 8.08L1.5 10v.5l.98 1.1l.52-.1l2.17-1.88m1.91-1.66L10.5 5" /></svg>
                            </li>
                        </ul>
                    </div>
                </div>




                <div className="Contact">
                    <h1>Contacto</h1>
                    <CardContact />
                </div>
            </div>
        </>
    );
}

export default app;
