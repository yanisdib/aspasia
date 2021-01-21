function Button({ type, children, ml, mr, mb, onClick = undefined }) {
  return (
    <div
      className={`btn btn-${type} fw-4 mt-4 mb-${mb} mr-${mr} ml-${ml}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Button;
