const Contact = () => {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold">Contact Me</h1>
            <form>
                <input type="text" placeholder="Name" className="border p-2 w-full mb-4" />
                <input type="email" placeholder="Email" className="border p-2 w-full mb-4" />
                <textarea placeholder="Message" className="border p-2 w-full mb-4" />
                <button type="submit" className="bg-blue-500 text-white p-2 hover:bg-blue-600 transition">Send</button>
            </form>
        </div>
    );
};

export default Contact;
