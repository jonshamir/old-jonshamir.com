import React from "react";

import "./EmailForm.scss";

import { useState } from "react";

const INIT = "INIT";
const SUBMITTING = "SUBMITTING";
const ERROR = "ERROR";
const SUCCESS = "SUCCESS";
const formStyles = {
  id: "cls6bu7f201hanqcmypl8vqe5",
  formStyle: "inline",
  placeholderText: "your@email.com",
  buttonText: "Sign Up",
  successMessage: "Thanks! You're on the list.",
  userGroup: "",
};
const domain = "app.loops.so";

function EmailForm() {
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState(INIT);
  const [errorMessage, setErrorMessage] = useState("");

  const resetForm = () => {
    setEmail("");
    setFormState(INIT);
    setErrorMessage("");
  };

  /**
   * Rate limit the number of submissions allowed
   * @returns {boolean} true if the form has been successfully submitted in the past minute
   */
  const hasRecentSubmission = () => {
    const time = new Date();
    const timestamp = time.valueOf();
    const previousTimestamp = localStorage.getItem("loops-form-timestamp");

    // Indicate if the last sign up was less than a minute ago
    if (
      previousTimestamp &&
      Number(previousTimestamp) + 60 * 1000 > timestamp
    ) {
      setFormState(ERROR);
      setErrorMessage("Too many signups, please try again in a little while");
      return true;
    }

    localStorage.setItem("loops-form-timestamp", timestamp.toString());
    return false;
  };

  const handleSubmit = (event) => {
    // Prevent the default form submission
    event.preventDefault();

    // boundary conditions for submission
    if (formState !== INIT) return;
    if (!isValidEmail(email)) {
      setFormState(ERROR);
      setErrorMessage("Please enter a valid email");
      return;
    }
    if (hasRecentSubmission()) return;
    setFormState(SUBMITTING);

    // build body
    const formBody = `userGroup=${encodeURIComponent(
      formStyles.userGroup
    )}&email=${encodeURIComponent(email)}`;

    // API request to add user to newsletter
    fetch(`https://${domain}/api/newsletter-form/${formStyles.id}`, {
      method: "POST",
      body: formBody,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((res) => [res.ok, res.json(), res])
      .then(([ok, dataPromise, res]) => {
        if (ok) {
          resetForm();
          setFormState(SUCCESS);
        } else {
          dataPromise.then((data) => {
            setFormState(ERROR);
            setErrorMessage(data.message || res.statusText);
            localStorage.setItem("loops-form-timestamp", "");
          });
        }
      })
      .catch((error) => {
        setFormState(ERROR);
        // check for cloudflare error
        if (error.message === "Failed to fetch") {
          setErrorMessage(
            "Too many signups, please try again in a little while"
          );
        } else if (error.message) {
          setErrorMessage(error.message);
        }
        localStorage.setItem("loops-form-timestamp", "");
      });
  };

  const isInline = formStyles.formStyle === "inline";

  switch (formState) {
    case SUCCESS:
      return (
        <div className="EmailForm section">
          <p>{formStyles.successMessage}</p>
        </div>
      );
    case ERROR:
      return (
        <div className="EmailForm section">
          <SignUpFormError />
          <BackButton />
        </div>
      );
    default:
      return (
        <div className="EmailForm section">
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: isInline ? "row" : "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <input
              type="text"
              name="email"
              placeholder={formStyles.placeholderText}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={true}
            />
            <SignUpFormButton />
          </form>
        </div>
      );
  }

  function SignUpFormError() {
    return (
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            color: "rgb(185, 28, 28)",
            fontSize: "14px",
          }}
        >
          {errorMessage || "Oops! Something went wrong, please try again"}
        </p>
      </div>
    );
  }

  function BackButton() {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <button
        style={{
          color: "#6b7280",
          font: "14px, Inter, sans-serif",
          margin: "10px auto",
          textAlign: "center",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textDecoration: isHovered ? "underline" : "none",
        }}
        onMouseOut={() => setIsHovered(false)}
        onMouseOver={() => setIsHovered(true)}
        onClick={resetForm}
      >
        &larr; Back
      </button>
    );
  }

  function SignUpFormButton({ props }) {
    return (
      <button type="submit">
        {formState === SUBMITTING ? "Please wait..." : formStyles.buttonText}
      </button>
    );
  }
}

function isValidEmail(email) {
  return /.+@.+/.test(email);
}

export default EmailForm;
