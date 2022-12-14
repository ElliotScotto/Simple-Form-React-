import "./App.css";
import { useState } from "react";
import StepTwo from "./Components/StepTwo";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  return (
    <>
      <main>
        {isValid ? (
          <StepTwo name={name} email={email} password={password} />
        ) : (
          <>
            <header>Create account</header>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                if (password !== confirmPassword) {
                  alert("Vos 2 mots de passe ne sont pas identiques");
                } else {
                  // affiche stepTwo
                  setIsValid(true);
                }
              }}
            >
              <span className="title">Name</span>
              <input
                value={name}
                type="text"
                name="name"
                placeholder="Elliot Scotto"
                onChange={(evntmail) => {
                  setName(evntmail.target.value);
                }}
              ></input>
              <span className="title">Email</span>
              <input
                value={email}
                type="email"
                name="email"
                placeholder="elliot.scotto@gmail.com"
                onChange={(evntmail) => {
                  setEmail(evntmail.target.value);
                }}
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
                value={confirmPassword}
                type="password"
                name="confirmpassword"
                onChange={(evntconfirmPassword) => {
                  setConfirmPassword(evntconfirmPassword.target.value);
                }}
              ></input>

              <button type="submit" name="register">
                Register
              </button>
            </form>
          </>
        )}

        <footer>
          Made with<span> React </span>at<span> Le Reacteur </span>by
          <span> Elliot</span>
        </footer>
      </main>
    </>
  );
}

export default App;
