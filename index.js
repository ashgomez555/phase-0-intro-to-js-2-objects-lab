// Write your solution in this file!
const employee = {
    name:"Zach",
    streetAddress:"Breckenridge",
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {...obj}
    newObj[key] = value
    return newObj

}

const newEmployee = updateEmployeeWithKeyAndValue(
    employee,
    "Corrine",
    "Keystone"
)

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value
    return obj
}

const newEmployeeTwo = destructivelyUpdateEmployeeWithKeyAndValue(employee, "Laura", "Lebanon")


function deleteFromEmployeeByKey(employee, name) {
    const removeEmployee = {...employee}
    delete removeEmployee.name
    return removeEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name
    return employee
}