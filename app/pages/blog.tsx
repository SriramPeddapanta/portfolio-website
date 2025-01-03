import BlogPost from '../components/BlogPost';

const Blog = () => {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold">Blog</h1>
            <BlogPost title="Understanding AI" date="January 1, 2025" summary="A brief overview of AI concepts." />
            <BlogPost title="Machine Learning Basics" date="January 2, 2025" summary="Introduction to machine learning." />
            {/* Add more BlogPost components as needed */}
        </div>
    );
};

export default Blog;
