import { Link } from 'react-router-dom';

import './post.scss';

const Post = (props) => {

    let {img, title, content, date} = props;

    if (content.length > 215) {
        content = content.substring(0,215) + '...';
    }

    return (
        <Link to={`/blog/${img.slice(0, -5)}`} className="post">
            <img src={`img/${img}`} alt="img" className="post__img"/>
            <div className="post__info">
                <div className="post__title">{title}</div>
                <div className="post__content">{content}</div>
                <div className="post__date">{date}</div>
            </div>
        </Link>
    )
};

export default Post;