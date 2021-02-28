import TagsInput from '../../../../Form/TagsInput/TagsInput';
import PropTypes from 'prop-types';

function InterestStep(props) {
  const hobbiesTags = props.hobbiesTags;
  const musicGenresTags = props.musicGenresTags;
  const error = props.error;
  return props.currentStep === 3 ? (
    <>
      <h3 className='fw-6 mt-3'>Interests</h3>
      <p className='mt-3 w-75'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a
        velit iaculis, lobortis neque vitae, fringilla felis. Mauris nec mi in
        justo tincidunt cursus.
      </p>
      <div className='form-group'>
        <TagsInput
          id='hobbiesInput'
          title='What are your hobbies?'
          label='Interests'
          tags={hobbiesTags}
          setTags={props.setHobbiesTags}
          error={props.error}
          setError={props.setError}
        />
        <TagsInput
          id='musicInput'
          title='What genres of music do you like?'
          label='Genres'
          tags={musicGenresTags}
          error={error}
          setTags={props.setMusicGenresTags}
          setError={props.setError}
        />
      </div>
    </>
  ) : null;
}

InterestStep.propTypes = {
  tags: PropTypes.array,
  error: PropTypes.string,
  setTags: PropTypes.func,
  setError: PropTypes.func,
};

export default InterestStep;
