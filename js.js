var employees =document.querySelector(".emloyees")
var interviews = document.querySelector(".interviews")
var addInterviewModal = document.querySelector("#interviewModal")
var addEmployeeModal = document.querySelector("#employeeModal")
var add_interview = document.querySelector("#add_interview")
var add_employee = document.querySelector("#add_employee")
var confirmBtn = document.getElementById("#confirmBtn")

console.log(interviews)
function addEmployee() {
  let name = document.querySelector("#name").value
  let surname = document.querySelector("#surname").value
  let position = document.querySelector("#position").value
  let department = document.querySelector("#department").value
  let email = document.querySelector("#email").value
  let salary = document.querySelector("#salary").value

  var newEmployee = `
  <li>
    <div class="employee">
      <img src="dd" alt="dd">
      <div class="ids">
          <div class="fullName">
              <strong>${name}</strong>
              <strong>${surname}</strong>                        
          </div>
          <p class="position">`+position+`</p>
          <p class="department">${department}</p>
          <p class="email">${email}</p>
          <p class="salary">${salary}</p>
      </div>
    </div>
  </li>`
  
  employees.insertAdjacentHTML("beforeend", newEmployee)
  addEmployeeModal.style.display = "none"

}

function showEmpModal() {
  addEmployeeModal.style.display = "block"
}
add_employee.addEventListener("click", showEmpModal)
confirmBtn.addEventListener("click", addEmployee)