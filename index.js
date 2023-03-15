// Write your solution in this file!
const employee = {
    name:"henry",
    streetAddress:"12th"
}

function updateEmployeeWithKeyAndValue(employee, Object, key) {
    const newEmployee = { ...employee };
  
    newEmployee[Object] = key;
  
    return newEmployee;
  }

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, Object, key){
    employee[Object] = key;
    return employee;
  }

  function deleteFromEmployeeByKey(employee, Object, key) {
    const newPerson = {...employee}
    newPerson[Object] =  key;
    delete Object.key;
    return newPerson
  }

function destructivelyDeleteFromEmployeeByKey(employee, Object, key) {
    employee[Object] = key;
    delete Object.key
    return employee;
}