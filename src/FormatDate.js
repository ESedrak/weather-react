export default function FormateDate(props) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    return `0{hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    return `0{minutes}`;
  }
  return `${day}, ${hours}:${minutes}`;
}
