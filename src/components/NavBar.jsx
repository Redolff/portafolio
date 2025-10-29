import { Container, Nav, Navbar } from "react-bootstrap"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home')
    const [scroll, setScroll] = useState(false)
    const { t, i18n } = useTranslation()
    
    const currentLang = i18n.language; // idioma actual

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        }

        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActivateLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Navbar expand='md' className={scroll ? "scrolled" : ""}>
            <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            href="#home"
                            className={
                                activeLink === 'home' ? "active navbar-link" : "navbar-link"
                            }
                            onClick={() => onUpdateActivateLink("home")}
                        >
                            {t("navbar.home")}
                        </Nav.Link>
                        <Nav.Link
                            href="#aboutMe"
                            className={
                                activeLink === 'aboutMe' ? "active navbar-link" : "navbar-link"
                            }
                            onClick={() => onUpdateActivateLink("aboutMe")}>
                            {t("navbar.aboutMe")}
                        </Nav.Link>
                        <Nav.Link
                            href="#projects"
                            className={
                                activeLink === 'Projects' ? 'active navbar-link' : 'navbar-link'
                            }
                            onClick={() => onUpdateActivateLink("projects")}>
                            {t("navbar.projects")}
                        </Nav.Link>
                        <Nav.Link
                            href="#tecnologies"
                            className={
                                activeLink === 'tecnologies' ? 'active navbar-link' : 'navbar-link'
                            }
                            onClick={() => onUpdateActivateLink("tecnologies")}>
                            {t("navbar.technologies")}
                        </Nav.Link>
                    </Nav>

                    <div className="language-switcher">
                        <button 
                            onClick={() => changeLanguage("es")}
                            className={currentLang === "es" ? "active-lang" : ""}
                        >
                            🇪🇸
                        </button>
                        <button 
                            onClick={() => changeLanguage("en")}
                            className={currentLang === "en" ? "active-lang" : ""}
                        >
                            🇬🇧
                        </button>
                    </div>

                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/federico-nahuel-redolfo/" target="blank">
                                <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
                            </a>
                            <a href="https://github.com/Redolff" target="blank">
                                <i className="fa-brands fa-github" aria-hidden="true"></i>
                            </a>
                            <a href="#contact">
                                <i className="fa fa-envelope" aria-hidden='true'></i>
                            </a>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar