const BlogPost: React.FC<{ title: string; date: string; summary: string; link?: string }> = ({ title, date, summary, link }) => {
    return (
        <div className="border rounded-lg p-4 shadow-md">
            {link ? (
                <a href={link} className="text-blue-500 hover:underline" rel="noopener noreferrer">
                    <h3 className="text-xl font-semibold">{title}</h3>
                </a>
            ) : (
                <h3 className="text-xl font-semibold">{title}</h3>
            )}
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-500">{date}</p>
            <p>{summary}</p>
        </div>
    );
}

export default BlogPost;
