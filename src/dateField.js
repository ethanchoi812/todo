import 'flatpickr/dist/flatpickr.min.css';
import flatpickr from "flatpickr";

const dateField = flatpickr("#duedate", {
    disableMobile: true,
    dateFormat: "d/m/Y",
    minDate: new Date()
});

export default dateField;