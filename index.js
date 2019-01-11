
function checkTriangleType(sideA, sideB, sideC) {
  if (sideA == undefined || sideB == undefined || sideC == undefined) {
      throw new Error("Error with the input parameters.");
  }

  checkInputValues(...arguments);

  if(sideA === sideB && sideA === sideC) {
    console.log("You form a equilateral");
  }

  else if(sideA === sideB || sideA === sideC || sideB === sideC) {
    console.log("You form a Isosceles");
  }

  else console.log("You form a Scalene");
}

function checkInputValues(sideA, sideB, sideC){
  const args = [...arguments];
  if(args.length !== 3) {
      throw new Error("Error: The number of parameters should be 3");
  }

  if(isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
      throw new Error("Error: Parameters should be numbers.");
  }

  if(args.find(item => item < 0)) {
      throw new Error("Error: The sides values should be positives and greater than 0.");
  }

  if(sideA + sideB < sideC || sideA + sideC < sideB || sideB + sideC < sideA) {
    throw new Error("Error: The input values can't form a triangle.");
  }

}

checkTriangleType(31,30,32);
