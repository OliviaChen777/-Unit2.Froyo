const userInputString = prompt(" Please enter a list of comma-separated froyo flavors.");

console.log('before processing, ', userInputString);
const stringArray = userInputString.split(",");

for( let i = 0; i < stringArray.length; i++) {
     stringArray[i] = stringArray[i].trimStart();
}

console.log(stringArray);

 let createFlavors = {};
 for( let i = 0; i < stringArray.length; i++ ){
     if (createFlavors[stringArray[i]]) {
          createFlavors[stringArray[i]] = createFlavors[stringArray[i]] + 1;
     }
     
      else {
          createFlavors[stringArray[i]]  = 1;
     }
 }
console.table(createFlavors);


    