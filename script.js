const btnEl = document.querySelector("#btn")
const birthdayEl = document.querySelector("#birthday")
const resultEl = document.querySelector("#result")

function calculateAge(){
    const birthdayValue = birthdayEl.value
    if (birthdayValue === "") {
        alert("Please enter your birthday")
    }else{
        const age = getAge(birthdayValue)
        resultEl.textContent = `Your current age is ${age} ${age > 1 ? "years":"year"} years old.`
    }
}

function getAge(birthdayValue){
    const currentDate = new Date()
    const birthDate = new Date(birthdayValue)
    let age = currentDate.getFullYear() - birthDate.getFullYear()
    const month = currentDate.getMonth() - birthDate.getMonth()

    if (month < 0 || month == 0 && currentDate.getDate() < birthDate.getDate()) {
        age--
    }
    return age
}

btnEl.addEventListener('click', calculateAge)
