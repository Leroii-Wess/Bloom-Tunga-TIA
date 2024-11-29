export const formatDateTime = (timestamp) => {
  const date = new Date(timestamp);

  // Get abbreviated day of the week (e.g., "Mon", "Tue")
  const day = date?.toLocaleDateString("en-US", { weekday: "short" });

  // Get the day of the month
  const dayOfMonth = date.getDate();

  // Get time in "h:mm AM/PM" format
  const time = date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  // Combine parts into the desired format
  return `${day} ${dayOfMonth} | ${time}`;
};
