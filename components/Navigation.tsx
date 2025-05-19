import Link from "next/link";

const Navigation = () => {
    return (
        <nav className="flex justify-between items-center p-1.5 text-gray-400">
            <ul className="flex space-x-4">
                <Link href="/" className="hover:text-white">Home</Link>
                <Link href="buy-now" className="hover:text-white">Buy Now</Link>
                <Link href="previous-builds" className="hover:text-white">Previous Builds</Link>
                <Link href="socials" className="hover:text-white">Socials</Link>
                <Link href="about-us" className="hover:text-white">About Us</Link>
            </ul>
        </nav>
    );
}
export default Navigation;