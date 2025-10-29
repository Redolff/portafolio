import { Button, Col, Row } from "react-bootstrap";
import imgPortafolio from '../assets/profileImg.png';
import { useTranslation } from "react-i18next";

const ContainerInfo = () => {
  const { t } = useTranslation()

  return (
    <div className="container-info" id="home">
      <Row className="justify-content-md-center section-info">
        <Col xs={12} md={10} className="profile-container">
          <div className="profile-wrapper">
            <img className="profile-image" src={imgPortafolio} alt="me"/>
            <div className="info-card">
              <h1>{t("containerInfo.title")}</h1>
              <p> {t("containerInfo.description")} </p>
              <a href="#contact" className="d-flex justify-content-start">
                <Button className="mt-3" variant="primary">
                  {t("containerInfo.button")}
                </Button>
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ContainerInfo;
