import cityCountryMapping from "./cityCountryMapping";
function getRegionFromCityCountry(cityCountry) {
  // Iterar sobre las claves del objeto countryMapping
  for (const [region, cityCountryValue] of Object.entries(cityCountryMapping)) {
    // Si el valor coincide con "ciudad, país", retorna la clave (que es la región)
    if (cityCountryValue === cityCountry) {
      return region;
    }
  }
  // Si no se encuentra, devuelve un valor indicativo o null
  return null;
}
function getRegionsFromCityCountryArray(cityCountryArray) {
  return cityCountryArray.map((cityCountry) => {
    // Iterar sobre las claves del objeto countryMapping
    for (const [region, cityCountryValue] of Object.entries(
      cityCountryMapping
    )) {
      // Si el valor coincide con "ciudad, país", retorna la clave (que es la región)
      if (cityCountryValue === cityCountry) {
        return region;
      }
    }
    // Si no se encuentra, devolver null para esa ciudad
    return null;
  });
}
export { getRegionFromCityCountry, getRegionsFromCityCountryArray };
