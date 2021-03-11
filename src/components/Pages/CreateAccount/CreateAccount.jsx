import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startCreateUserWithEmailAndPassword } from "../../../actions/currentUser";
import { startGetCountries } from '../../../actions/countries';
import CreateAccountForm from "./CreateAccountForm/CreateAccountForm";
import bgUrl from "../../../assets/images/bg_account_900x1080.jpg";

function CreateAccount({ history }) {
  const background = {
    backgroundImage: `url(${bgUrl})`,
    backgroundPosition: "center",
    backgroundSize: "cover"
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startGetCountries());
  }, [])
  const countries = useSelector((state) => state.countries);
  const onSubmit = (user) => {
    dispatch(startCreateUserWithEmailAndPassword(user));
    history.push("/create-profile");
  };
  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center form-border">
        <div className="col-6">
          <CreateAccountForm onSubmit={onSubmit} countries={countries} />
        </div>
        <div className="col-5 offset-1" style={background}></div>
      </div>
    </div>
  );
}

export default CreateAccount;
