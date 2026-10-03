import './ProyectosMyWork.css';
import { Carousel } from "react-bootstrap";
import { useScrollEffect } from "../hooks/useScrollEfect";
import { useTranslation } from "react-i18next";

import projWorkPlataformaHome from "../assets/Plataforma-Matcheador.png";
import projWorkPlataformaDashboard from "../assets/PlataformaMatcheador-Dashboard.png";
import projWorkPlataformaSection from "../assets/PlataformaMatcheador-Iniciativas.png";

import projWorkConsultorio from "../assets/Consultorio-CMT.png";
import projWorkConsultorioAgenda from "../assets/Consultorio-CMT-Dashboard.png";
import projWorkConsultorioPatients from "../assets/Consultorio-CMT-horarios.png";

import projWorkCourtCenterReservations from "../assets/CourtCenter-Reservas.jpeg";
import projWorkCourtCenter from "../assets/CourtCenter.png";
import projWorkCourtCenterTurns from "../assets/CourtCenter-Turnos.png";

import projWorkIsthar from "../assets/Isthar-Fake.png";

import projWorkPola from "../assets/Pola-Outfits.png";
import projWorkPolaHome from "../assets/PolaOutfits-Home.png";
import projWorkPolaCategory from "../assets/PolaOutfits-Categorias.png";

import projWorkExtension from "../assets/ExtensionMatcheador.png";

import react from "../assets/react.png";
import nodejs from "../assets/nodejs.png";
import typescript from "../assets/typescript.png";
import javascript from "../assets/js.png";
import supabase from "../assets/supabase.png";
import postgreSQL from "../assets/postgreSQL.png";
import slack from "../assets/slack.png";
import angular from "../assets/angular.png";
import php from "../assets/php.png";
import mysql from "../assets/mysql.png";
import cypress from "../assets/cypress.webp";
import tiendaNube from "../assets/tiendaNube.png"
import mongoDB from '../assets/mongoDB.png'
import postman from "../assets/postman.png"

