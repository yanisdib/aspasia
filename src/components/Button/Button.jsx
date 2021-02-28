function Button({ style, children, marginTop, marginLeft, marginRight, marginBottom, onClick = undefined }) {
  const mt = marginTop ? marginTop : 4;
  const ml = marginLeft ? marginLeft : 0;
  const mr = marginRight ? marginRight : 0;
  const mb = marginBottom ? marginBottom : 0;
  return (
    <div
      className={`btn btn-${style} fw-4 mt-${mt} mb-${mb} mr-${mr} ml-${ml}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Button;
