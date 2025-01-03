const BlogPost: React.FC<{ title: string; date: string; summary: string }> = ({ title, date, summary }) => {
    return (
        <div className="border rounded-lg p-4 shadow-md">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-500">{date}</p>
            <p>{summary}</p>
        </div>
    );
}

export default BlogPost;
