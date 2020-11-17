function PresentationLayout({ images, title, isReversed, children }) {
    const firstBackground = {
        backgroundImage: `url(${images[0]})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    };
    const secondBackground = {
        backgroundImage: `url(${images[1]})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    };

    return (
        <div className="container">
            <div className="row app-detail justify-content-between mtb-3">
                {
                    isReversed ? (
                        <>
                            <div className="d-none d-sm-none d-md-none d-lg-none d-xl-flex col-md-2 col-lg-1 col-xl-1"></div>
                            <div className="d-none d-sm-none d-md-flex d-lg-flex d-xl-flex col-md-5 col-lg-6 col-xl-5 h-8" style={secondBackground}>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 offset-md-1 offset-lg-1 offset-xl-1 h-100">
                                <div className="row h-4 justify-content-end">
                                    <div className="col-10 col-sm-11 col-md-12 col-lg-10 col-xl-8 p-0 align-self-center text-right">
                                        <h3 className="fw-6">{title}</h3>
                                        <p className="pl-xl-4">{children}</p>
                                    </div>
                                </div>
                                <div className="row h-6">
                                    <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 align-self-end h-100" style={firstBackground}></div>
                                    <div className="d-none d-sm-none d-md-none d-lg-none d-xl-flex col-md-2 col-lg-2 col-xl-2"></div>
                                </div>
                            </div>
                        </>
                    ) : (
                            <>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 h-100">
                                    <div className="row h-4">
                                        <div className="col-10 col-sm-11 col-md-12 col-lg-10 col-xl-8 p-0 align-self-center">
                                            <h3 className="fw-6">{title}</h3>
                                            <p className="pr-xl-4">{children}</p>
                                        </div>
                                    </div>
                                    <div className="row h-6">
                                        <div className="d-none d-sm-none d-md-flex d-lg-flex d-xl-flex col-md-2 col-lg-2 col-xl-2"></div>
                                        <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 align-self-end h-100" style={firstBackground}>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-none d-sm-none d-md-flex d-lg-flex d-xl-flex col-md-5 col-lg-6 col-xl-5 h-8 offset-md-1 offset-lg-1 offset-xl-1" style={secondBackground}>
                                </div>
                                <div className="d-none d-sm-none d-md-flex d-lg-flex d-xl-flex col-md-2 col-lg-1 col-xl-1"></div>
                            </>
                        )
                }
            </div>
        </div>
    )
};

export default PresentationLayout;