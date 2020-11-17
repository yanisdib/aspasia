function Button({ type, children }) {
    return (
        <div className={`btn btn-${type} fw-4`}>
            {children}
        </div>
    )
};

export default Button;