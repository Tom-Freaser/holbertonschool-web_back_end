/* eslint-disable linebreak-style */
const getListStudentIds = (listStudents) => {
  if (Array.isArray(listStudents) === false) {
    return [];
  }

  return listStudents.map((x) => x.id);
};

export default getListStudentIds;
