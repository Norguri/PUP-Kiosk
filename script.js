var tooltipInfo = document.getElementById("info-container");
var imgContainer = document.getElementById("img-container");
var titleContainer = document.getElementById("title-container");
var textContainer = document.getElementById("text-container");
var imgHolder = ["img/image1.jpg", "img/image13.jpg", "img/image9.jpg", "img/image32.jpg", "img/image10.jpg", "img/image4.jpg", 
"img/image27.jpg", "img/image21.jpg", "img/image25.jpg", "img/image26.jpg"];
var textHolder = [["Amphitheater"," Amphitheater is a proscenium theatre with a 650-seating capacity of balcony and orchestra spaces."]
,["Lagoon","This where most lovers spend most of their time because of its relaxing atmosphere."]
,["Grandstand","This is an elevated seating structure designed to accommodate a significant number of spectators, allowing them to enjoy the event comfortably."]
,["Obelisk","Its five concentric circles represent infinite wisdom and each point of the star signifies integrity, ingenuity, industry, intelligence and internationalism."]
,["Gymnasium","Gymnasium serves as the training ground for the student athletes that participate in the intercollegiate sports program."]
,["Cat walk","This is where most students were stumbling."]
,["Ferry Station","Ferry station plays a vital role along Pasig River, providing an alternative mode of travel for some of the students."]
,["Learning Resource Center","This serves as a hub for various learning materials, technology, and academic support resources."]
,["Charlie Del Rosario Building","The Charlie Del Rosario Building is a structure dedicated to the first victim of the Marcos Regime."]
,["Pasig river","The Pasig River runs through the heart of Manila and flows from Laguna de Bay to Manila Bay."]];

    //Amphitheater (1)
    //Lagoon (13)
    //Stadium (9) 
    //Obelisk (32)
    //Gynnasium (10)
    //Cat walk (4)
    //Ferry Station (27)
    //Learning Resource Center (21)
    //Charlie Del Rosario Building (6)
    //Pasig river (26) 

function mouseOver(value){

    function onHover(hover){
        var x = hover.pageX;
        var y = hover.pageY;
        tooltipInfo.style.top = (y + -213) + 'px';
        tooltipInfo.style.left = (x + 20) + 'px';
        tooltipInfo.style.display="flex";
        if (value == 9){
            tooltipInfo.style.top = (y + 20) + 'px';
            tooltipInfo.style.left = (x + 20) + 'px';
        }
        for (var i = 0; imgHolder.length; ++i){
            if(parseInt(value) == i){   
                imgContainer.src = imgHolder[i];
                for(var j = 0; textHolder.length; ++j){
                    titleContainer.innerText = textHolder[i][j];
                    textContainer.innerText = textHolder[i][j+1];
                    break;
                }
                break;
            }
        }     
    }
    document.getElementById(value).addEventListener("mousemove", onHover)
    
    function onOut(){
        tooltipInfo.style.display="none";
    }
    document.getElementById(value).addEventListener("mouseout", onOut)
}

function cursorTracker(hover){
    var x = hover.pageX;
    var y = hover.pageY;
    document.getElementById("x").innerText = x;
    document.getElementById("y").innerText = y;
    
}
window.addEventListener("mousemove", cursorTracker);






