export function formatCityList(timeZones) {
  return timeZones.map((timeZone) => {
    if (timeZone.includes("/")) {
      const [region, city] = timeZone.split("/");
      // Return in the format "city, region"
      return `${city.replace(/_/g, " ")}, ${region}`;
    }
    // For time zones without a slash, just return the time zone as is
    return timeZone;
  });
}
