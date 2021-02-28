import LoginForm from './LoginForm/LoginForm';
import background from '../../../assets/images/bg_login_900x1080.jpg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startLogin } from '../../../actions/auth';

function Login(props) {
  const [authProvider, setAuthProvider] = useState('');
  const dispatch = useDispatch();
  const history = props.history;
  const onSubmit = (loginData) => {
    dispatch(startLogin(authProvider, loginData));
    setTimeout(() => {
      history.push('/create-profile');
    }, 3000);
  };
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPositionY: 'center',
    height: '500px',
  };
  return (
    <div className='container'>
      <div className='row login form-border'>
        <div className='col-5' style={backgroundStyle}></div>
        <div className='col-6 offset-1 align-self-center'>
          <LoginForm
            authProvider={authProvider}
            setAuthProvider={setAuthProvider}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
