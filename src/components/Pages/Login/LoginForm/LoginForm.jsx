import { Link } from 'react-router-dom';
import { useState } from 'react';

function LoginForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRememberChecked, setIsRememberChecked] = useState(false);
  const onEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onPasswordChange = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const onRememberCheckedChange = (e) => {
    const isChecked = e.target.checked;
    setIsRememberChecked(isChecked);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      email: email,
      password: password,
      isRemember: isRememberChecked
    });
    console.log(password);
  };
  return (
    <form onSubmit={onSubmit}>
      <div className='form-group'>
        <label htmlFor='inputEmailLogin'>Email</label>
        <input
          type='email'
          id='inputEmailLogin'
          className='form-control'
          aria-describedby='emailLoginHelp'
          placeholder='Enter email'
          onChange={onEmailChange}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='inputPasswordLogin'>Password</label>
        <input
          type='password'
          id='inputPasswordLogin'
          className='form-control'
          aria-describedby='passwordLoginHelp'
          placeholder='Password'
          onChange={onPasswordChange}
        />
      </div>
      <div className='form-group'>
        <a href='/'>Forgot your password?</a>
        <br />
        <Link to='/sign-up'>Create a new account</Link>
      </div>
      <div className='form-group'>
        <input
          type='checkbox'
          className='mr-2'
          checked={isRememberChecked}
          onChange={onRememberCheckedChange}
        />
        <label htmlFor='checkboxRememberUser'>Se souvenir de moi</label>
      </div>
      <div className='form-group'>
        <input
          type='submit'
          className='btn btn-primary fw-4 mt-1'
          value='Log in'
        />
      </div>
    </form>
  );
}

export default LoginForm;
