import { useDispatch, useSelector } from "react-redux";
import CreateAccountForm from "./CreateAccountForm/CreateAccountForm";
import { startCreateUserWithEmailAndPassword } from "../../../actions/users";

import bgUrl from "../../../assets/images/bg_account_900x1080.jpg";

function CreateAccount({ history }) {
  const background = {
    backgroundImage: `url(${bgUrl})`,
    backgroundPosition: "center",
    backgroundSize: "cover"
  };
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const onSubmit = (user) => {
    dispatch(startCreateUserWithEmailAndPassword(user));
    history.push("/create-profile");
  };
  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-6" style={background}></div>
        <div className="col-5 signup-form offset-1">
          <CreateAccountForm onSubmit={onSubmit} countries={countries} />
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
