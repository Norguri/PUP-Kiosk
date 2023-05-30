var tooltipInfo = document.getElementById("info-container");
var imgContainer = document.getElementById("img-container");
var titleContainer = document.getElementById("title-container");
var textContainer = document.getElementById("text-container");
var imgHolder = ["img/image1.jpg", "img/image13.jpg", "img/image9.jpg", "img/image32.jpg", "img/image10.jpg", "img/image4.jpg", 
"img/image27.jpg", "img/image21.jpg", "img/image25.jpg", "img/image26.jpg"];
var textHolder = [["Amphitheater","Amphitheater is a Performance Art Theatre, located at: PUP Main Northwest Road, A. Mabini Campus, Anonas St., Sta. Mesa, Quezon City, Philippines."]
,["Lagoon","sd"]
,["Stadium ","a"]
,["Obelisk","a"]
,["Gymnasium","a"]
,["Cat walk","a"]
,["Ferry Station","a"]
,["Learning Resource Center","a"]
,["Admin","a"]
,["Pasig river","a"]];

    //Amphitheater (1)
    //Lagoon (13)
    //Stadium (9) 
    //Obelisk (32)
    //Gynnasium (10)
    //Cat walk (4)
    //Ferry Station (27)
    //Learning Resource Center (21)
    //Admin (25)
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






