function LoadingSpinner() {
    return (
        <div className="row align-content-center justify-content-center m-auto text-center">
            <div className="col">
                <div className="spinner-border text-primary m-2" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-border text-secondary m-2" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-border text-success m-2" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div class="spinner-border text-danger m-2" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-border text-warning m-2" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    );
};

export default LoadingSpinner;