export const backUrl = "https://healthlabback.herokuapp.com/";
export function userData() {
  return JSON.parse(localStorage.getItem("userData"));
}
export const config = {
  headers: {
    Authorization: `${
      localStorage.length !== 0 ? `Bearer ${userData().token}` : ""
    }`,
  },
};
export const listOfSpecialities = [
  "BloodCount",
  "Genetic",
  "Kidney",
  "Laboratory",
  "Prenatal",
  "Thyroid",
  "Urinalysis",
  "Radiology",
  "Tomography",
];
