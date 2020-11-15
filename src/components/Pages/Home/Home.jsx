import './_home.scss';

function Home(props) {
    return (
        <div className="container">
            <div className="row burst">
                <div className="col-12">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Home;