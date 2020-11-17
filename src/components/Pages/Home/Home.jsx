import PropTypes from 'prop-types';

import PresentationLayout from '../../Layout/PresentationLayout/PresentationLayout';

import firstBackground from '../../../assets/images/bg_detail_01_1350x900.jpg';
import secondBackground from '../../../assets/images/bg_detail_02_1350x900.jpg';
import fourthBackground from '../../../assets/images/bg_detail_04_600x900.jpg';
import thirdBackground from '../../../assets/images/bg_detail_03_600x900.jpg';

import './_home.scss';
import CreateUserForm from '../../../containers/CreateUserForm/CreateUserForm';

function Home() {
    const images = [firstBackground, secondBackground];
    const imagesReversed = [thirdBackground, fourthBackground];
    return (
        <>
            <div className="container">
                <div className="row justify-content-between mtb-2">
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-5 mb-sm-5 mb-md-0 mb-lg-0 mb-xl-0">
                        <h2 className="fw-6">Join our penpals community</h2>
                        <p className="pr-4 pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a felis id nisl tempus bibendum quis et purus. Morbi sem lacus, volutpat a vulputate id, tempor et elit. Maecenas eu turpis et est posuere ultricies.</p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"><CreateUserForm /></div>
                </div>
            </div>
            <PresentationLayout title="Meet people from all around the world" images={images} isReversed={false}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum mattis odio vel viverra. Pellentesque tempus lectus et volutpat vehicula. Curabitur vulputate tempus lacus sed cursus.
            </PresentationLayout>
            <PresentationLayout title="Practice new languages with native friends" images={imagesReversed} isReversed={true}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum mattis odio vel viverra. Pellentesque tempus lectus et volutpat vehicula. Curabitur vulputate tempus lacus sed cursus.
            </PresentationLayout>
        </>
    );
};

Home.propTypes = {
    title: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    isReversed: PropTypes.bool
};

export default Home;