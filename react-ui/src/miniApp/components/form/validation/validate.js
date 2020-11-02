export const validate = (validations, value) => {
  let isValid;

  Object.keys(validations).every((element) => {
    if (typeof validations[element].rule === "function") {
      isValid = validations[element].rule(value);
      if (isValid > 0) {
        return false;
      }
    } else {
      isValid = check(
        {
          name: element,
          value: validations[element],
        },
        value
      );

      if (isValid.length > 0) {
        return false;
      } else {
        return true;
      }
    }
  });

  return isValid;
};

const check = (type, value) => {
  switch (type.name) {
    case "required":
      if (!value || value.trim() === "") {
        return "Bu alan zorunludur";
      } else {
        return "";
      }

    case "custom":
      if (!value.match(type.value)) {
        return `${type.message ? type.message : "error"}`;
      } else {
        return "";
      }
    case "validateType":
      if (type.value === "phone") {
        if (!value.match(/^[6-9]\d{9}$/)) {
          return "Geçerli bir telefon numarası giriniz";
        } else {
          return "";
        }
      } else if (type.value === "email") {
        if (!value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
          return "Geçerli bir mail adresi giriniz";
        } else {
          return "";
        }
      } else {
        return "";
      }

    case "type":
      if (type.value === "text") {
        if (!value.match(/^[a-zA-Z ]+$/)) {
          return "Sadece harf girebilirsiniz";
        } else {
          return "";
        }
      } else if (type.value === "number") {
        if (!value.match(/^[0-9]+$/)) {
          return "Sadece rakam girebilirsiniz";
        } else {
          return "";
        }
      } else {
        return "";
      }

    case "max":
      if (value.length > type.value) {
        return `En fazla ${type.value} karakter girmeniz gerekiyor`;
      } else {
        return "";
      }

    case "min":
      if (value.length < type.value) {
        return `En az ${type.value} karakter girmeniz gerekiyor`;
      } else {
        return "";
      }

    case "upper":
      if (!value.match(/[A-Z]/g)) {
        return `En az 1 büyük harf içermelidir`;
      } else {
        return "";
      }
    case "lower":
      if (!value.match(/[a-z]/g)) {
        return `En az 1 küçük harf içermelidir`;
      } else {
        return "";
      }
    case "digit":
      if (!value.match(/[0-9]/g)) {
        return `En az 1 rakam içermelidir`;
      } else {
        return "";
      }

    case "confirm":
      if (value !== type.value) {
        return `${
          type.message ? type.message : "Şifre tekrarı şifrenizle uyuşmuyor"
        }`;
      } else {
        return "";
      }
    default: {
      return "";
    }
  }
};
