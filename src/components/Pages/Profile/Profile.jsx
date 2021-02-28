function Profile(props) {
  return (
    <div className='row'>
      <div className='col'>User profile {props.match.params.id} under development</div>
    </div>
  );
};

export default Profile;
