import './ProyectosMyWork.css';
import { Col, Row, Button } from "react-bootstrap";
import { useScrollEffect } from "../hooks/useScrollEfect";
import projWork1 from "../assets/Plataforma-Matcheador.png";
import projWork2 from "../assets/ExtensionMatcheador.png";
import projWork3 from "../assets/GuiaMatcheador.png";
import projWork4 from "../assets/movieflix.png";
import projWork5 from "../assets/netkelSearch.png";
import projWork6 from "../assets/TestTechnical.png";
import projWork7 from '../assets/profileHub.png'
import css from '../assets/css.png'
import tailwindcss from '../assets/tailwindcss.png'
import react from "../assets/react.png";
import nodejs from "../assets/nodejs.png";
import python from '../assets/python.png'
import typescript from "../assets/typescript.png";
import javascript from '../assets/js.png'
import google from "../assets/google.png";
import supabase from '../assets/supabase.png'
import slack from '../assets/slack.png'
import postgreSQL from '../assets/postgreSQL.png'
import mongoDB from '../assets/mongoDB.png'
import sitesGoogle from '../assets/sitesGoogle.png'
import { useTranslation } from "react-i18next";

const ProyectosMyWork = () => {
    const [visible] = useScrollEffect("scrollEffectProyects");
    const { t } = useTranslation()
    const projectsTranslations = t("projects.items", { returnObjects: true });    

    const myWorkProjects = [
        {
            image: projWork1,
            tech: [react, typescript, google, slack, supabase, postgreSQL, tailwindcss],
            demo: "https://plataforma-matcheador.netlify.app/dashboard/matcheador",
            github: "#"
        },
        {
            image: projWork7,
            tech: [react, typescript, google, tailwindcss, css],
            demo: "https://profilehub-one.vercel.app",
            github: "https://github.com/Redolff/crud-react-redux"
        },
        {
            image: projWork2,
            tech: [javascript, supabase, slack, css],
            demo: "#",
            github: "#"
        },
        {
            image: projWork4,
            tech: [javascript, react, nodejs, mongoDB, google, css],
            demo: "#",
            github: "https://github.com/Redolff/movieflix"
        },
        {
            image: projWork3,
            tech: [javascript, google, sitesGoogle],
            demo: "https://sites.google.com/netkel.com/proyecto-matcheador/home",
            github: "#"
        },
        {
            image: projWork5,
            tech: [react, typescript, css, tailwindcss],
            demo: "https://netkelsearch.netlify.app/",
            github: "#"
        },
        {
            image: projWork6,
            tech: [javascript, react, nodejs, python, css],
            demo: "https://pruebamejoras.netlify.app/",
            github: "#"
        },

    ];

    return (
        <div className={`scrollEffectProyects ${visible && "visible"}`} id="projects">
            <h1>{t("projects.title")}</h1>
            {myWorkProjects.map((project, index) => (
                <Row key={index} className="mywork-card mb-3 align-items-center">
                    <Col md={5}>
                        <img className="rounded project-image" src={project.image} alt={project.title} />
                    </Col>
                    <Col md={7}>
                        <div className="project-text">
                            <h4>{projectsTranslations[index].title}</h4>
                            <p>{projectsTranslations[index].description}</p>
                            <div className="d-flex icons-proyect mb-3">
                                {project.tech.map((tech, i) => (
                                    <img key={i} src={tech} alt="tech" />
                                ))}
                            </div>
                            <div className="links-projects">
                                {project.github !== "#" && (
                                    <Button variant="primary">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {t("projects.buttons.moreInfo")} <i className="fa-brands fa-github" aria-hidden="true"></i>
                                        </a>
                                    </Button>
                                )}
                                {project.demo !== "#" && (
                                    <Button variant="primary">
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {t("projects.buttons.visit")} <i className="fa-regular fa-eye" aria-hidden="true"></i>
                                        </a>
                                    </Button>
                                )}
                            </div>
                        </div>
                    </Col>
                </Row>
            ))}
        </div>
    );
};

export default ProyectosMyWork;
