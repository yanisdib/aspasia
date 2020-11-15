const { Children } = require("react");

function Button(props) {
    return (
        <div className={`btn btn-${props.type} fw-3`}>
            {props.children}
        </div>
    )
};

export default Button;