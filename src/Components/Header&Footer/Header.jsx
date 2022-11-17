import logo from '../images/logo.png';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <a href="/" className='navbar-brand'>
                    <img src={logo} alt="DF News" width="100" />
                </a>
            </nav>
        </header>
    );
}

export default Header;