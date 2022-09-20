console.log("TypeScript Exercise 1")

console.log("Item number 1")

interface City {
  city:string;
  country:string;
  population: number;
  fly?: () => number;
}

var cityList:City [] = [];
export const addPlace = (city:string, country:string, population:number) =>{
  var newCity:City = {city:city, country:country, population:population}
  cityList.push(newCity)
  displayCities(cityList)
}

export const displayCities = (checkList: City[]) => {
  let list = document.getElementById('cityList')
  if(list){
    while(list.hasChildNodes() && list.firstChild){
      list.removeChild(list.firstChild)
    }
  }
  cityList.forEach((city) => {
  let li = document.createElement("li");
  li.innerText = city.city + "," + city.country + "," + city.population
  list?.appendChild(li);
})
}

console.log("Item number 2")
function validISBN10(num: number|string|any) {
    if (num.length !== 10) {
        return false;
    }
    
    if (num[num.length-1] === 'X' ) {
        return true;
    }

    let index = 0;
    let sum = 0;
    for (let index = 0; index < num.length; index++) {
      sum += parseInt(num[index]) * (index+1);
    }
    return sum % 11 === 0;
  }
    let num1 = "1112223339";
    let num2 = "111222333";
    let num3 = "1112223339X"
    let num4 = "1234554321";
    let num5 = "1234512345";
    let num6 = "048665088X";
    let num7 = "X123456788";
    console.log("Input:  " + num1 + " -> " + validISBN10(num1));
    console.log("Input:  " + num2 + " -> " + validISBN10(num2));
    console.log("Input:  " + num3 + " -> " + validISBN10(num3));
    console.log("Input:  " + num4 + " -> " + validISBN10(num4));
    console.log("Input:  " + num5 + " -> " + validISBN10(num5));
    console.log("Input:  " + num6 + " -> " + validISBN10(num6));
    console.log("Input:  " + num7 + " -> " + validISBN10(num7));



console.log("Item number 4")
var moveThezero = function (arr: (string | number | boolean)[]) {
    let count = 0;
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] !== 0) {
        arr[count++] = arr[index];
      }
    }
    for (let i = count; i < arr.length; i++) {
      arr[i] = 0;
    }
    return arr;
  };
  let a = ['abc', 1, 2 , 3 , 0, 9, 0 , false, 'Camille']
  let b = [0, true, 'spring' , 9 , 0, false, 0 , false, 'Joy']
  console.log("Original array:  " + a)
  console.log("Modified array:  " + moveThezero(a));
  console.log("Original array:  " + b)
  console.log("Modified array:  " + moveThezero(b));

  




