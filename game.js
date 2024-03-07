let holder = document.querySelector(".cardholder").children;
let rows  = document.querySelectorAll('.row');
let cards = document.querySelectorAll('.card');
let clicked = 0;
let correct = 0;
let tooglelist =[];
let rowchild,cardchild;
const map1 = new Map();
let checkmap = [];
const images = ["./images/image1.JPG","./images/image2.JPG","./images/image3.JPG","./images/image4.jpg","./images/image5.jpg","./images/image6.jpg"]
let cardback = document.querySelectorAll(".card-back");
let varr = document.getElementById('page');


function reloadpage(){
    for(const img of images){
        map1.set(img,0);
    };

    Array.from(cardback).forEach((back) => {
        while(!back.style.backgroundImage)
        {
            let ran = getrandom()
            if(map1.get(images[ran]) < 2)
            {
                back.style.backgroundImage = 'url('+ images[ran] +')';
                map1.set( images[ran] , map1.get(images[ran])+1 );
                break;
            }
        }

    });
};
function getrandom(){
    return Math.round(Math.random() * 6);
}

function rotatecard(x,y){
    clicked ++;
    switch(x){
        case 0:
            rowchild = holder.item(x).children; 
            cardchild =  rowchild.item(y-1)
            cardchild.classList.toggle('is-flipped');
            tooglelist.push(cardchild);
            let checkimage = cardchild.children.item(1).style.backgroundImage;
            checkmap.push(checkimage);
            console.log(checkimage);
            break;

        case 1:

            rowchild = holder.item(x).children; 
            cardchild =  rowchild.item(y-1)
            cardchild.classList.toggle('is-flipped');
            tooglelist.push(cardchild);
            let checkimage1 = cardchild.children.item(1).style.backgroundImage;
            checkmap.push(checkimage1);
            console.log(checkimage1);
            break;

        case 2:


            rowchild = holder.item(x).children; 
            cardchild =  rowchild.item(y-1)
            cardchild.classList.toggle('is-flipped');
            tooglelist.push(cardchild);
            let checkimage2= cardchild.children.item(1).style.backgroundImage;
            checkmap.push(checkimage2);
            console.log(checkimage2);
            break;
    }

    if(clicked == 2)
    {
        check();
        clicked = 0;
    }
}

function check(){
    let i =0;
    if (checkmap[i] !== checkmap[i+1])
    {
        var delayInMilliseconds = 500; //1 second
        setTimeout(function() {
            for(let i =0 ; i< tooglelist.length; i++)
            {
                tooglelist[i].classList.toggle('is-flipped');
            }
            tooglelist = [];
            checkmap=[];
            correct =0;
        }, delayInMilliseconds);
        
    }
    else{
        correct++;
        checkmap = [];
    }

    if(correct == 6)
    {
        setTimeout(function(){
            varr.style.zIndex = "999";
            varr.style.opacity = "1";
            varr.style.animation = "comefor 1s ease-in";
            let char  = varr.children.item(0).children;
            Array.from(char).forEach(char => {
                setTimeout(function(){
                    char.style.animation = "characters 2s ease-in infinite";
                },1000);
                
            });
        },2000);
    }
}

reloadpage();
