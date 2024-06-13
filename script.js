const moves=document.getElementById('move');
var images=document.querySelectorAll('img');
let start=0

function move(){
    start++;
    if(start >images.length){
        start=0
    }
    moves.style.transform=`translateX(${-start*80}%)`
}
setInterval(move,2000);

/*
int a=10,b=20;
        System.out.println("The value of a+b is "+a+ " "+b);

        a=a+b;//10+20
        b=a-b;//30-20
        a=a-b;//30-10

        System.out.println("The value of a+b is "+a+ " "+b);
*/