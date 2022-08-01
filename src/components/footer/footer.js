import './footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <span className="footer__link">брендбук</span><Link to={'/contacts'} className="footer__link">контакты</Link><span>© 2021 TEAM SPIRIT</span>
        </footer>
    )
};

export default Footer;