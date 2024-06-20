import PropTypes from 'prop-types';

export default function Layout({ children }) {
    return (
        <>
            <nav className="navbar">navbar</nav>
            <main>{children}</main>
            <footer className="footer">footer</footer>
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};