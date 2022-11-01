import { configure } from "vee-validate";
// import { localize, setLocale } from "@vee-validate/i18n";
import { localize } from "@vee-validate/i18n";
import en from "@vee-validate/i18n/dist/locale/en.json ";
import ka from "@vee-validate/i18n/dist/locale/ka.json ";

// // If we dont need to write custom messages we would simply configure it like this
// configure({
//   generateMessage: localize({
//     en,
//     ka,
//   }),
// });

// If we want to write Custom Error Messages then we have to overwrite some properties like this:
configure({
  generateMessage: localize({
    en: {
      ...en,
      messages: {
        required: "{field} is required",
        email: "This input is not an email format",
        min: "{field} must have at least 0:{min} symbols",
        max: "{field} must have at most 0:{max} symbols",
        lowercase: "{field} must contain only lowercase characters",
        confirmed: "Passwords does not match",
        alpha: "{field} should only contain characters",
      },
      names: {
        name: "Name",
        password: "Password",
        email: "Email",
        password_confirmation: "Password confirmation",
      },
    },
    ka: {
      ...ka,
      messages: {
        required: "{field} სავალდებულოა",
        email: "გთხოვთ შეიყვანოთ მეილი ვალიდური ფორმატით",
        min: "{field} უნდა შეიცავდეს მინიმუმ 0:{min} სიმბოლოს",
        max: "{field} უნდა შეიცავდეს მაქსიმუმ 0:{max} სიმბოლოს",
        lowercase: "{field} უნდა შეიცავდეს მხოლოდ პატარა ასოებს",
        confirmed: "პაროლები არ ემთხვევა",
        alpha: "{field} უნდა შეიცავდეს მხოლოდ ასოებს",
      },
      names: {
        name: "სახელი",
        password: "პაროლი",
        email: "ელ-ფოსტა",
        password_confirmation: "პაროლის დადასტურება",
      },
    },
  }),
});

// setLocale("ka"); // with this function we can change the locale
