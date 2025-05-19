const Banner = () => {
    return (
    <div className="w-full my-8 bg-[#f9f9f9] text-gray-900 py-16 px-6 text-center shadow-lg">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Build Your Dream PC
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-700">
            Custom Performance. Tailored for You.
            </p>
            <ul className="text-gray-600 mb-8 space-y-1">
            <li>💡 Choose your components</li>
            <li>⚙️ Optimize for gaming, work, or creativity</li>
            <li>🚀 Get expert guidance and fast assembly</li>
            </ul>
            <a
            href="/build"
            className="inline-block bg-gray-900 hover:bg-black text-white font-semibold px-6 py-3 rounded-xl transition"
            >
            Start Building Now
            </a>
        </div>
    </div>
    );
}
export default Banner;