import './post-page.scss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const PostPage = () => {

    const {post} = useParams();
    const {dataPosts} = useSelector(state => state.data);

    let postInfo = {};

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