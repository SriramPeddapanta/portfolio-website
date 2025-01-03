import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white text-center p-4">
            <nav>
                <Link href="/projects" className="mx-2 hover:underline">Projects</Link>
                <Link href="/contact" className="mx-2 hover:underline">Contact</Link>
                <Link href="/resume" className="mx-2 hover:underline">Resume</Link>
                <Link href="/blog" className="mx-2 hover:underline">Blog</Link>
            </nav>
            <h1 className="text-2xl">Welcome to My Portfolio</h1>
            <p>I am an aspiring Principal Software Engineer (AI/ML Focus)</p>
        </header>
    );
}

export default Header;
