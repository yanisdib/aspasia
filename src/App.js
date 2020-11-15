import PropTypes from 'prop-types';

import Home from './components/Pages/Home/Home';
import AppDetail from './containers/Layouts/AppDetail/AppDetail';

import firstBackground from './assets/images/bg_detail_01_1350x900.jpg';
import secondBackground from './assets/images/bg_detail_02_1350x900.jpg';

function App() {
  const images = [firstBackground, secondBackground];
  return (
    <Home>
      <AppDetail title="Meet people from all around the world" images={images}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum mattis odio vel viverra. Pellentesque tempus lectus et volutpat vehicula. Curabitur vulputate tempus lacus sed cursus.
      </AppDetail>
    </Home>
  );
};

App.propTypes = {
  title: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string)
};

export default App;
