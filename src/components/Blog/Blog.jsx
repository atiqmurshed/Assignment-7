import PropTypes from "prop-types";

const Blog = ({blog}) => {

    const { cover, text, p } = blog;

    return (
        
        <div>
            <img className='w-80 mx-auto' src={cover} alt="" />
        </div>
    );
};
Blog.propTypes = {
    Blog: PropTypes.object.isRequired,
}
export default Blog;

