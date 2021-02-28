import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './actions/auth';
import Home from './components/Pages/Home/Home';
import 'react-google-flight-datepicker/dist/main.css';

function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    const uid = localStorage.getItem('user');
    if (!!uid) {
      dispatch(login(uid));
    }
  }, []);
  return <Home history={props.history} />;
}

export default App;
