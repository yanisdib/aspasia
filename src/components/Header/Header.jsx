import './_header.scss';
function Header() {
    return (
        <div className="row header align-content-center">
            <div className="col-2 col-sm-2 cold-md-1 col-lg-1 col-xl-1 d-flex align-items-center">
                <svg width="2.55em" height="2.55em" viewBox="0 0 16 16" className="bi bi-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </div>
            <div className="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 text-center d-flex align-items-center">
                <h4>
                    <span className="blue">G</span>
                    <span className="red">o</span>
                    <span className="yellow">o</span>
                    <span className="blue">g</span>
                    <span className="green">l</span>
                    <span className="red">e</span>
                    <span className="gray"> Pals</span>
                </h4>
            </div>
            <div className="d-none d-sm-none col-md-7 col-lg-7 col-xl-7 d-md-flex d-lg-flex d-xl-flex text-center justify-content-end align-items-center">
                <a className="p-4 fw-5">Help</a>
                <a className="p-4 fw-5">Contact</a>
                <a className="p-4 fw-5">Create an account</a>
                <a className="p-4 fw-5">Sign in</a>
            </div>
        </div>
    );
};

export default Header;