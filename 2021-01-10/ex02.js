let type = "ADD"
let a = [1,2,3,4,5]
let b = [10,20,30,40,50]

a.forEach((num, index) => {
   if(type === "ADD") {
    console.log(num+" 와 "+b[index]+" 더하기")
    return num + b[index]
  }
  else if(type === "SUB") {
    console.log(num+" 와 "+b[index]+" 빼기")
    return num - b[index]
  }
  else if(type === "MUL") {
    console.log(num+" 와 "+b[index]+" 곱하기")
    return num * b[index]
  }
  else {
    console.log(num+" 와 "+b[index]+" 나누기")
    return num / b[index]
  } 
})