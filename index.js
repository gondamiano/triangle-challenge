import Errors from './Messages/Errors';
import TriangleTypes from './Messages/TriangleTypes';

 export default function checkTriangleType(sideA, sideB, sideC) {
  if (sideA == undefined || sideB == undefined || sideC == undefined) {
      throw new Error(Errors.nullOrUndefined);
  }
  checkInputValues(...arguments);

  if(sideA === sideB && sideA === sideC) {
    console.log(`You formed a ${TriangleTypes.equilateral} triangle`);
  }

  else if(sideA === sideB || sideA === sideC || sideB === sideC) {
    console.log(`You formed a ${TriangleTypes.Isosceles} triangle`);
  }

  else console.log(`You formed a ${TriangleTypes.Scalene} triangle`);
}

function checkInputValues(sideA, sideB, sideC){
  const args = [...arguments];
  if(args.length !== 3) {
      throw new Error(Errors.parametersLength);
  }

  if(!args.every(item => typeof item === "number" && Number.isFinite(item))) {
      throw new Error(Errors.argumentsType);
  }

  if(args.find(item => item < 0)) {
      throw new Error(Errors.negativeOrZeroValues);
  }

  if(sideA + sideB < sideC || sideA + sideC < sideB || sideB + sideC < sideA) {
    throw new Error(Errors.unabledToFormTriangle);
  }
}
