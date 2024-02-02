/* eslint-disable linebreak-style */
import getListStudentIds from './1-get_list_student_ids';

const getStudentIdsSum = (listOfStudents) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const studentsIds = getListStudentIds(listOfStudents);

  return studentsIds.reduce(reducer);
};

export default getStudentIdsSum;