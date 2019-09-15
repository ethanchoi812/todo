import flatpickr from "flatpickr";
import css from "flatpickr/dist/flatpickr.min.css";

const dateField = flatpickr("#duedate", {
  disableMobile: true,
  dateFormat: "d/m/Y",
  minDate: new Date()
});

export default dateField;
