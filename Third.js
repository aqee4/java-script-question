//////////////////////Third Question//////////////////////////////

function calculatTriangle(side1,side2,side3){
     const sum=(side1+side2+side3)/2
    //Calculate the area of using formula
    const area= Math.sqrt(sum*(sum-side1)*(sum-side2)*(sum-side3))
    return area;
}
const side1=5;
const side2=6;
const side3=7;
  const area=calculatTriangle(side1,side2,side3)
console.log('The Area of the triangle' + area);  

