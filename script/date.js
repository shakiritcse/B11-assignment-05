const dateElement = document.getElementById("date");
 const options = { weekday: "short", month: "short", day: "2-digit", year: "numeric" };
const today = new Date().toLocaleDateString("en-US",options);
dateElement.innerHTML = today.replace(',','');