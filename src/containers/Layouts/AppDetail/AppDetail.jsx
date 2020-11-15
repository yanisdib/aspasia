import Loadable from 'react-loadable';

function AppDetail(props) {
    const firstBackground = {
        backgroundImage: `url(${props.images[0]})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    };
    const secondBackground = {
        backgroundImage: `url(${props.images[1]})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    };
    return (
        <div className="row app-detail justify-content-between">
            <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 h-100">
                <div className="row h-25">
                    <div className="col-10 col-sm-11 col-md-12 col-lg-10 col-xl-8 p-0">
                        <h3 className="fw-6">{props.title}</h3>
                        <p className="pr-xl-4">{props.children}</p>
                    </div>
                </div>
                <div className="row h-75">
                    <div className="d-none d-sm-none d-md-flex d-lg-flex d-xl-flex col-md-2 col-lg-2 col-xl-2"></div>
                    <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 align-self-end h-100" style={firstBackground}>
                    </div>
                </div>
            </div>
            <div className="d-none d-sm-none d-md-flex d-lg-flex d-xl-flex col-md-5 col-lg-6 col-xl-6 h-75 offset-md-1 offset-lg-1 offset-xl-1" style={secondBackground}>
            </div>
        </div>
    )
};

export default AppDetail;