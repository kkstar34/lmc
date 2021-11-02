//small images en full images

function myFunction(smallImg)
{
    var fullImg = document.getElementById ("imageBox");
    fullImg.src = smallImg.src;
}



$(document).ready(function () {

    $(".filter").on("click",()=>{
    
        $(".left--part").css({
            left:"0%"
        })
    })


    
    $(".left--part__sortie").on("click",()=>{
        
        $(".left--part").css({
            left:"-100%"
        })
    })
    
})

// ******************

$(document).ready(function () {

    $(".basket").on("click",()=>{
    
        $(".basket--responsive").css({
            right:"0%"
        })
    })


    
    $(".basket--sortie").on("click",()=>{
        
        $(".basket--responsive").css({
            right:"-100%"
        })
    })
    
})


$(document).ready(function () {

    $(".navigation--top__items--responsivesearch").on("click",()=>{
    
        $(".navigation--top__shop").css({
            right:"0%"
        })
    })


    
    $(".navigation--top__shop--i").on("click",()=>{
        
        $(".navigation--top__shop").css({
            right:"-100%"
        })
    })
    
})


$(document).ready(function () {

    $(".navigation--top__items--responsivebars").on("click",()=>{
    
        $(".navigation--bottom").css({
            right:"0%"
        })
    })


    
    $(".navigation--bottom__sortie").on("click",()=>{
        
        $(".navigation--bottom").css({
            right:"-100%"
        })
    })
    
})



/***** onglet */
const onglets = document.querySelectorAll('.onglets');
const onglet = document.querySelectorAll('.onglet');
const contenu = document.querySelectorAll('.contenu');
const contenus = document.querySelectorAll('.contenuO2');
let index = 0;

onglets.forEach(onglet => {

    onglet.addEventListener('click', () => {

        if(onglet.classList.contains('active-onglet')){
            return;
        } else {
            onglet.classList.add('active-onglet');
        }

        index = onglet.getAttribute('data-anim');
        console.log(index);
        
        for(i = 0; i < onglets.length; i++) {

            if(onglets[i].getAttribute('data-anim') != index) {
                onglets[i].classList.remove('active-onglet');
            }

        }

        for(j = 0; j < contenu.length; j++){

            if(contenu[j].getAttribute('data-anim') == index) {
                contenu[j].classList.add('activeContenu');
            } else {
                contenu[j].classList.remove('activeContenu');
            }
            

        }


    })

})

onglet.forEach(onglets => {

    onglets.addEventListener('click', () => {

        if (onglets.classList.contains('active-onglet')) {
            return;
        } else {
            onglets.classList.add('active-onglet');
        }

        index = onglets.getAttribute('data-anim');
        console.log(index);

        for (i = 0; i < onglet.length; i++) {

            if (onglet[i].getAttribute('data-anim') != index) {
                onglet[i].classList.remove('active-onglet');
            }

        }

        for (j = 0; j < contenu.length; j++) {

            if (contenus[j].getAttribute('data-anim') == index) {
                contenus[j].classList.add('activeContenu');
            } else {
                contenus[j].classList.remove('activeContenu');
            }


        }


    })

});

$(document).ready(function(){
    $('.first--box__file input').change(function () {
      $('.first--box__file p').text(this.files.length + " file(s) selected");
    });
  });

// loader
let time = setInterval(() => {
    if (document.readyState == "complete") {
        $(".preloader").hide();
        clearInterval;
    }
}, 3000)
