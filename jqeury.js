
var colors = new Array(
    [62,35,255],
    [60,255,60],
    [255,35,98],
    [45,175,230],
    [255,0,255],
    [255,128,0]);
  
  var step = 0;
  //color table indices for: 
  // current color left
  // next color left
  // current color right
  // next color right
  var colorIndices = [0,1,2,3];
  
  //transition speed
  var gradientSpeed = 0.001;
  
  function updateGradient()
  {
    
    if ( $===undefined ) return;
    
  var c0_0 = colors[colorIndices[0]];
  var c0_1 = colors[colorIndices[1]];
  var c1_0 = colors[colorIndices[2]];
  var c1_1 = colors[colorIndices[3]];
  
  var istep = 1 - step;
  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  var color1 = "rgb("+r1+","+g1+","+b1+")";
  
  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  var color2 = "rgb("+r2+","+g2+","+b2+")";
  
   $('#gradient').css({
     background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
      background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
    
    step += gradientSpeed;
    if ( step >= 1 )
    {
      step %= 1;
      colorIndices[0] = colorIndices[1];
      colorIndices[2] = colorIndices[3];
      
      //pick two new target color indices
      //do not pick the same as the current one
      colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      
    }
  }
  
  setInterval(updateGradient,10);

$(document).ready(function(){
    $("#button1").click(function(){
        $("h1#h1slide2").slideUp(2000).slideDown(2000);
    });
});

$(document).ready(function(){
    $("#button2").click(function(){
        $("#h1slide").slideToggle("Hallo");
    });
});


$(document).ready(function(){
    $("#button3").click(function(){
        $("#text").text("De tekst is veranderd.");
    });
});

$(document).ready(function(){
	$("#button4").click(function(){
        $("ul").append("<li>Item toevoegen</li>");
    });
});

$(document).ready(function(){
    $("#button5").click(function(){
        $("#wrap").remove();
    });
});

$(document).ready(function(){
	$("#button6").click(function(){
		var div = $("div"); 
			div.animate({
				height: 'toggle'
        });
        $("section").css("optacicy", "red");
	});
});

$(document).ready(function(){
    $("#button7").click(function(){
        alert("Poep op je brood!?");
    });
});

var url = "https://aws.random.cat/meow";

$("#btn").on("click", function() {
  $.getJSON(url)
    .done(function(data) {
      console.log(data);
      $("#img").attr("src", data.file);
    })
    .fail(function() {
      console.log("Something went wrong!");
    })
})

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("ajax-container").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajax.txt", true);
  xhttp.send();
}

function showHint(str) {
  var xhttp;
  e.preventDefault();
  e.stopPropagation();
  if (str.length == 0) { 
    document.getElementById("txtHint").innerHTML = "";
    return;
  }
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("txtHint").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "gethint.php?q="+str, true);
  xhttp.send();   
}

$(document).ready(function(){
$("#getBtn").click(function() {
  getRandomCat();
});
});




function getRandomCat() {
  $.getJSON("https://aws.random.cat/meow")
    .done(function(data) {
      console.log(data);
      $("img").attr("src", data.file);
    })
    .fail(function() {
      alert("Request is not PAWsibble!");
    });
}

getRandomCat();
