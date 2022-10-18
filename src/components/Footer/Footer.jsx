import name from '../../img/name.svg';
import logo from '../../img/logo.svg';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
    return (
        <footer className="mainFooter">
            <div className="mainFooter__info">
                <picture className="info__logo">
                    <img src={name} alt="Logo de Librería y Cotillón Las Condes." />
                    <img src={logo} alt="Logo de Librería y Cotillón Las Condes." />
                </picture>
                <div className="info__contact">
                    <h3 className="contact__title">INFORMACIÓN DE CONTACTO</h3>
                    <ul className="contact__way">
                        <li><LocationOnIcon className="way__icon"/>Virrey Cevallos 614, CABA, Argentina.</li>
                        <li><WhatsAppIcon className="way__icon"/>+54 9 11 2345 6789</li>
                        <li><EmailIcon className="way__icon"/>librerialascondes@gmail.com</li>
                    </ul>
                </div>
            </div>
            <h6 className="mainFooter__copyright">© 2022 Las Condes. Todos los derechos reservados. Prohibida la duplicación, distribución o almacenamiento en cualquier medio.</h6>
        </footer>
    )
}

export default Footer
