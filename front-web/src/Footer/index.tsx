import './styles.css';
import { ReactComponent as YouTubeIcon } from './youtube.svg'
import { ReactComponent as LinkedinIcon } from './linkedin.svg'
import { ReactComponent as InstagramIcon } from './instagram.svg'


import { ReactComponent as Logo } from './logo.svg';

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2° ed. di evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/channel/UCaNtH1Lrs_sx3_WSVmf00Yw" target="_new">
                    <YouTubeIcon/>
                </a>
                <a href="https://www.linkedin.com/in/alexsandro-lima/" target="_new">
                    <LinkedinIcon/>
                </a>
                <a href="https://www.instagram.com/sanndro.lima/" target="_new">
                <InstagramIcon/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;