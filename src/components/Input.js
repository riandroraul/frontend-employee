import React from "react";

function Input(props) {
  // console.log(props);
  return (
    <div className="mb-3">
      <label htmlFor="name" className="form-label">
        {props.label}
      </label>
      <input
        type={props.type}
        className={props.className}
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </div>
  );
  /* 
  <input type="text" class="form-control is-valid" id="validationServer02" value="Otto" required>
    <div class="valid-feedback">
      Looks good!
    </div>

     <input type="text" class="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required>
    <div id="validationServer03Feedback" class="invalid-feedback">
      Please provide a valid city.
    </div>
   */
}

export default Input;
