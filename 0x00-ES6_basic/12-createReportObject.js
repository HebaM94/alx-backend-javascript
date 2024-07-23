export default function createReportObject(employeesList) {
  const reportObj = {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments() {
      return Object.keys(employeesList).length;
    },
  };
  return reportObj;
}
