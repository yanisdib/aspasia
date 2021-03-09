import Home from './components/Pages/Home/Home';
import 'react-google-flight-datepicker/dist/main.css';

function App(props) {
  return <Home history={props.history} />;
}

export default App;
