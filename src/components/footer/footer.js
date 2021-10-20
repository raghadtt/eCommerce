import { Link } from 'react-router-dom';

import './footer.scss';

function Footer() {
    return (
        <div className="Footer">
            <Link
                to="/contact"
                className="FooterSections">
                <span>
                    Contact us
                </span>
            </Link>
            <Link
                to="/about"
                className="FooterSections">
                <span>
                    About
                </span>
            </Link>
            <Link
                to="/shipping"
                className="FooterSections">
                <span >
                    Shipping {"&"} Returns
                </span>
            </Link>
            <Link
                to="/policy"
                className="FooterSections">
                <span >
                    Store Policy
                </span>
            </Link>
        </div >
    );
}

export default Footer;
