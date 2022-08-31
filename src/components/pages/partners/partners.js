import redBull from '../../../assets/3-1621523666279-1634685756912.webp';
import secretLab from '../../../assets/secret-lab-1643299959263.webp';
import bitget from '../../../assets/bitget_-1--1643299972743.webp';
import onexbet from '../../../assets/1xbet-1652426428202.webp';

import './partners.scss';

const PartnersPage = () => {
    return (
        <div className="partners">
            <div className="partners__container">
                <div className="partners__grid">
                    <a href="#"><img src={redBull} alt="red-bull" /></a>
                    <a href="#"><img src={secretLab} alt="secretlab" /></a>
                    <a href="#"><img src={bitget} alt="bitget" /></a>
                    <a href="#"><img src={onexbet} alt="onexbete" /></a>
                </div>
            </div>
        </div>
    )
};

export default PartnersPage;