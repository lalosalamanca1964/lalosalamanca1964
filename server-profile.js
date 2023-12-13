//* 
var urlParams = new URLSearchParams(window.location.search);
//*

//JBTS---------------!
const JBTSinfo = {
    gif:"IMG_8198.GIF",
    name:"Jailbreak Trading Shifters",
    infoName:"JBTS",
    membercount:"1276",
    date:"11/07/22",
    focus:"Trading",
    serverImage:"F9DFE05A-5DD1-43C4-B268-F0F57114884E_1_201_a.jpeg",
    serverLink:"discord.gg/jbts"
}

function JBTS() {
    document.getElementById("nameboxtoptext").innerHTML = JBTSinfo.name; 
    document.getElementById("ServerGif").src = JBTSinfo.gif;
    document.getElementById("InfoTop").innerHTML = JBTSinfo.infoName + " - Info"; 
    document.getElementById("Members").innerHTML = "Members - " + JBTSinfo.membercount;
    document.getElementById("CreDate").innerHTML = "Created - " + JBTSinfo.date;
    document.getElementById("Focus").innerHTML = "Focus - " + JBTSinfo.focus;
    document.getElementById("ServerImg").src = JBTSinfo.serverImage;
    document.getElementById("ServerLink").href = JBTSinfo.serverLink;
}

if (urlParams.has("JBTS")) {JBTS();}
//JBTS---------------!

//JBV---------------!
const JBVinfo = {
    gif:"jbvalues_banner.gif",
    name:"JB Values (JBV)",
    infoName:"JBV",
    membercount:"2257",
    date:"11/06/22",
    focus:"Values",
    serverImage:"IMG_7798.jpeg",
    serverLink:"discord.gg/jbv"
}

function JBV() {
    document.getElementById("nameboxtoptext").innerHTML = JBVinfo.name; 
    document.getElementById("ServerGif").src = JBVinfo.gif;
    document.getElementById("InfoTop").innerHTML = JBVinfo.infoName + " - Info"; 
    document.getElementById("Members").innerHTML = "Members - " + JBVinfo.membercount;
    document.getElementById("CreDate").innerHTML = "Created - " + JBVinfo.date;
    document.getElementById("Focus").innerHTML = "Focus - " + JBVinfo.focus;
    document.getElementById("ServerImg").src = JBVinfo.serverImage;
    document.getElementById("ServerLink").href = JBVinfo.serverLink;
}

if (urlParams.has("JBV")) {JBV();}
//JBV---------------!

//JBN---------------!
const JBNinfo = {
    gif:"",
    name:"Jailbreak Nation",
    infoName:"JBN",
    membercount:"2132",
    date:"11/06/22",
    focus:"Trading",
    serverImage:"B7B1F86D-8AA9-490C-B97A-CED3AB62AE29_1_201_a.jpeg",
    serverLink:"discord.gg/jbn"
}

function JBN() {
    document.getElementById("nameboxtoptext").innerHTML = JBNinfo.name; 
    document.getElementById("ServerGif").src = JBNinfo.gif;
    document.getElementById("InfoTop").innerHTML = JBNinfo.infoName + " - Info"; 
    document.getElementById("Members").innerHTML = "Members - " + JBNinfo.membercount;
    document.getElementById("CreDate").innerHTML = "Created - " + JBNinfo.date;
    document.getElementById("Focus").innerHTML = "Focus - " + JBNinfo.focus;
    document.getElementById("ServerImg").src = JBNinfo.serverImage;
    document.getElementById("ServerLink").href = JBNinfo.serverLink;
}

if (urlParams.has("JBN")) {JBN();}
//JBN---------------!
