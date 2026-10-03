import { Container, Nav, Navbar } from "react-bootstrap"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home')
    const [scroll, setScroll] = useState(false)
    const [open, setOpen] = useState(false);
    const { t, i18n } = useTranslation()
    const currentLang = i18n.language

    const languages = [
        { code: "es", label: "🇪🇸" },
        { code: "en", label: "🇬🇧" },
    ]

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
        setOpen(false)
    }

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
    }

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
                            href="#technologies"
                            className={
                                activeLink === 'technologies' ? 'active navbar-link' : 'navbar-link'
                            }
                            onClick={() => onUpdateActivateLink("technologies")}>
                            {t("navbar.technologies")}
                        </Nav.Link>
                    </Nav>

                    <div className="lang-dropdown">
                        <button
                            className="lang-selected"
                            onClick={() => setOpen(!open)}
                        >
                            {currentLang === "es" ? "🇪🇸" : "🇬🇧"}
                            <span className="arrow">{open ? "▲" : "▼"}</span>
                        </button>

                        {open && (
                            <div className="lang-options">
                                {languages
                                    .filter((l) => l.code !== currentLang)
                                    .map((lang) => (
                                        <button
                                            key={lang.code}
                                            className="lang-option"
                                            onClick={() => changeLanguage(lang.code)}
                                        >
                                            {lang.label}
                                        </button>
                                    ))}
                            </div>
                        )}
                    </div>

                    <span className="navbar-text navbar-mobile-tools">
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