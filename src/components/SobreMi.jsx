import { Button } from 'react-bootstrap';
import { useScrollEffect } from '../hooks/useScrollEfect';
import myResume from '../resume/Federico-Redolfo-CV.pdf';
import { useTranslation } from 'react-i18next';

const SobreMi = () => {
    const [visible] = useScrollEffect("scrollEffectAbout")
    const { t } = useTranslation()

    function handleDownload() {
        const link = document.createElement("a")
        link.href = myResume;
        link.download = "Federico-Redolfo-CV.pdf"
        link.click()
    }

    return (
        <div className={`container-sobreMi scrollEffectAbout ${visible && "visible"} `} id='aboutMe'>
            <h1>{t("aboutMe.title")}</h1>
            <p> {t("aboutMe.paragraph1")} </p>
            <p>{t("aboutMe.paragraph2")}</p>
            <p> {t("aboutMe.paragraph3")} </p>
            <div
                className={`container-resume scrollEffectResume ${visible && "visible"}`}
            >
                <Button className="button-resume" onClick={handleDownload}>
                    {t("aboutMe.button")}
                </Button>
            </div>
        </div>
    )
}

export default SobreMi