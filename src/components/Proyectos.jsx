import { Col, Row, Button } from "react-bootstrap"
import { useScrollEffect } from "../hooks/useScrollEfect"
import proj1 from "../assets/profileHub.png";
import proj2 from "../assets/reactShop.png";
import proj3 from "../assets/SportsClothing.png";
import react from "../assets/react.png";
import bootstrap from "../assets/bootstrap.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import node from "../assets/nodejs.png";
import php from "../assets/php.png";
import mysql from "../assets/mysql.png";
import typescript from "../assets/typescript.png"
import tailwindcss from "../assets/tailwindcss.png"
import javascript from "../assets/js.png"
import google from "../assets/google.png"

const Proyectos = () => {

    const [visible] = useScrollEffect("scrollEffectProyects")

    return (
        <div
            className={`scrollEffectProyects ${visible && "visible"}`}
            id="projects"
        >
            <h1>Last Projects</h1>
            <Row className="individual-project d-flex mb-5">
                <Col className="img-project">
                    <img className="rounded" src={proj1} alt="ProfileHub"/>
                </Col>
                <Col className="project1-info project-info">
                    <div>
                        <h4>ProfileHub</h4>
                        <div className="d-flex icons-proyect">
                            <img src={react} alt="react" />
                            <img src={typescript} alt="typescript" />
                            <img src={google} alt="Google authenticator" />
                            <img src={css} alt="CSS" />
                            <img src={tailwindcss} alt="Tailwind CSS" />
                        </div>
                        <div className="links-projects">
                            <Button variant="primary">
                                <a
                                href="https://github.com/Redolff/crud-react-redux"
                                target="_blank"
                                rel="noreferrer"
                                >
                                    More Info <i class="fa-brands fa-github" aria-hidden="true"></i>
                                </a>
                            </Button>
                            <Button variant="primary">
                                <a
                                    href="https://profilehub-one.vercel.app/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Visit <i className="fa-regular fa-eye" aria-hidden="true"></i>
                                </a>
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="individual-project d-flex mb-5">
                <Col className="project-info">
                    <div>
                        <h4>ReactShop</h4>
                        <div className="d-flex icons-proyect">
                            <img src={react} alt="react" />
                            <img src={node} alt="NodeJS" />
                            <img src={css} alt="CSS" />
                            <img src={javascript} alt="javascript" />
                            <img src={bootstrap} alt="bootstrap" />
                        </div>
                        <div className="links-projects">
                            <Button variant="primary">
                                <a
                                href="https://github.com/Redolff/Tienda-de-compras"
                                target="_blank"
                                rel="noreferrer"
                                >
                                    More Info <i class="fa-brands fa-github" aria-hidden="true"></i>
                                </a>
                            </Button>
                            <Button variant="primary">
                                <a
                                href="https://shoppingreact-flame.vercel.app/"
                                target="_blank"
                                rel="noreferrer"
                                >
                                    Visit <i className="fa-regular fa-eye" aria-hidden="true"></i>
                                </a>
                            </Button>
                        </div>
                    </div>
                </Col>
                <Col className="img-project">
                    <img className="rounded" src={proj2} alt="ShopCart" />
                </Col>
            </Row>
            <Row className="individual-project d-flex mb-5">
                <Col className="img-project">
                    <img className="rounded" src={proj3} alt="pc-components"/>
                </Col>
                <Col className="project1-info project-info">
                    <div>
                        <h4>SportsClothing</h4>
                        <div className="d-flex icons-proyect">
                            <img src={php} alt="php" />
                            <img src={mysql} alt="mysql" />
                            <img src={js} alt="javascript" />
                        </div>
                        <div className="links-projects">
                            <Button variant="primary">
                                <a
                                href="https://github.com/Redolff/Tp_Especial"
                                target="_blank"
                                rel="noreferrer"
                                >
                                    More Info <i class="fa-brands fa-github" aria-hidden="true"></i>
                                </a>
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Proyectos