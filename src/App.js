import "./App.css";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  return (
    <>
      <main>
        <header>Create account</header>
        <form>
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
            type="password"
            name="password"
            placeholder="IErEaCtEuR2020"
          ></input>
          <span className="title">Confirm Your password</span>
          <input
            type="password"
            name="confirmpassword"
            placeholder="IErEaCtEuR2020"
          ></input>
          <button type="submit" name="register" onClick={() => {}}>
            Register
          </button>
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
