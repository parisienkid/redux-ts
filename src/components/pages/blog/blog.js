import './blog.scss';
import mainImg from '../../../assets/onweb-1655810324491.webp';
import { useSelector } from 'react-redux';

import Post from '../../post/post';

const BlogPage = () => {

    const {dataPosts} = useSelector(state => state.data);

    const renderPosts = () => {
        return (
            dataPosts.map((post, i) => {
                return (
                    <Post key={i} title={post.name} content={post.content} img={post.path}/>
                )
            })
        )
    };

    return (
        <div className="blog">
            <div className="blog__container">
                <img className='blog__head-img' src={mainImg} alt="bg" />       
                {renderPosts()}
            </div>
        </div>
    )
};


export default BlogPage;