const ProyectosMyWork = () => {
    const [visible] = useScrollEffect("scrollEffectProyects");
    const { t } = useTranslation();

    const projectsTranslations = t("projects.items", {
        returnObjects: true
    });

    const myWorkProjects = [
        {
            category: "professional",
            role: "QA Automation · E2E & API Testing",
            images: [
                projWorkIsthar
            ],
            tech: [
                { name: "Cypress", icon: cypress },
                { name: "TypeScript", icon: typescript },
                { name: "JavaScript", icon: javascript },
                { name: "MongoDB", icon: mongoDB },
                { name: "Postman", icon: postman }
            ],
            demo: null,
            github: null
        },
        {
            category: "professional",
            role: "Full Stack Development",
            images: [
                projWorkPlataformaDashboard,
                projWorkPlataformaSection
            ],
            tech: [
                { name: "React", icon: react },
                { name: "TypeScript", icon: typescript },
                { name: "Supabase", icon: supabase },
                { name: "PostgreSQL", icon: postgreSQL },
                { name: "Slack", icon: slack }
            ],
            demo: "https://matcheador.grupokelsoft.com/dashboard/matcheador",
            github: null
        },
        {
            category: "professional",
            role: "Full Stack Development",
            images: [
                projWorkExtension,
            ],
            tech: [
                { name: "Javascript", icon: javascript },
                { name: "TypeScript", icon: typescript },
                { name: "Supabase", icon: supabase },
                { name: "PostgreSQL", icon: postgreSQL },
                { name: "Slack", icon: slack }
            ],
            demo: null,
            github: null
        },
        {
            category: "freelance",
            role: "Full Stack Development",
            images: [
                projWorkConsultorio,
                projWorkConsultorioAgenda,
                projWorkConsultorioPatients
            ],
            tech: [
                { name: "React", icon: react },
                { name: "TypeScript", icon: typescript },
                { name: "Node.js", icon: nodejs },
                { name: "Supabase", icon: supabase },
                { name: "PostgreSQL", icon: postgreSQL },
                { name: "Cypress", icon: cypress }
            ],
            demo: "https://consultorio-m-t.vercel.app/",
            github: null
        },
        {
            category: "freelance",
            role: "Full Stack Development",
            images: [
                projWorkCourtCenter,
                projWorkCourtCenterReservations,
                projWorkCourtCenterTurns
            ],
            tech: [
                { name: "Angular", icon: angular },
                { name: "TypeScript", icon: typescript },
                { name: "PHP", icon: php },
                { name: "MySQL", icon: mysql }
            ],
            demo: "https://consultorio-m-t.vercel.app/",
            github: null
        },
        {
            category: "freelance",
            role: "E-commerce Development",
            images: [
                projWorkPola,
                projWorkPolaHome,
                projWorkPolaCategory
            ],
            tech: [
                { name: "JavaScript", icon: javascript },
                { name: "Tienda Nube", icon: tiendaNube }
            ],
            demo: "https://polaoutfits.com/",
            github: null
        },
    ];

    return (
        <section
            className={`projects-section scrollEffectProyects ${visible ? "visible" : ""}`}
            id="projects"
        >
            <div className="projects-container">

                <header className="projects-header">
                    <h1>
                        {t("projects.title")}
                    </h1>
                </header>

                <div className="projects-list">

                    {["professional", "freelance"].map((category) => {

                        const categoryProjects = myWorkProjects.filter(
                            (project) => project.category === category
                        );

                        if (!categoryProjects.length) return null;

                        return (
                            <div className="projects-category" key={category}>

                                <header className="projects-category-header">
                                    <span>
                                        {category === "professional"
                                            ? "Professional Work"
                                            : "Freelance Work"
                                        }
                                    </span>
                                </header>

                                <div className="projects-category-list">

                                    {categoryProjects.map((project) => {

                                        const originalIndex = myWorkProjects.indexOf(project);
                                        const projectContent = projectsTranslations[originalIndex];

                                        return (
                                            <article
                                                className={`project ${project.images.length === 1
                                                        ? "project-single-image"
                                                        : ""
                                                    }`}
                                                key={projectContent.title}
                                            >

                                                <div className="project-info">

                                                    <span className="project-role">
                                                        {project.role}
                                                    </span>

                                                    <h2>
                                                        {projectContent.title}
                                                    </h2>

                                                </div>

                                                <div className="project-gallery">
                                                    {project.images.length === 1 ? (
                                                        <div className="project-gallery-image">
                                                            <img
                                                                src={project.images[0]}
                                                                alt={projectContent.title}
                                                            />
                                                        </div>
                                                    ) : (
                                                        <Carousel
                                                            className="project-carousel"
                                                            interval={null}
                                                        >
                                                            {project.images.map((image, imageIndex) => (
                                                                <Carousel.Item key={imageIndex}>
                                                                    <div className="project-gallery-image">
                                                                        <img
                                                                            src={image}
                                                                            alt={`${projectContent.title} - ${imageIndex + 1}`}
                                                                        />
                                                                    </div>
                                                                </Carousel.Item>
                                                            ))}
                                                        </Carousel>
                                                    )}

                                                </div>

                                                <div className="project-description">

                                                    <p>
                                                        {projectContent.description}
                                                    </p>

                                                    <div className="project-technologies">
                                                        {project.tech.map((technology) => (
                                                            <span
                                                                className="technology"
                                                                key={technology.name}
                                                            >
                                                                {technology.icon && (
                                                                    <img
                                                                        src={technology.icon}
                                                                        alt=""
                                                                    />
                                                                )}

                                                                {technology.name}
                                                            </span>
                                                        ))}
                                                    </div>

                                                </div>

                                            </article>
                                        );
                                    })}

                                </div>

                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
};

export default ProyectosMyWork;
