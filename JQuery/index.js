// $(document).ready(function(){
//     $("h1").css("color", "red");
// })

// $("h1").css("color", "red");


//$("h1").css("color","green");
$("h1").css("color");//shows the information abut this object, its color 
$("h1").addClass("big-title");
$("h1").removeClass("big-title");
$("h1").addClass("big-title  margin-50");

    $("h1").hasClass("margin-50"); // would return true or false ;
    
    
    $("h1").text("Mariia");


$("button").text("new name for all the buttons");

//instead of $("h1").innerHtml("<em>Hey</em>")
$("button").html("<em>Hey</em>");


//$("img").attr("src"); // would show the information about img , its src

$("a").attr("href","https://www.yahoo.com");

//$("h2").attr("class"); would return margin-50 big-title;


$("h1").click(function(){
$("h1").css("color","purple" );
});

//before
// for(var i =0; i<5;i++){
//     document.querySelectorAll("buttons")[i].addEventListener("click", function(){
//         document.querySelector("h1").style.color= "purple";
//     });
// }
//now
$("button").click(function(){
    $("h1").css("color", "purple");
});

$("input").keypress(function (event) { 
    console.log(event.key);
});

$(document).keypress(function (event) { 
    console.log(event.key);
});

$(document).keypress(function(event){
    $("h1").text(event.key);
});



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


              