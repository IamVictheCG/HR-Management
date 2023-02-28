var employees =document.querySelector(".employees")
var interviews = document.querySelector(".interviews")
var addInterviewModal = document.querySelector("#interviewModal")
var addEmployeeModal = document.querySelector("#employeeModal")
var add_interview = document.querySelector("#add_int")
var add_employee = document.querySelector("#add_employee")
var confirmBtn = document.getElementById("confirmBtn")
var confirmIntBtn = document.getElementById("confirmIntBtn")

// console.log(interviews)
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

function addInterview() {
  let intPosition = document.querySelector("#int_position").value
  let intDepartment = document.querySelector("#int_department")
  // var confirmIntBtn = document.getElementById("#confirmIntBtn")
  
  var newInterview = `
  <li>
  <div class="interview">
  <strong>${intDepartment.value}</strong>
  <p>${intPosition}</p>
  <div class="buttons">
  <button type="button" class="accept" id="accept1">Accept</button>
  <button type="button" class="postpone" id="postpone1">Postpone</button>
  <button type="button" class="reject" id="reject1">Reject</button>
  </div>
  </div>
  </li>`
  console.log(newInterview)
      
  interviews.insertAdjacentHTML("beforeend", newInterview)
  addInterviewModal.style.display = "none"

}
    
function showIntModal() {
  addInterviewModal.style.display = "block"
}

function showEmpModal() {
  addEmployeeModal.style.display = "block"
}


add_employee.addEventListener("click", showEmpModal)
add_interview.addEventListener("click", showIntModal)
//=================================================================
confirmBtn.addEventListener("click", addEmployee)
confirmIntBtn.addEventListener("click", addInterview)