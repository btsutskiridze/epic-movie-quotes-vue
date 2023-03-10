import i18n from "@/i18n";

export const setRegisterApiError = (field, actions) => {
  if (i18n.global.locale == "en") {
    switch (field) {
      case "name":
        actions.setFieldError("name", "Name is already taken");
        break;
      case "email":
        actions.setFieldError("email", "Email is already taken");
        break;
    }
  } else {
    switch (field) {
      case "name":
        actions.setFieldError("name", "მომხმარებლის სახელი უკვე არსებობს");
        break;
      case "email":
        actions.setFieldError("email", "ელ-ფოსტა უკვე არსებობს");
        break;
    }
  }
};

export const setLoginApiError = (field, actions) => {
  if (i18n.global.locale == "en") {
    switch (field) {
      case "name":
        actions.setFieldError("email", "Name does not exist");
        break;
      case "email":
        actions.setFieldError("email", "Email does not exist");
        break;
      case "password":
        actions.setFieldError("password", "Password is incorrect");
        break;
      case "verification":
        actions.setFieldError("email", "Email is not verified");
        break;
    }
  } else {
    switch (field) {
      case "name":
        actions.setFieldError("email", "სახელი არ არსებობს");
        break;
      case "email":
        actions.setFieldError("email", "ელ-ფოსტა არ არსებობს");
        break;
      case "password":
        actions.setFieldError("password", "პაროლი არასწორია");
        break;
      case "verification":
        actions.setFieldError("email", "ელ-ფოსტა არ არის გააქტიურებული");
        break;
    }
  }
};

export const setResetPasswordError = (field, actions) => {
  if (i18n.global.locale == "en") {
    switch (field) {
      case "email":
        actions.setFieldError("email", "Email does not exist");
        break;
    }
  } else {
    switch (field) {
      case "email":
        actions.setFieldError("email", "ელ-ფოსტა არ არსებობს");
        break;
    }
  }
};
