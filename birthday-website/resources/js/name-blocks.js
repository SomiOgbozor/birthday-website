var hexaDemo5,
    set = [
        {
            value: 'H',
            style: {
                backgroundColor: '#E0ACD5'
            }
        },
        {
            value: 'I',
            style: {
                backgroundColor: '#223843'
            }
        },
        {
            value: 'S',
            style: {
                backgroundColor: '#E0ACD5'
            }
        },
        {
            value: 'C',
            style: {
                backgroundColor: '#223843'
            }
        },
        {
            value: 'M',
            style: {
                backgroundColor: '#E0ACD5'
            }
        },
        {
            value: 'O',
            style: {
                backgroundColor: '#223843'
            }
        },
    ];
document.addEventListener('DOMContentLoaded', function(){
    var submit = document.getElementById('submit'),
    hexaDemo5 = new HexaFlip(document.getElementById('hexaflip-demo5'),
        {set1: set, set2: set, set3: set, set4: set, set5: set, set6: set},
        {fontSize: 50, margin: 4, perspective: 1000}
    );
    submit.addEventListener('click', function(){
        if(hexaDemo5.getValue().join('') === 'CHISOM'){
            document.getElementById("section-1").style.backgroundColor = "#81F495";
            hexaDemo5.flip();
            hexaDemo5.flip();
            hexaDemo5.flip();
            hexaDemo5.flip();
            // hexaDemo5.flip();
            // hexaDemo5.flip();
            // hexaDemo5.flip();
            // hexaDemo5.flip();
            $(document).ready(function() {
                setTimeout(function(){ $.fn.pagepiling.moveSectionDown(); }, 1000);
                // setTimeout(function(){ showSlidingImages(); }, 2000);
                // $.fn.pagepiling.moveSectionDown();
            });

        }else{
            document.getElementById("section-1").style.backgroundColor = "#C52233";
            setTimeout(function(){ revertBackgroundColor(); }, 1000);
        }
    }, false);
}, false);

document.getElementById('submit-2').addEventListener('click', function(){
    $.fn.pagepiling.moveSectionDown();
    setTimeout(function(){ revealImage('#left-img-2'); }, 1000);
    setTimeout(function(){ revealImage('#right-img-2'); }, 2000);
});

document.getElementById('submit-3').addEventListener('click', function(){
    $.fn.pagepiling.moveSectionDown();
    setTimeout(function(){ revealImage('#left-img-5'); }, 1000);
    setTimeout(function(){ revealImage('#right-img-5'); }, 2000);
});
document.getElementById('submit-4').addEventListener('click', function(){
    $.fn.pagepiling.moveSectionDown();
    setTimeout(function(){ revealImage('#left-img-3'); }, 1000);
    setTimeout(function(){ revealImage('#right-img-3'); }, 2000);
});
document.getElementById('submit-5').addEventListener('click', function(){
    $.fn.pagepiling.moveSectionDown();
    setTimeout(function(){ revealImage('#left-img-4'); }, 1000);
    setTimeout(function(){ revealImage('#right-img-4'); }, 2000);
});
document.getElementById('submit-6').addEventListener('click', function(){
    $.fn.pagepiling.moveSectionDown();
    setTimeout(function(){ revealImage('#left-img-6'); }, 1000);
    setTimeout(function(){ revealImage('#right-img-6'); }, 2000);
});
document.getElementById('submit-7').addEventListener('click', function(){
    $.fn.pagepiling.moveSectionDown();
    setTimeout(function(){ revealImage('#center-img'); }, 1000);
});
document.getElementById('submit-8').addEventListener('click', function(){
    $.fn.pagepiling.moveSectionDown();
})

document.getElementById('section-1').addEventListener('click', function(){
    var audio = document.getElementById("player");
    audio.play();
});


function showSlidingImages() {
  document.getElementById("section-2").style.opacity = "1";
}
function revertBackgroundColor(){
    document.getElementById("section-1").style.backgroundColor = "#00A1E4";
}
function revealImage(id){
    $(id).css('opacity', 1);
}
function shuffleArray(arra1) {
    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}
