
//instead of function cleck , keypress and so on .. we can use function on;

$("h1").on("mouseover",function(){
    $("h1").css("color", "purple");
})

$("h1").on("click",function(){
    $("h1").css("color", "purple");
})
// to create an element we can use functioin before  , or after prepend , append
//without any changes in html 

$("h1").before("<button>New</button>");

$("h2").after("<p> Mariia</p>");

$("h1").prepend("<button>prepend</button>")
$("h1").append("<button>append</button>")
// <h1><button>prepend</button>  Mariia <button>append</button> </h1>


                //Animation with jQuery hide(), show(), toggle()  fadeOut() , fadeIn() fadeToggle() methods


// $("button").on("click", function(){
//     $("h1").hide();
// });


// $("button").on("click", function(){
//     $("h1").show();
// });

// $("button").on("click", function(){
//     $("h1").toggle();
// })


// $("button").on("click", function(){
//     $("h1").fadeOut();
// })

// $("button").on("click", function(){
//     $("h1").fadeIn();
// })

// $("button").on("click", function(){
// $("h1").fadeToggle();
// });


                //slideUp(), slideDown() , slideToggle();

// $("button").on("click", function(){
//     $("h1").slideUp();
// });

// $("button").on("click", function(){
//     $("h1").slideDown();
// });

// $("button").on("click", function(){
//     $("h1").slideToggle();
// });


        //animate()

// $("button").on("click", function(){
//     $("h1").animate({
//         //only css rules  wich has numerical values ; and only  value  inside in animate() function 
//       // opacity: 0.5;
//        margin: "40px"
//     });
// });


        //create a chain of diffent fucntion , which will execute in order
// $("button").on("click", function(){
//     $("h1").slideUp().slideDown().animate({
//         opacity: 0.5
//     });
// });
