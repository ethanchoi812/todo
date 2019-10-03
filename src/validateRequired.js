const validateRequired = field => {
  if (field.validity.valueMissing) {
    let msg = "This field is required!";
    hasError(field, msg);
    return false;
  }

  if (!field.validity.valueMissing) {
    removeError(field);
    return true;
  }
};

const hasError = (field, msg) => {
  field.classList.add("has-error");

  let span = document.createElement("span");
  span.classList.add("error-msg");
  span.innerHTML = msg;

  if (!field.nextElementSibling) {
    field.parentNode.appendChild(span);
  }
};

const removeError = field => {
  let errorMsg = field.parentNode.querySelector(".error-msg");

  if (errorMsg) {
    field.parentNode.removeChild(errorMsg);
  }

  field.classList.remove("has-error");
};

export default validateRequired;
