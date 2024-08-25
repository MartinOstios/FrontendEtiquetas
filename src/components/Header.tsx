import '../styles/Header.css';
import images from '../assets/images';

export default function Header() {
    return (
        <header className="header">
            <div className="left">
                <div className="logo">
                    <img src={images.logoHeader} alt="Logo Universidad Autónoma de Manizales" />
                </div>
                <ul className='nav-buttons'>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Carreras</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>
            <div className="auth-buttons">
                <a href='#'>Iniciar sesión</a>
                <a href='#'>Registrarse</a>
            </div>
        </header>
    )
}
