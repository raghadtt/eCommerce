import "./styles/pages.scss";

function Policy() {
    return (
        <div className="Container">
            <div id="return">
                <h3>
                    Returns Policy
                </h3>
                <p className="Paragraphs">
                    You have 30 calendar days to return an item from the date you received it.
                    <br />
                    To be eligible for a return, your item must be unused and in the same condition that you received it.
                    <br />
                    Your item must be in the original packaging.
                    <br />
                    Your item needs to have the receipt or proof of purchase.
                </p>
            </div>
            <div id="shipping">
                <h3>
                    Shipping Policy
                </h3>
                <p className="Paragraphs">
                    FREE SHIPPING ON ORDERS OVER $50
                    <br />
                    You will be responsible for paying for your own shipping costs for returning your item.
                    <br />
                    Shipping costs are nonrefundable.
                    <br />
                    If you receive a refund, the cost of return shipping will be deducted from your refund.
                </p>
            </div>
        </div>
    );
}

export default Policy;