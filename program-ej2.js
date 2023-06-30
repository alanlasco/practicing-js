let int = parseInt(prompt("Write an integer"));
if(Number.isInteger(int) && int !== 0){
    console.log(int);
    for(let i=1; i<= int; i++){
        if(int % i === 0){
            console.log(i+', ');
        }
    }
}
else    
    if(int === 0)
        console.log('write a number higher than 0: ');
    else
    console.log('is not a number');