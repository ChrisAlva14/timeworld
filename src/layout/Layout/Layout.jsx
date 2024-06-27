import PropTypes from 'prop-types';
import { Navbar } from '../Navbar/Navbar';

export default function Layout({ children }) {
    return (
        <>
            <Navbar> </Navbar>
            <main>{children}</main>
            <footer className="footer">footer</footer>
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};