import './_profile.scss';
import cover from '../../../assets/images/monet_bg.jpg';
import ActionButton from '../../Button/ActionButton';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import profilePicture from '../../../assets/images/profile_picture_original.jpg';

function Profile(props) {
  const bgCover = {
    backgroundImage: `url(${cover})`,
    backgroundPositionX: 'center',
    backgroundSize: 'cover'
  }
  const profileThumbnail = {
    backgroundImage: `url(${profilePicture})`,
    backgroundPositionY: 'center',
    backgroundSize: 'cover'
  }
  return (
    <div className="container">
      <div className="row profile mb-5">
        <div className="col-12">
          <div className="row profile-header">
            <div className="col-12">
              <div className="row profile-cover" style={bgCover}>
                <div className="col-5 profile-music text-center">
                </div>
              </div>
              <div className="row profile-picture position-absolute">
                <div className="col-1 profile-picture-thumbnail m-auto" style={profileThumbnail}>
                </div>
              </div>
              <div className="row profile-username mt-5 mb-1">
                <div className="col-12 pt-5 text-center">
                  <h4 className="fw-6">John Doe <VerifiedUserIcon /></h4>
                  <h6 className="fw-4 gray">@{props.match.params.id}</h6>
                </div>
              </div>

            </div>
          </div>
          <div className="row profile-actions text-center mt-5 mb-5 w-75">
            <div className="col-4">
              <ActionButton icon={PersonAddRoundedIcon} style="blue">Add friend</ActionButton>
            </div>
            <div className="col-4">
              <ActionButton icon={ChatRoundedIcon} style="green">Message</ActionButton>
            </div>
            <div className="col-4">
              <ActionButton icon={PersonRoundedIcon} style="info">54 friends</ActionButton>
            </div>
          </div>
          <div className="row mt-5 w-75">
            <div className="col-12 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor neque at odio semper eleifend. Duis porta egestas nunc et euismod. Sed convallis congue porta.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
