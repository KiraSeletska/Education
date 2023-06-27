import { Button } from "./button";
import { Input } from "./input";
import "./index.css";

export const LoginForm = () => {
  return (
    <form className="Form">
      <Input
        placeholder="Login"
        validate={(value) => {
          if (value.length === 0) {
            return false;
          }
          return /^[A-Za-z0-9]+$/.test(value);
        }}
      />
      <Input
        validate={(value) => {
          if (value.length === 0) {
            return false;
          }
          return true;
        }}
        placeholder="Parssword"
        type="password"
      />
      <Button>Submit</Button>
    </form>
  );
};
