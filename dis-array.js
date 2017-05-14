function steamrollArray(arr) {
  var newArray = [];
arr.map(unBoxer);
  function unBoxer (boxed) {
     if (!Array.isArray (boxed)) {
        newArray.push(boxed);
     } else { 
       for (i = 0; i < boxed.length; i++) {
          unBoxer (boxed[i]);     
         }
    }
  }
   return newArray;  
}
