import { useDispatch } from 'react-redux';
import { startCreateUserProfile } from '../../../actions/currentUser';
import CreateUserProfileForm from './CreateUserProfileForm/CreateUserProfileForm';
import background from '../../../assets/images/bg_profile_900x1080.jpg';

function CreateUserProfile(props) {
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPositionY: 'center',
    height: '600px',
  };
  const dispatch = useDispatch();
  const history = props.history;
  const onSubmit = (profile) => {
    dispatch(
      startCreateUserProfile(profile)
    );
    history.push('/');
  };
  return (
    <div className='container mt-2 mb-5'>
      <div className='row justify-content-between align-self-center form-border'>
        <div className='col-7'>
          <CreateUserProfileForm pages={3} onSubmit={onSubmit} />
        </div>
        <div className='col-5 align-self-center'>
          <div className='row justify-content-end'>
            <div className='col-12' style={backgroundStyle}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateUserProfile;
