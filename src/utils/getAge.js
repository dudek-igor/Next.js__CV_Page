const getAge = (birthday) => {
  const ageDiffMs = new Date() - new Date(birthday).getTime();
  const ageDate = new Date(ageDiffMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};
export default getAge;
