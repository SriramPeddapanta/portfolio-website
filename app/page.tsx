// app/page.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow p-8">
                <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
                <p className="mt-4">I am an aspiring Principal Software Engineer (AI/ML Focus)</p>
                <section id="projects" className="mt-8">
                    <h2 className="text-2xl font-semibold">Projects</h2>
                    <p>List of projects here.</p>
                </section>
                <section id="contact" className="mt-8">
                    <h2 className="text-2xl font-semibold">Contact</h2>
                    <p>Contact details here.</p>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
