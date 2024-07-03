import PropTypes from 'prop-types';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';

export default function Layout({ children }) {
    return (
        <>
            <Navbar> </Navbar>
            <main>{children}</main>
            <Footer> </Footer>
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};