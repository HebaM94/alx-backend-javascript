export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  const filterCity = listOfStudents.filter((student) => student.location === city);
  const studentByGrades = filterCity.map((students) => {
    const student = { ...students };
    const grade = newGrades.filter((newGrade) => newGrade.studentId === student.id);
    if (grade.length === 0) student.grade = 'N/A';
    else student.grade = grade[0].grade;
    return student;
  });
  return studentByGrades;
}
