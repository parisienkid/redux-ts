import './player.scss';

const Player = (props) => {

    const {nickname, name, role, bio, num} = props;

    const onTogglePlayer = () => {
        const players = document.querySelectorAll('.player');

        let active = false

        players.forEach((item, i) => {
            if (i === num && !item.classList.contains('player_active')) {
                item.classList.add('player_active');
                item.querySelector('.player__info').classList.add('player__info_active');
            } else {
                item.classList.remove('player_active');
                item.querySelector('.player__info').classList.remove('player__info_active');
            }
        });

        players.forEach((item, i) => {
            if (item.classList.contains('player_active')) {
                active = true;
            }
        });

        const image = document.querySelector('.game__image');
        
        if (active) {
            image.classList.add('game__image_active')
        } else {
            image.classList.remove('game__image_active')
        }
    };

    return (
        <div className={`player`}>
            <div onClick={onTogglePlayer} className="player__main">
                <div className="player__nickname">{nickname}</div>
                <div className="player__name">{name}</div>
            </div>
            <div className={`player__info`}>
                <div className="player__title">Роль</div>
                <div className="player__text">{role}</div>
                <div className="player__title">Биография</div>
                <div className="player__text">{bio}</div>
                <div className="player__title">Социальные сети</div>
            </div>
        </div>
    )
};

export default Player;