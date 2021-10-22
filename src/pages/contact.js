import "./styles/pages.scss";

function Contact() {
    return (
        <div className="Container">
            <h3>
                Contact Us
            </h3>
            <div className="ContactInfo">
                <p>
                    <h4>
                        Flagship Store
                    </h4>
                    500 Terry Francois St.
                    <br />
                    San Francisco, CA 94158
                    <br />
                    123-456-7890
                </p>
                <p>
                    <h4>
                        Opening Hours
                    </h4>
                    Mon - Fri: 7am - 10pm
                    <br />
                    Saturday: 8am - 10pm
                    <br />
                    Sunday: 8am - 11pm
                </p>
                <p>
                    <h4>
                        Customer Service
                    </h4>
                    1-800-000-000
                    <br />
                    123-456-7890
                    <br />
                    info@my-domain.com
                </p>
            </div>
        </div>
    );
}

export default Contact;
