import React from "react";
import Button from "@material-ui/core/Button";

function RegistrationForm() {
  return (
    <form>
      <label>Name</label>
      <input type="text" />

      <label>Last Name</label>
      <input type="text" />

      <label>CPF</label>
      <input type="text" />

      <label>Promotions</label>
      <input type="checkbox" />

      <label>Newsletter</label>
      <input type="checkbox" />

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}

export default RegistrationForm;
