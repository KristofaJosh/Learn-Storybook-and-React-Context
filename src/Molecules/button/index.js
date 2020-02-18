import React from "react";
import Button from "../../Atoms/button";

const App = () => {
  return (
    <form>
      <label>
        name:
        <input />
      </label>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};
export default App;
