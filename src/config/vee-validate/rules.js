import { defineRule } from "vee-validate"; // npm install vee-validate --save
import {
  required,
  email,
  min,
  max,
  confirmed,
  alpha,
} from "@vee-validate/rules"; // npm install @vee-validate/rules

defineRule("required", required);
defineRule("email", email);
defineRule("min", min);
defineRule("max", max);
defineRule("confirmed", confirmed);
defineRule("alpha", alpha);

defineRule("lowercase", (value) => {
  if (!/^[a-z]+$/.test(value)) {
    return false;
  }
  return true;
});
