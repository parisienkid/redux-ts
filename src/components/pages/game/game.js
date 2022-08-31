import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Player from '../../player/player';

import './game.scss';

const GamePage = () => {

    let {game} = useParams();
    let dataPlayers = [];
    const {lang} = useSelector(state => state.lang);
    dataPlayers = useSelector(state => state.data[`${lang}DataGames`]);
        
    return (
        <div className="game">
            <div className="game__players">
                <Link className="game__back" to='/teams'>
                    <span></span>
                    НАЗАД К СОСТАВАМ
                </Link>
                {
                    dataPlayers.map(item => {
                        if (item.name === game.replace(/-/ig, ' ')) {
                            return (
                                item.players.map((player, i) => {
                                   return (
                                        <Player key={i} num={i} nickname={player.nickname} name={player.name} role={player.role} bio={player.bio}/>
                                   )
                                })
                            )
                        }
                    })
                }
            </div>
            <div className="game__image"></div>
        </div>
    )
};

export default GamePage;