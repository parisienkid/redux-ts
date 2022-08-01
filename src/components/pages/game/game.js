import './game.scss';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Player from '../../player/player';

const GamePage = () => {
    let {game} = useParams();
    const {dataGame} = useSelector(state => state.data);
        

    return (
        <div className="game">
            <div className="game__players">
                <Link className="game__back" to='/teams'>
                    <span></span>
                    НАЗАД К СОСТАВАМ
                </Link>
                {
                    dataGame.map(item => {
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
            <div className="game__image">

            </div>
        </div>
    )
};

export default GamePage;