import Employee from "../assets/employee.json";
import Store from "../provider/store";

export const EmployeeSearchSuggestion = async (content) => {
    const result = [];

    if (content.val && content.type) {
        const normalize = (str) => str.toLowerCase();

        const isSubstring = (label, val) => {
            const normalizedLabel = normalize(label);
            const normalizedVal = normalize(val);
            return normalizedLabel.includes(normalizedVal);
        };

        if (content?.type === 'role') {
            Employee.designation.forEach(ele => {
                if (isSubstring(ele.label, content.val)) {
                    result.push({ label: ele.label, value: ele.value });
                }
            });
        } else if (content?.type === 'status') {
            Employee.status.forEach(ele => {
                if (isSubstring(ele.label, content.val)) {
                    result.push({ label: ele.label, value: ele.value });
                }
            });
        }
        else if (content?.type === 'emp_name' || content?.type === 'reporting_to') {
            const employeeList = Store.getState().Company.employee_list;
            employeeList.forEach(ele => {
                if (isSubstring(ele.label, content.val)) {
                    result.push({ label: ele.label, value: ele.label });
                }
            });
        }
    }

    return result;
};
