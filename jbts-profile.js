const JBVinfo = {
    gif:"IMG_8198.GIF",
    name:"JB Values (JBV)",
    infoName:"JBV",
    membercount:"2257",
    focus:"Values",
    serverImage:"IMG_7798.jpeg",
    serverLink:"discord.gg/jbv"
}

function JBV() {
    document.getElementById("nameboxtoptext").innerHTML = JBVinfo.name; 
    document.getElementById("InfoTop").innerHTML = JBVinfo.infoName + " - Info"; 
    document.getElementById("Members").innerHTML = "Members - " + JBVinfo.membercount;
    document.getElementById("Focus").innerHTML = "Focus - " + JBVinfo.focus;
    document.getElementById("ServerImg").src = JBVinfo.serverImage;
    document.getElementById("ServerLink").href = JBVinfo.serverLink;
}

