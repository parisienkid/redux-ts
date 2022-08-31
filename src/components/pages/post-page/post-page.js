import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './post-page.scss';

const PostPage = () => {

    const {post} = useParams();
    const {lang} = useSelector(state => state.lang);

    let postInfo = {};
    let dataPosts = [];

    dataPosts = useSelector(state => state.data[`${lang}DataPosts`]);

    dataPosts.some(item => {
        if (item.path.slice(0, -5) == post) {
            postInfo = item;
            return true;
        }
    });

    return (
        <div className="post-page">
            <div className="post-page__container">
                <div className="post-page__title">{postInfo.name}</div>
                <div className="post-page__date">{postInfo.date}</div>
                <img src={`/img/${postInfo.path}`} alt="img" className="post-page__img" />
                <div className="post-page__content">{postInfo.content}</div>
            </div>
        </div>
    )
};

export default PostPage;