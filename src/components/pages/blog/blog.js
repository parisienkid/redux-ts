import { useSelector } from 'react-redux';

import mainImg from '../../../assets/onweb-1655810324491.webp';
import Post from '../../post/post';

import './blog.scss';

const BlogPage = () => {

    let dataPosts = [];
    const {lang} = useSelector(state => state.lang);
    dataPosts = useSelector(state => state.data[`${lang}DataPosts`]);

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
                {dataPosts.length > 0 ? renderPosts() : null}
            </div>
        </div>
    )
};


export default BlogPage;