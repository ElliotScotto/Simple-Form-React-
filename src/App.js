import "./App.css";
import { useState } from "react";
import StepTwo from "./Components/StepTwo";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  return (
    <>
      <main>
        <header>Create account</header>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (password !== confirmpassword) {
              alert("Vos 2 mots de passe ne sont pas identiques");
            } else {
            }
          }}
        >
          <span className="title">Name</span>
          <input type="text" name="name" placeholder="Elliot Scotto"></input>
          <span className="title">Email</span>
          <input
            type="email"
            name="email"
            placeholder="elliot.scotto@gmail.com"
          ></input>
          <span className="title">Password</span>
          <input
            value={password}
            type="password"
            name="password"
            placeholder="IErEaCtEuR2020"
            onChange={(evntpassword) => {
              setPassword(evntpassword.target.value);
            }}
          ></input>
          <span className="title">Confirm Your password</span>
          <input
            value={confirmpassword}
            type="password"
            name="confirmpassword"
            onChange={(evntconfirmpassword) => {
              setConfirmpassword(evntconfirmpassword.target.value);
            }}
          ></input>

          <button type="submit" name="register">
            Register
          </button>
          {/* {evntpassword.target.value} === {evntconfirmpassword.target.value} ?
          {alert("Vos 2 mots de passe correspondent !")} :
          {alert("vos 2 mots de passe ne correspondent pas.")} */}
        </form>
        <footer>
          Made with<span> React </span>at<span> Le Reacteur </span>by
          <span> Elliot</span>
        </footer>
      </main>
    </>
  );
}

export default App;
