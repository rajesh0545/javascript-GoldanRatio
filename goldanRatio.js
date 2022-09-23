
function GoldenRatio(num1,num2){
    let addition=num1+num2;
    if(num1>num2){
      let value1=parseInt(num1 % num2);
      
      let value2=parseInt(addition%num1);
      if(value1==value2){
        console.log('this number is a golden ratio number')
      }
      else{
        console.log('not a goldenration number')
      }
    }
  
  if(num2>num1){
    let value3=parseInt(num2 % num1);
    
    let value4=parseInt(addition%num2);
    if(value3==value4){
      console.log('this number is a golden ratio number')
    }
    else{
      console.log('not a goldenration number')
    }
  }
}
  GoldenRatio(1,0.618);


 