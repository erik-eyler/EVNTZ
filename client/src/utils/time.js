export const reformatTime = (timeStr) => {
  let hours = timeStr.split(":");
  let hourInt = parseInt(hours[0], 10);
  if (hourInt > 12) {
    hourInt = hourInt - 12;
    let newHour = hourInt.toString();
    hours[0] = newHour;
    let formattedTime = hours.join(":") + " PM";
    return formattedTime;
  } else {
    return timeStr + " AM";
  }
};
