import './teams.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import clearNav from '../../nav/functions/clearNav';



const TeamsPage = () => {

    const {dataGame} = useSelector(state => state.data);
    const {status} = useSelector(state => state.data);

    clearNav();

    const renderItems = () => {
        return (
            dataGame.map((game, i) => {
                return <Link key={i} to={`/teams/${game.name.replace(/ /ig, '-')}`} className="teams__item">{game.name}</Link>
            })
        )
    }

    return (
        <div className="teams">
            {status === 'loading' ? null : renderItems()}
        </div>
    )
};

export default TeamsPage;