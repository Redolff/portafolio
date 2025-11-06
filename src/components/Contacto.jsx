import { Container, Row, Col } from "react-bootstrap"
import { useEffect, useState } from "react";
import { useScrollEffect } from "../hooks/useScrollEfect";
import { useTranslation } from "react-i18next";

const Contacto = () => {
    const { t } = useTranslation()

    const formInitialDetails = {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    };

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState("")
    const [status, setStatus] = useState({})
    const [visible] = useScrollEffect("scrollEffectContact")

    useEffect(() => {
        setButtonText(t("contact.send"));
    }, [t]);


    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value,
        })
    }

    const handleSubmit = async (e) => {
        if (formDetails.message === "" || formDetails.email === "" ||
            formDetails.firstName === "" || formDetails.lastName === "") {
            return setStatus({
                succes: true,
                message: t("contact.incomplete")
            })
        }
        e.preventDefault();
        setButtonText(t('contact.sending'))
        let response = await fetch(
            "https://backend-portafolio-liard.vercel.app/contact",
            {
                method: 'POST',
                headers: {
                    "Content-type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(formDetails),
            }
        );
        setButtonText(t("contact.send")) 
        let result = await response.json();
        console.log(result);
        setFormDetails(formInitialDetails)
        if (result.code === 200) {
            setStatus({
                succes: true,
                message: t("contact.success")
            })
        } else {
            setStatus({
                succes: false,
                message: t("contact.error"),
            });
        }
    }

    return (
        <div
            className={`scrollEffectContact ${visible && "visible"}`}
            id="contact"
        >
            <h1>{t("contact.title")}</h1>
            <Container className="d-flex">
                <form onSubmit={handleSubmit}>
                    <Row className="form-contact">
                        <Col size={12} sm={6} className="px-1">
                            <input
                                type="text"
                                value={formDetails.firstName}
                                placeholder={t("contact.firstName")}
                                onChange={(e) => onFormUpdate("firstName", e.target.value)}
                            />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                            <input
                                type="text"
                                value={formDetails.lastName}
                                placeholder={t("contact.lastName")}
                                onChange={(e) => onFormUpdate("lastName", e.target.value)}
                            />
                        </Col>
                        <Col size={12} sm={12} className="px-1">
                            <input
                                type="email"
                                value={formDetails.email}
                                placeholder={t("contact.email")}
                                onChange={(e) => onFormUpdate("email", e.target.value)}
                            />
                        </Col>
                        <Col size={12} sm={12} className="px-1">
                            <textarea
                                rows="6"
                                value={formDetails.message}
                                placeholder={t("contact.message")}
                                onChange={(e) => onFormUpdate("message", e.target.value)}
                            />
                            <Col sm={1} className="d-flex send">
                                <button type="submit">
                                    <span>{buttonText}</span>
                                </button>
                            </Col>
                        </Col>
                        {status.message && (
                            <Col>
                                <p className={status.success === false ? "danger" : "success"}>
                                    {status.message}
                                </p>
                            </Col>
                        )}
                    </Row>
                </form>
            </Container>
        </div>
    )
}

export default Contacto;