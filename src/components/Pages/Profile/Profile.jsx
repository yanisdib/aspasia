import { startGetCurrentUser } from '../../../actions/currentUser';
import { startGetUserProfile } from '../../../actions/profile';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import './_profile.scss';
import cover from '../../../assets/images/monet_bg.jpg';
import ActionButton from '../../Button/ActionButton';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import profilePicture from '../../../assets/images/profile_picture_original.jpg';
import ProfileLanguages from './ProfileLanguages/ProfileLanguages';
import ProfileHobbies from './ProfileHobbies/ProfileHobbies';
import ProfileFavoriteMusic from './ProfileFavoriteMusic/ProfileFavoriteMusic';
import ProfileInformation from './ProfileInformation/ProfileInformation';


function Profile(props) {
  const bgCover = {
    backgroundImage: `url(${cover})`,
    backgroundPositionX: 'center',
    backgroundSize: 'cover'
  };
  const profileThumbnail = {
    backgroundImage: `url(${profilePicture})`,
    backgroundPositionY: 'center',
    backgroundSize: 'cover'
  };
  const dispatch = useDispatch();
  //const uid = useSelector(state => state.auth.uid);
  const uid = props.match.params.id;
  useEffect(() => {
    dispatch(startGetUserProfile(uid));
  }, [])
  const userProfile = useSelector(state => state.profile);
  const { birthdate, city, country, createdAt, firstName, lastName, email, isSuper, isVerified, profile, username } = userProfile;
  //  const { biography } = profile;
  return Object.keys(userProfile).length > 0 ? (
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
                  <h4 className="fw-6">{`${firstName} ${lastName} `}<VerifiedUserIcon /></h4>
                  <h6 className="fw-4 gray">@{props.match.params.id}</h6>
                </div>
              </div>
            </div>
            <div className="row mt-4 mb-3 w-75">
              <div className="col-12 text-center">
                {profile.biography}
              </div>
            </div>
            <div className="row profile-actions text-center mt-4 mb-5 w-75">
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
          </div>
          <ProfileInformation
            city={city}
            country={country}
            birthdate={birthdate}
            {...profile}
          />
          <ProfileLanguages {...profile} />
          <ProfileHobbies {...profile} />
          <ProfileFavoriteMusic {...profile} />
        </div>
      </div>
    </div>
  ) : (<LoadingSpinner />);
};

export default Profile;
