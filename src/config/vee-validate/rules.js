import { defineRule } from "vee-validate"; // npm install vee-validate --save
import {
  required,
  email,
  min,
  max,
  confirmed,
  alpha,
  numeric,
} from "@vee-validate/rules"; // npm install @vee-validate/rules

defineRule("required", required);
defineRule("email", email);
defineRule("min", min);
defineRule("max", max);
defineRule("confirmed", confirmed);
defineRule("alpha", alpha);
defineRule("numeric", numeric);

defineRule("lowercase", (value) => {
  if (!/^[a-z0-9]+$/.test(value)) {
    return false;
  }
  return true;
});

defineRule("geo", (value) => {
  if (!/^[ა-ჰა-ჰ\s]*$/.test(value)) {
    return false;
  }
  return true;
});

defineRule("eng", (value) => {
  if (!/^[a-zA-Z\s]*$/.test(value)) {
    return false;
  }
  return true;
});

defineRule("geo-textarea", (value) => {
  if (!/^[ა-ჰა-ჰ0-9-_';?!:.,"\s]*$/.test(value)) {
    return false;
  }
  return true;
});

defineRule("eng-textarea", (value) => {
  if (!/^[a-zA-Z0-9-_';?!:.,"\s]*$/.test(value)) {
    return false;
  }
  return true;
});
