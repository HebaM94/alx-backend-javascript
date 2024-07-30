export default function getListStudentsIds(listOfStudents) {
  if (!Array.isArray(listOfStudents)) {
    return [];
  }
  return listOfStudents.map((student) => student.id);
}
