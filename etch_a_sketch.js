/*
Project: Etch-A-Sketch
Author: Joseph Barry
Date:08/16/2014

To Do: Create a darkening of squares that are hovered over 
at .1 opacity each iteration (until reaching full opacity at 1).
*/

function init(){
    let cArea= document.getElementById("contentArea");

    let titleContainer=document.createElement("div");
    let gameTitle=document.createElement("h1");
    gameTitle.innerHTML="Etch-A-Sketch";

    let selectButton=document.createElement("INPUT");
    selectButton.setAttribute("type", "button");
    selectButton.setAttribute("value", "New Sketch");
    selectButton.setAttribute("onclick", "createNewSketch()");
    
    titleContainer.appendChild(gameTitle);
    cArea.appendChild(titleContainer);
    cArea.appendChild(selectButton);


}

function createNewSketch(){
    deleteSketch();
    let numRows= prompt("How many rows of squares? 1-100");
    let totalArea=numRows * numRows;
    let cArea=document.getElementById("contentArea");

    let playArea= document.createElement("div");
    playArea.id="playArea";
    
    cArea.appendChild(playArea);

    for(let i=1;i<=totalArea;++i){
       
        let box=document.createElement("div");
        box.setAttribute("id", "box"+i);
        box.setAttribute("class", "boxes");
        box.setAttribute("style", "width: "+ 500/numRows + "px");
        box.setAttribute("value", 0);
        
   
        playArea.appendChild(box);
    }

}


function deleteSketch(){
    let cArea= document.getElementById("contentArea");
    
    if(document.getElementById("playArea")!=null){
        let contentDiv = document.getElementById("playArea");
        cArea.removeChild(contentDiv);
    }
    return;
  
}