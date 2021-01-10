let option = "ADD"
let a = 1
let b = 3

let calculator = (type, num1, num2,) => {
  if(type === "ADD") {
    console.log(num1+" 와 "+num2+" 더하기")
    return num1 + num2
  }
  else if(type === "SUB") {
    console.log(num1+" 와 "+num2+" 빼기")
    return num1 - num2
  }
  else if(type === "MUL") {
    console.log(num1+" 와 "+num2+" 곱하기")
    return num1 * num2
  }
  else {
    console.log(num1+" 와 "+num2+" 나누기")
    return num1 / num2
  }  
}

let result = calculator(option, a, b)
console.log("결과값: " + result)