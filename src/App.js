import Home from './components/Pages/Home/Home';


function App(props) {
  return (
    <Home history={props.history} />
  );
};

export default App;
