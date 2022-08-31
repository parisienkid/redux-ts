import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './footer.scss';

const Footer = () => {

    const {lang} = useSelector(state => state.lang);
    const status = useSelector(state => state.data[`${lang}StatusData`]);
    const dataFooter = useSelector(state => state.data[`${lang}Footer`]);

    return (
        <footer className="footer">
            {
                status === "idle"
                ?
                    <>
                        <span className="footer__link">{dataFooter.brandbook}</span><Link to={'/contacts'} className="footer__link">{dataFooter.contacts}</Link><span>© 2021 TEAM SPIRIT</span>
                    </>
                :
                null
            }
        </footer>
    )
};

export default Footer;