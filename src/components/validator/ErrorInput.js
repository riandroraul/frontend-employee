import React from "react";

const ErrorInput = ({ errors }) => {
  console.log(errors);
  if (errors[0].msg > 0) {
    return (
      <div id="validationServer03Feedback" class="invalid-feedback">
        Please provide a valid city.
      </div>
    );
  } else {
    return (
      <div id="validationServer03Feedback" class="is-valid">
        Please provide a valid city.
      </div>
    );
  }
};

export default ErrorInput;
