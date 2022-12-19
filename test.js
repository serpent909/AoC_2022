const flip=(d, a)=>{
    //TODO
    let side = d;
    let numbers = a;
    if (side=="L") {
      numbers.sort((a,b) => a-b);
      
    } else if (side=="R") {
      numbers.sort((a,b) => b-a);
    }
    
    return numbers;
  }


  console.log(flip("R", [3, 2, 1, 2]))
