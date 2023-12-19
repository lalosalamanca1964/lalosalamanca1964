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
    serverLink:"discord.gg/jbts",
    channels:"27",
    frequency:"Often",
    boosterPerks:"3x Entries",
    top3:"HyperShift, 10x Torpedos, 2x Torpedos",
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
    document.getElementById("Channels").innerHTML = "Channels - " + JBTSinfo.channels;
    document.getElementById("Freq").innerHTML = "Giveaway Frequency - " + JBTSinfo.frequency;
    document.getElementById("Boost").innerHTML = "Booster Perks - " + JBTSinfo.boosterPerks;
    document.getElementById("Top3").innerHTML = JBTSinfo.top3;
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
    serverLink:"discord.gg/jbv",
    channels:"",
    frequency:"",
    boosterPerks:"",
    top3:"",
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
    document.getElementById("Channels").innerHTML = "Channels - " + JBVinfo.channels;
    document.getElementById("Freq").innerHTML = "Giveaway Frequency - " + JBVinfo.frequency;
    document.getElementById("Boost").innerHTML = "Booster Perks - " + JBVinfo.boosterPerks;
    document.getElementById("Top3").innerHTML = JBVinfo.top3;
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
    serverLink:"discord.gg/jbn",
    channels:"",
    frequency:"",
    boosterPerks:"",
    top3:"",
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
    document.getElementById("Channels").innerHTML = "Channels - " + JBNinfo.channels;
    document.getElementById("Freq").innerHTML = "Giveaway Frequency - " + JBNinfo.frequency;
    document.getElementById("Boost").innerHTML = "Booster Perks - " + JBNinfo.boosterPerks;
    document.getElementById("Top3").innerHTML = JBNinfo.top3;
}

if (urlParams.has("JBN")) {JBN();}
//JBN---------------!

//JBCash---------------!
const JBCashinfo = {
    gif:"jbcashbanner.png",
    name:"Jailbreak Cash",
    infoName:"JB Cash",
    membercount:"2102",
    date:"06/12/23",
    focus:"Grinding",
    serverImage:"jbcash.gif",
    serverLink:"https://discord.gg/jailbreak-cash-1117903758614069359",
    channels:"",
    frequency:"",
    boosterPerks:"",
    top3:"",
}

function JBCash() {
    document.getElementById("nameboxtoptext").innerHTML = JBCashinfo.name; 
    document.getElementById("ServerGif").src = JBCashinfo.gif;
    document.getElementById("InfoTop").innerHTML = JBCashinfo.infoName + " - Info"; 
    document.getElementById("Members").innerHTML = "Members - " + JBCashinfo.membercount;
    document.getElementById("CreDate").innerHTML = "Created - " + JBCashinfo.date;
    document.getElementById("Focus").innerHTML = "Focus - " + JBCashinfo.focus;
    document.getElementById("ServerImg").src = JBCashinfo.serverImage;
    document.getElementById("ServerLink").href = JBCashinfo.serverLink;
    document.getElementById("Channels").innerHTML = "Channels - " + JBCashinfo.channels;
    document.getElementById("Freq").innerHTML = "Giveaway Frequency - " + JBCashinfo.frequency;
    document.getElementById("Boost").innerHTML = "Booster Perks - " + JBCashinfo.boosterPerks;
    document.getElementById("Top3").innerHTML = JBCashinfo.top3;
}

if (urlParams.has("JBCash")) {JBCash();}
//JBCash---------------!
