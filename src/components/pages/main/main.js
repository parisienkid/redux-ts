import './main.scss';
import '../../../variables/white-btn.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const MainPage = () => {
    
    const {dataPosts} = useSelector(state => state.data);

    const renderBtn = () => {
        return (
            <Link to={`/blog/${dataPosts[0].path.slice(0, -5)}`} className="white-btn_active main__btn">подробнее</Link>
        )
    };

    return (
        <div className="main">
            <div className="main__content">
                <div className="main__title">TEAM SPIRIT АНОНСИРУЕТ НОВОГО ИГРОКА CS:GO РОСТЕРА</div>
                {dataPosts.length > 0 ? renderBtn() : null}
            </div>
        </div>
    )
};

export default MainPage;