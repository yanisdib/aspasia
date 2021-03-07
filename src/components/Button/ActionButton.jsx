function ActionButton({ icon: Component, style, children }) {
    return (
        <div className={`row btn btn-action btn-action-${style} fw-5`} onClick={undefined}>
            <Component /> <span className="ml-2">{children}</span>
        </div>
    );
};

export default ActionButton;