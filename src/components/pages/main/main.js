import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './main.scss';
import '../../../variables/white-btn.scss';


const MainPage = () => {
    
    const {lang} = useSelector(state => state.lang);
    const status = useSelector(state => state.data[`${lang}StatusData`]);
    const btn = useSelector(state => state.data[`${lang}Main`].btn)
    let dataPosts = useSelector(state => state.data[`${lang}DataPosts`]);

    const renderContent = () => {
        return (
            <>
                <div className="main__title">{dataPosts[0].name}</div>
                <Link to={`/blog/${dataPosts[0].path.slice(0, -5)}`} className="white-btn_active main__btn">{btn}</Link>
            </>
        )
    };

    return (
        <div className="main">
            <div className="main__content">
                {
                    status === 'idle'
                    ?
                    renderContent()
                    :
                    null
                }
            </div>
        </div>
    )
};

export default MainPage;