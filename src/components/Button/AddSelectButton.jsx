import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';

function AddSelectButton(props) {
    const buttonColor = {
        color: '#4285f5',
        cursor: 'pointer'
    };
    return (
        <div className="col">
            <AddCircleOutlineRoundedIcon onClick={props.onClick} style={buttonColor} />
        </div>
    );
};

export default AddSelectButton;