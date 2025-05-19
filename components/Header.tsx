import Navigation from "./Navigation";

const Header = () => {
    return (
        <header className="flex align-center justify-between text-white p-4 bg-black sticky top-0 z-50">
        <h1 className="text-3xl font-extrabold">Ryznrd Computers</h1>
        <Navigation />
        </header>
    );
}

export default Header;