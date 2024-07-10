import Employee from "../assets/employee.json";
import Store from "../provider/store";

export const EmployeeSearchSuggestion = async (content) => {
    const result = [];
    const normalize = (str) => str?.toLowerCase();
    const isSubstring = (label, val) => normalize(label).includes(normalize(val));

    if (content && content.type) {
        if (content.type === 'role') {
            Employee.designation.forEach(ele => {
                if (content.value === "" || isSubstring(ele.label, content.value)) {
                    result.push({ label: ele.label, value: ele.value });
                }
            });
        } else if (content.type === 'status') {
            Employee.status.forEach(ele => {
                if (content.value === "" || isSubstring(ele.label, content.value)) {
                    result.push({ label: ele.label, value: ele.value });
                }
            });
        } else if (content.type === 'reporting_to' || content.type === 'emp_name') {
            const employeeList = Store.getState().Company.employee_list;
            employeeList.forEach(ele => {
                if (content.value === "" || isSubstring(ele.label, content.value)) {
                    const value = content.type === 'reporting_to' ? ele.ref : ele.label;
                    result.push({ label: ele.label, value });
                }
            });
        }
    }

    return result;
};
