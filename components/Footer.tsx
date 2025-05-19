const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} Ryznrd. All rights reserved.</p>
            <p>
            Follow us on{' '}
            <a href="https://www.facebook.com/Ryzrnd.Computers/" 
                className="text-blue-400"
                target="_blank"
                rel="noopener noreferrer">
                Facebook
            </a>{' '}
            and{' '}
            <a href="https://www.instagram.com/ryznrd" 
                className="text-pink-400"
                target="_blank"
                rel="noopener noreferrer">
                Instagram
            </a>
            </p>
        </div>
        </footer>
    );
}

export default Footer;