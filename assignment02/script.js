
 var css_link = $("<link>", {
    rel: "stylesheet",
    type: "text/css",
    href: "oz.css"
});

css_link.appendTo('head');

$(document).ready(function(){


   //1------------------------------------------------------------ #1
    var women=prompt("Enter the name of the lady", " ");
    var lady= ['#lady','#lady1','#lady2'];
   
    if (lady.length!==0){
    for ( var i=0;i<lady.length;i++){
    $(lady[i]).html(women);    
    }}
    //--------------------------------------------------------------#2
   var state=prompt("Enter the name of the state", " ");
   $('#state').html(state);
   //---------------------------------------------------------------#3 
  var geo=prompt("Enter the geographic feature:", " ");
  var land=['#Geo',"#Geo1"]
  for ( var i=0;i<land.length;i++){
    $(land[i]).html(geo);    
    }

    //--------------------------------------------------------------#4 
    
    var man=prompt("Enter the name of the Uncle:", " ");
    var uncle=['#man','#man1'];
   
     for ( var i=0;i<uncle.length;i++){
    $(uncle[i]).html(man);
     }

    //--------------------------------------------------------------#5
    
    var job=prompt("Enter the occupation of the Uncle:", " ");
    $('#job').html(job);
     //--------------------------------------------------------------#6
    
    var aunt=prompt("Enter the name of the Aunt:", " ");
    var lady2=['#woman','#woman1'];
   
        for (var i=0;i<lady2.length;i++){
        $(lady2[i]).html(aunt);
    }
     //--------------------------------------------------------------#7
     var shade=prompt("Enter the color of the dry field:", " ");
     var color=['#color','#color1','#color2'];
    
         for (var i=0;i<color.length;i++){
         $(color[i]).html(shade);}
    
     //--------------------------------------------------------------#8
     var i=0;
     var x=1;var y=5;
     var noun=['#noun1','#noun2','#noun3','#noun4','#noun5'];
       while(i<noun.length)
     {    
             var answer=prompt("Enter a noun :"+ x++ +" of 5");
             $(noun[i]).html(answer);
             i++;
    }
       
         
    
    });