//JBTC------------!
const JBTCinfo = {
    membercount: "20804"
};

document.getElementById("JBTCMemCountFSL").innerHTML = JBTCinfo.membercount; 
//JBTC------------!

//JBSellers---------!
const JBSinfo = {
    membercount: "1283"
};

document.getElementById("JBSMemCountFSL").innerHTML = JBSinfo.membercount; 
//JBSellers---------!

//JBTS---------------!
const JBTSinfo = {
    membercount: "2706"
};

document.getElementById("JBTSMemCountFSL").innerHTML = JBTSinfo.membercount; 
//JBTS---------------!

//JBV----------------!
const JBVinfo = {
    membercount: "47168"
};

document.getElementById("JBVMemCountFSL").innerHTML = JBVinfo.membercount; 
//JBV---------------!

//JBN---------------!
const JBNinfo = {
    membercount: "2042"
};

document.getElementById("JBNMemCountFSL").innerHTML = JBNinfo.membercount; 
//JBN---------------!

//JB Bananas---------------!
const JBBinfo = {
    membercount: "2675"
};

document.getElementById("JBBMemCountFSL").innerHTML = JBBinfo.membercount; 
//JB Bananas---------------!

//RTHQ---------------!
const RTHQinfo = {
    membercount: "965"
};

document.getElementById("RTHQMemCountFSL").innerHTML = RTHQinfo.membercount; 
//RTHQ---------------!

//JB Grinders----------!
const JBGinfo = {
    membercount: "5390"
}

document.getElementById("JBGMemCountFSL").innerHTML = JBGinfo.membercount;
//JB Grinders----------!

//JB Cash-------!
const JBCinfo = {
    membercount: "2102"
}

document.getElementById("JBCMemCountFSL").innerHTML = JBCinfo.membercount;
//JB Cash-------!

//NPC Trade Station-------!
const NPCinfo = {
    membercount: "234"
}

document.getElementById("NPCMemCountFSL").innerHTML = NPCinfo.membercount;
//NPC Trade Station-------!

//JB Street---------!
const JBStreetinfo = {
    membercount: "2232"
}

document.getElementById("JBStreetMemCountFSL").innerHTML = JBStreetinfo.membercount;
//JB Street---------!

//JB Enforcers---------!
const JBEnforcersinfo = {
    membercount: "191"
}

document.getElementById("JBEnforcersMemCountFSL").innerHTML = JBEnforcersinfo.membercount;
//JB Enforcers---------!

//JB Beach---------!
const JBBeachinfo = {
    membercount: "732"
}

document.getElementById("JBBeachMemCountFSL").innerHTML = JBBeachinfo.membercount;
//JB Beach---------!

//JB Universe---------!
const JBUniverseinfo = {
    membercount: "171"
}

document.getElementById("JBUniverseMemCountFSL").innerHTML = JBUniverseinfo.membercount;
//JB Universe---------!

//JB Express---------!
const JBExpressinfo = {
    membercount: "939"
}

document.getElementById("JBExpressMemCountFSL").innerHTML = JBExpressinfo.membercount;
//JB Express---------!

//XZ Trading---------!
const XZTradinginfo = {
    membercount: "712"
}

document.getElementById("XZTradingMemCountFSL").innerHTML = XZTradinginfo.membercount;
//XZ Trading---------!

//JBTV--------!
const JBTVinfo = {
    membercount: "428"
}

document.getElementById("JBTVMemCountFSL").innerHTML = JBTVinfo.membercount;
//JBTV--------!

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM content loaded");

    var serverContainer = document.getElementById('mainlistflex');
    var serverArray = Array.from(document.querySelectorAll('.serverflex'));

    // Function to update member count in HTML
    function updateMemberCount(serverId, membercount) {
        document.getElementById(serverId + "MemCountFSL").innerHTML = membercount;
    }

    // Function to get member count from a server element
function getMemberCount(serverElement) {
    var countElement = serverElement.querySelector('.serverflex span[id$="MemCountFSL"]');
    return parseInt(countElement.innerText) || 0;
}

    // Function to sort servers using CSS order property
function sortServers(ascending) {
    console.log("Sorting servers");

    serverArray.sort(function (a, b) {
        var memberCountA = getMemberCount(a);
        var memberCountB = getMemberCount(b);

        console.log("Comparing:", memberCountA, memberCountB, a, b);

        return ascending ? memberCountA - memberCountB : memberCountB - memberCountA;
    });

    console.log("Sorted Array Length:", serverArray.length);

    // Apply the new order values to the sorted server divs
    serverArray.forEach(function (server, index) {
        server.style.order = index + 1;
    });
}

    // Example: Sorting in ascending order
    document.getElementById('sort-ascending-btn').addEventListener('click', function () {
        console.log("Sort Ascending button clicked");
        sortServers(true);
    });

    // Example: Sorting in descending order
    document.getElementById('sort-descending-btn').addEventListener('click', function () {
        console.log("Sort Descending button clicked");
        sortServers(false);
    });

    // Log initial order before sorting
    console.log("Before Sorting:", serverArray);
});


//Find a server's focus based off a search input for the server name

//Converting JSON into an object 
const stringJSON = JSON.stringify(serverInfo);
const obj = JSON.parse(stringJSON);

//Convert the object into an array
const objArrayFormat = Object.entries(obj);

//Display the object's keys in an array
const serverKeysArray = Object.keys(obj);

//Check if the user inputted server exists in serverKeysArray; if so, return the server name back
function findServer(serverKeysArray, serverName) {
    for (i = 0; i < serverKeysArray.length; i++) {
        if (serverKeysArray[i] == serverName) {
            return serverKeysArray[i];
        }
    }
    return false;
}

findServer(serverKeysArray, 'JBBananas');

//Find the server's focus by 1. getting the server name's array position in serverKeysArray
//2. taking the server's position and grabbing the focus from objArrayFormat
//3. returning the server's focus in string format
function findFocus() {
    const position = serverKeysArray.indexOf(serverKeysArray[i]);

    const serverFocus = objArrayFormat[position][1].focus;

    return serverFocus;

}

findFocus();
