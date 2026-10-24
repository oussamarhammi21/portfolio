

/**
 * Generic function to format a date string.
 * @param {string} dateStr - The date string to format (e.g., "2024-11-18T18:24:19Z").
 * @param {string} locale - The locale for formatting (e.g., "en-US"). Default is "en-US".
 * @param {Object} options - Formatting options for Intl.DateTimeFormat. Default is long format.
 * @returns {string} - The formatted date string.
 */
export const formatDate = (
  dateStr: string | number | Date,
  locale: string = "en-US",
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }
): string => {
  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) throw new Error("Invalid date");
    return new Intl.DateTimeFormat(locale, options).format(date);
  } catch (error) {
    console.error("Error formatting date:", error);
    return "Invalid date";
  }
};
