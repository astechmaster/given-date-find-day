function getDayOfWeek() {
  const date = document.getElementById("input").value;
  const daysDayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = new Date(date).getDay();
  document.getElementById("result").innerHTML = daysDayOfWeek[day];
}
