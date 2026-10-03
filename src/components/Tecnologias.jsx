import react from "../assets/react.png"
import node from "../assets/nodejs.png"
import js from "../assets/js.png"
import ts from '../assets/typescript.png'
import css from "../assets/css.png"
import html from "../assets/html.png"
import bs from "../assets/bootstrap.png"
import git from "../assets/git.png"
import mysql from "../assets/mysql.png"
import postgresql from "../assets/postgreSQL.png"
import tailwindcss from "../assets/tailwindcss.png"
import supabase from '../assets/supabase.png'
import mongoDB from '../assets/mongoDB.png'
import aws from '../assets/aws.png'
import vercel from '../assets/vercel.png'
import chatgpt from '../assets/chatgpt.png'
import angular from "../assets/angular.png"
import php from "../assets/php.png"
import cypress from "../assets/cypress.webp"
import gitlab from "../assets/gitlab.png"
import postman from "../assets/postman.png"
import claude from "../assets/claude.png"

import { useScrollEffect } from "../hooks/useScrollEfect"
import { useTranslation } from "react-i18next";

const Tecnologias = () => {
    const [visible] = useScrollEffect("scrollEffectTec")
    const { t } = useTranslation()

    const technologies = {
        frontend: [
            { name: "React", icon: react },
            { name: "JavaScript", icon: js },
            { name: "TypeScript", icon: ts },
            { name: "HTML", icon: html },
            { name: "CSS", icon: css },
            { name: "Tailwind CSS", icon: tailwindcss },
            { name: "Bootstrap", icon: bs },
            { name: "Angular", icon: angular }
        ],

        backend: [
            { name: "NodeJS", icon: node },
            { name: "PHP", icon: php },
            { name: "PostgreSQL", icon: postgresql },
            { name: "MySQL", icon: mysql },
            { name: "MongoDB", icon: mongoDB },
            { name: "Supabase", icon: supabase }
        ],

        tools: [
            { name: "Git", icon: git },
            { name: "Gitlab", icon: gitlab },
            { name: "Cypress", icon: cypress },
            { name: "AWS", icon: aws },
            { name: "Vercel", icon: vercel },
            { name: "Postman", icon: postman },
            { name: "openAI", icon: chatgpt },
            { name: "Claude", icon: claude }
        ]
    };

    return (
        <section
            className={`technologies-section scrollEffectTec ${visible ? "visible" : ""}`}
            id="technologies"
        >
            <div className="technologies-container">

                <header className="technologies-header">
                    <h1>{t("technologies.title")}</h1>
                </header>

                {Object.entries(technologies).map(([category, items]) => (
                    <div
                        className="technology-category"
                        key={category}
                    >
                        <h2>
                            {t(`technologies.categories.${category}`)}
                        </h2>

                        <div className="technologies-grid">
                            {items.map((technology) => (
                                <div
                                    className="technology-item"
                                    key={technology.name}
                                >
                                    <img
                                        src={technology.icon}
                                        alt=""
                                    />

                                    <span>
                                        {technology.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}

export default Tecnologias