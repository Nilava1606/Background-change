const button=document.querySelectorAll('.colours')
const body=document.querySelector('body')
button.forEach(function(colours) {
    console.log(colours);
    colours.addEventListener('click',function(e){
        console.log(e.target)
        if(e.target.id==='grey'){
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==='yellow'){
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==='green'){
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==='pink'){
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==='white'){
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==='black'){
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==='violet'){
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==='orange'){
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==='blue'){
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==='cyan'){
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==='indigo'){
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==='orange'){
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==='purple'){
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==='lime'){
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==='red'){
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==='green'){
            body.style.backgroundColor=e.target.id;
        }

    })
    });