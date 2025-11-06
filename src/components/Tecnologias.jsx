import { Card, ListGroup } from "react-bootstrap";
import react from "../assets/react.png"
import redux from "../assets/redux.png"
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
import { useScrollEffect } from "../hooks/useScrollEfect"
import { useTranslation } from "react-i18next";

const Tecnologias = () => {
    const [visible] = useScrollEffect("scrollEffectTec")
    const { t } = useTranslation()

    return (
        <div 
            className={`container-tecnologies scrollEffectTec ${visible && "visible"}`}
            id="tecnologies"    
        >
            <h1>{t("technologies.title")}</h1>
            <div className="tecnologies">
                <ListGroup className="row" horizontal>
                    <ListGroup.Item className="col list-group-style">
                        <Card className="card-style">
                            <Card.Img variant="top" src={react} />
                            <Card.Body>
                                <Card.Title>React</Card.Title>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                    <ListGroup.Item className="col list-group-style">
                        <Card className="card-style">
                            <Card.Img variant="top" src={redux} />
                            <Card.Body>
                                <Card.Title>Redux</Card.Title>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                    <ListGroup.Item className="col list-group-style">
                        <Card className="card-style">
                            <Card.Img variant="top" src={node} />
                            <Card.Body>
                                <Card.Title>NodeJs</Card.Title>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                    <ListGroup.Item className="col list-group-style" >
                        <Card className="card-style">
                            <Card.Img variant="top" src={mysql} />
                            <Card.Body>
                                <Card.Title>MySQL</Card.Title>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                    <ListGroup.Item className="col list-group-style" >
                        <Card className="card-style">
                            <Card.Img variant="top" src={postgresql} />
                            <Card.Body>
                                <Card.Title>PostgreSQL</Card.Title>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                    <ListGroup.Item className="col list-group-style" >
                        <Card className="card-style">
                            <Card.Img variant="top" src={js} />
                            <Card.Body>
                                <Card.Title>Javascript</Card.Title>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                    <ListGroup.Item className="col list-group-style" >
                        <Card className="card-style">
                            <Card.Img variant="top" src={ts} />
                            <Card.Body>
                                <Card.Title>TypeScript</Card.Title>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                    <ListGroup.Item className="col list-group-style">
                        <Card className="card-style">
                            <Card.Img variant="top" src={html} />
                            <Card.Body>
                                <Card.Title>HTML</Card.Title>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                    <ListGroup.Item className="col list-group-style">
                        <Card className="card-style">
                            <Card.Img variant="top" src={css} />
                            <Card.Body>
                                <Card.Title>CSS</Card.Title>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                    <ListGroup.Item className="col list-group-style">
                        <Card className="card-style">
                            <Card.Img variant="top" src={bs} />
                            <Card.Body>
                                <Card.Title>Bootstrap</Card.Title>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                    <ListGroup.Item className="col list-group-style">
                        <Card className="card-style">
                            <Card.Img variant="top" src={tailwindcss} />
                            <Card.Body>
                                <Card.Title>Tailwind CSS</Card.Title>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                    <ListGroup.Item className="col list-group-style">
                        <Card className="card-style">
                            <Card.Img variant="top" src={git} />
                            <Card.Body>
                                <Card.Title>Git</Card.Title>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                    <ListGroup.Item className="col list-group-style">
                        <Card className="card-style">
                            <Card.Img variant="top" src={supabase} />
                            <Card.Body>
                                <Card.Title>Supabase</Card.Title>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                    <ListGroup.Item className="col list-group-style">
                        <Card className="card-style">
                            <Card.Img variant="top" src={mongoDB} />
                            <Card.Body>
                                <Card.Title>MongoDB</Card.Title>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                    <ListGroup.Item className="col list-group-style">
                        <Card className="card-style">
                            <Card.Img variant="top" src={aws} />
                            <Card.Body>
                                <Card.Title>AWS</Card.Title>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                    <ListGroup.Item className="col list-group-style">
                        <Card className="card-style">
                            <Card.Img variant="top" src={vercel} />
                            <Card.Body>
                                <Card.Title>Vercel</Card.Title>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                    <ListGroup.Item className="col list-group-style">
                        <Card className="card-style">
                            <Card.Img variant="top" src={chatgpt} />
                            <Card.Body>
                                <Card.Title>OpenAI</Card.Title>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    )
}

export default Tecnologias