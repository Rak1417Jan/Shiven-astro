import type { KundaliChart } from "@/types/subscriber";

export const mockKundaliChart: KundaliChart = {
  planets: [
    { name: "Sun", sign: "Aquarius", degree: "16°15'", nakshatra: "Dhanishta", house: 1 },
    { name: "Moon", sign: "Taurus", degree: "19°38'", nakshatra: "Rohini", house: 4 },
    { name: "Mars", sign: "Aries", degree: "13°15'", nakshatra: "Bharani", house: 12 },
    { name: "Mercury", sign: "Capricorn", degree: "22°54'", nakshatra: "Dhanishta", house: 11 },
    { name: "Jupiter", sign: "Gemini", degree: "20°00'", nakshatra: "Pushya", house: 3 },
    { name: "Venus", sign: "Capricorn", degree: "16°03'", nakshatra: "Shravana", house: 11 },
    { name: "Saturn", sign: "Leo", degree: "13°37'", nakshatra: "Purva Phalguni", house: 6 },
    { name: "Rahu", sign: "Scorpio", degree: "10°00'", nakshatra: "Anuradha", house: 8 },
    { name: "Ketu", sign: "Taurus", degree: "10°00'", nakshatra: "Rohini", house: 2 },
  ],
  rulingPlanet: "Moon — Moola Nakshatra",
  reportSnippet:
    "Your chart shows a strong emphasis on the 11th house of gains and the 4th house of home. Moon in Taurus in Rohini suggests emotional stability and creativity. Consult an astrologer for a detailed reading.",
};
