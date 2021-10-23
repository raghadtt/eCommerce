import { HashLink } from 'react-router-hash-link';

import './footer.scss';

function Footer() {
    return (
        <div className="Footer">
            <HashLink
                to="/contact#top"
                className="FooterSections">
                <span>
                    Contact us
                </span>
            </HashLink>
            <HashLink
                to="/about#top"
                className="FooterSections">
                <span>
                    About
                </span>
            </HashLink>
            <HashLink
                to="/policy#shipping"
                className="FooterSections">
                <span >
                    Shipping Policy
                </span>
            </HashLink>
            <HashLink
                to="/policy#return"
                className="FooterSections">
                <span >
                    Return Policy
                </span>
            </HashLink>
        </div >
    );
}

export default Footer;
