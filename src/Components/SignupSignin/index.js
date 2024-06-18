import React, { useState } from "react";
import "./styles.css";
import Input from "../Input";
import Button from "../Button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../firebase";
function SignupSigninComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function signupWithEmail(e) {
    setLoading(true);
    e.preventDefault();
    console.log("name", name);
    console.log("email", email);
    console.log("password", password);
    console.log("password", confirmPassword);
    //authetication using firebase email and password

    if (
      name != "" &&
      email != "" &&
      (password != "") & (confirmPassword != "")
    ) {
      if (password == confirmPassword) {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log("user", user);
            toast.success("User created successfully");
            setLoading(false);
            setEmail('')
            setName('')
            setPassword('')
            setConfirmPassword('')
            // ...
            createDoc(user)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage);
            setLoading(false)
            // ..
          });
      } else {
        toast.error("Password does not match");
        setLoading(false);
      }
    } else {
      toast.error("All fields are mandetory");
      setLoading(false)
    }
  }
  function signupWithGoogle() {}

  function createDoc(user){

  }
  return (
    <div className="signup-wrapper">
      <h2 className="title">
        Sign Up On <span style={{ color: "var(--theme" }}>Financely.</span>{" "}
      </h2>
      <form className="form">
        <Input
          label="Full Name:"
          type="text"
          placeholder="John Doe"
          state={name}
          setState={setName}
        />
        <Input
          label="Email:"
          type="email"
          placeholder="JohnDoe@gmail.com"
          state={email}
          setState={setEmail}
        />
        <Input
          label="Password:"
          type="password"
          placeholder="Your Password"
          state={password}
          setState={setPassword}
        />
        <Input
          label="Cofirm Password:"
          type="password"
          placeholder="Confirm Password"
          state={confirmPassword}
          setState={setConfirmPassword}
        />
        <div onClick={signupWithEmail}>
          <Button
            text={loading?"Loading...":"Signup with Email and Password"}
            blue={false}
            disabled={loading}
          />
        </div>
        <p style={{ textAlign: "center", margin: "0" }}>or</p>
        <div onClick={signupWithGoogle}>
          <Button text={loading?"Loading...":"Signup with Google"} blue={true} disabled={loading} />
        </div>
      </form>
      <p style={{ textAlign: "center" }}>
        Or Have an accoont already?{" "}
        <span style={{ color: "var(--theme", cursor: "pointer" }}>
          Click Here
        </span>{" "}
      </p>
    </div>
  );
}

export default SignupSigninComponent;
