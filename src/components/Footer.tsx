import '../styles/Footer.css';

import images from '../assets/images';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="contact">
                <h3>Contacto</h3>
                <p>Universidad Autónoma de Manizales</p>
                <p>Calle 65 No. 26-10</p>
                <p>Manizales, Colombia</p>
                <p>+57 (6) 878 1500</p>
            </div>
            <div className="social">
                <h3>Redes sociales</h3>
                <div className="social-buttons">
                    <a href="#"><img src={images.logoTwitter} alt="X-Twitter" /></a>
                    <a href="#"><img src={images.logoFacebook} alt="Facebook" /></a>
                    <a href="#"><img src={images.logoInstagram} alt="Instagram" /></a>
                </div>
            </div>
            <div className="logo-footer">
                <img src={images.logoFooter} alt="Logo Universidad Autónoma de Manizales" />
            </div>
        </footer>
    )
}
