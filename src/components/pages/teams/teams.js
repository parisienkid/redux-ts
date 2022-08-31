import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import clearNav from '../../nav/functions/clearNav';

import './teams.scss';

const TeamsPage = () => {

    let dataGames = [];
    const {lang} = useSelector(state => state.lang);
    dataGames = useSelector(state => state.data[`${lang}DataGames`]);

    clearNav();

    const renderItems = () => {
        return (
            dataGames.map((game, i) => {
                return <Link key={i} to={`/teams/${game.name.replace(/ /ig, '-')}`} className="teams__item">{game.name}</Link>
            })
        )
    }

    return (
        <div className="teams">
            {dataGames.length > 0 ? renderItems() : null}
        </div>
    )
};

export default TeamsPage;