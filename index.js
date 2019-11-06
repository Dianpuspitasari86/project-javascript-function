function logName(name){
    console.log(`Hello, ${name}`)
}

const nameA = 'Dian Puspita Sari'
const nameB = 'Impact Byte Komodo'

logName(nameA)
logName(nameB)

const checkAge = function(age){
    if (age >= 21) {
        console.log('You are old enough')
    }
    else if (age < 21 && age >= 0){
        console.log('You are still young')
    }
    else {
        console.log('You are not born yet')
    }
}

checkAge(15)
checkAge(30)
checkAge(-1)

const addMarks = (text, mark, times) => {
    let newText = text

    for(let i = 0; i <= times; i++){
        newText += mark
    }
    console.log(newText)
}

addMarks('Hello', '!', 1)
addMarks('Hello', '!', 3)
addMarks('How are you', '?', 1)
addMarks('How are you', '?', 2)

const showNameWithAge = (name = 'Unknown', age = 0) => {
    const nameWithAge = `${name} is ${age} year(s) old`

    return nameWithAge 
}

const Dian = showNameWithAge('Dian', 33)
const Roby = showNameWithAge('Roby', 33)
const Itang = showNameWithAge('Itang', 25)

console.log(Dian)
console.log(Roby)
console.log(Itang)
