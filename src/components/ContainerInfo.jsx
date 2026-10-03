import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import imgPerfilPortfolio from '../assets/perfil.png'

const ContainerInfo = () => {
  const { t } = useTranslation()

  return (
    <section className="container-info" id="home">
            <Row className="section-info align-items-center">
              <Col xs={12} lg={4} className="hero-image-container">
                  <img
                      className="profile-image"
                      src={imgPerfilPortfolio}
                      alt="Federico Redolfo"
                  />
              </Col>
              <Col xs={12} lg={8} className="hero-content">
                  <span className="hero-eyebrow">
                      {t("containerInfo.eyebrow")} 
                  </span>
                  <h1>
                      {t("containerInfo.title")}
                  </h1>
                  <h2>
                      {t("containerInfo.subtitle")}
                  </h2>
                  <span>{t("containerInfo.experience")} </span>
                  <p>
                      {t("containerInfo.description")}
                  </p>
              </Col>
            </Row>
        </section>

  );
}

export default ContainerInfo;
