import "./product.scss";

function Product(props) {

    const handlePopup = () => {
        props.handlePopup(props.id);
    }

    return (
        <div className="ProductBlock">
            {props.category === "none" ?
                <div
                    className="ImageBlock"
                    onClick={() => handlePopup()}>
                    <img
                        src={props.photo}
                        alt=""
                        className="Image" />
                    <div className="HoverText">
                        <p>
                            Quick View
                        </p>
                    </div>
                </div>
                :
                <div className="ImageBlockWithoutHover">
                    <img
                        src={props.photo}
                        alt=""
                        className="Image" />
                </div>
            }
            <div>
                <p className="Title">
                    {props.name}
                </p>
                <p className="Price">
                    {props.price}{'$'}
                </p>
            </div>
        </div>
    );
}

export default Product;
