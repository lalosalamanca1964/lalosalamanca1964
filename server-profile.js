//* 
var urlParams = new URLSearchParams(window.location.search);
//*

const serverInfo = {
    "JBTS": {
        "name": "Jailbreak Trading Shifters",
        "shortHand": "JBTS",
        "memberCount": "2706",
        "date": "06/18/23",
        "focus": "Trading",
        "serverImage": "images/F9DFE05A-5DD1-43C4-B268-F0F57114884E_1_201_a.jpeg",
        "serverLink": "https://discord.gg/jbts",
        "serverGif": "images/IMG_8198.GIF",
        "channelCount": "15",
        "giveawayFrequency": "Often",
        "boosterPerks": "3x Entries",
        "giveawayTop3": "HyperShift, 10x Torpedos, 2x Torpedos",
    },
    "JBV": {
        "name": "JB Values (JBV)",
        "shortHand": "JBV",
        "memberCount": "47168",
        "date": "9/28/22",
        "focus": "Values",
        "serverImage": "images/IMG_7798.jpeg",
        "serverLink": "https://discord.gg/jbvalues",
        "serverGif": "images/jbvalues_banner.gif",
        "channelCount": "27",
        "giveawayFrequency": "Very Often",
        "boosterPerks": "2x Entries",
        "giveawayTop3": "20x Season Passes, 8x Beignets, Red 5",
    },
    "JBNation": {
        "name": "Jailbreak Nation",
        "shortHand": "JBN",
        "memberCount": "2042",
        "date": "05/27/23",
        "focus": "Giveaways",
        "serverImage": "images/B7B1F86D-8AA9-490C-B97A-CED3AB62AE29_1_201_a.jpeg",
        "serverLink": "https://discord.gg/jbn",
        "serverGif": "images/jbnation.GIF",
        "channelCount": "28",
        "giveawayFrequency": "Often",
        "boosterPerks": "2x Claim Time",
        "giveawayTop3": "Hypershift, 7x Celsiors, 2x Torpedos",
    },
    "JBSellers": {
        "name": "Jailbreak Sellers",
        "shortHand": "JB Sellers",
        "memberCount": "1283",
        "date": "02/19/23",
        "focus": "Giveaways",
        "serverImage": "images/sellers.gif",
        "serverLink": "https://discord.gg/X4UgBtFj7F",
        "serverGif": "images/directorydef.png",
        "channelCount": "21",
        "giveawayFrequency": "Often",
        "boosterPerks": "2x Entries",
        "giveawayTop3": "5x Spinners, 4x Voids, 4x Icebreakers"
    },
    "JBBananas": {
        "name": "Jailbreak Banana's",
        "shortHand": "JB Banana's",
        "memberCount": "2675",
        "date": "06/19/22",
        "focus": "Trading",
        "serverImage": "images/jbbananas.png",
        "serverLink": "https://discord.gg/jailbreak-bananas-988122122931019796",
        "serverGif": "images/directorydef.png",
        "channelCount": "20",
        "giveawayFrequency": "Never",
        "boosterPerks": "N/A",
        "giveawayTop3": "N/A"
    },
    "JBTC": {
        "name": "Jailbreak Trading Core",
        "shortHand": "JBTC",
        "memberCount": "20804",
        "date": "06/01/22",
        "focus": "Trading",
        "serverImage": "images/JBTC_icon.gif",
        "serverLink": "https://discord.gg/jailbreaktrading",
        "serverGif": "images/jbtc-christmas-banner.png",
        "channelCount": "27",
        "giveawayFrequency": "Very Often",
        "boosterPerks": "2x Entries",
        "giveawayTop3": "10x Season Passes, 2000Robux, Green 3"
    },
    "JBGrinders": {
        "name": "Jailbreak Grinders",
        "shortHand": "JB Grinders",
        "memberCount": "5390",
        "date": "08/16/22",
        "focus": "Grinding",
        "serverImage": "images/grinders.png",
        "serverLink": "https://discord.gg/jailbreak-grinders-1008984623503659168",
        "serverGif": "images/directorydef.png",
        "channelCount": "29",
        "giveawayFrequency": "Rarely",
        "boosterPerks": "3x Entries",
        "giveawayTop3": "Beam, Torpedo, 850 Robux"
      },
    "JBCash": {
        "name": "Jailbreak Cash",
        "shortHand": "JB Cash",
        "memberCount": "2102",
        "date": "06/12/23",
        "focus": "Grinding",
        "serverImage": "images/jbcash.gif",
        "serverLink": "https://discord.gg/jailbreak-cash-1117903758614069359",
        "serverGif": "images/jbcashbanner.png",
        "channelCount": "17",
        "giveawayFrequency": "Moderate",
        "boosterPerks": "x2 Entries",
        "giveawayTop3": "Torpedo, x2 Icebreakers, x2 Beam Hybrids",
    },
    "NPCTrade": {
        "name": "NPC Trade Station",
        "shortHand": "Trade Station",
        "memberCount": "234",
        "date": "09/09/23",
        "focus": "Trading",
        "serverImage": "images/tradestation.png",
        "serverLink": "https://discord.gg/HyFVfkaa7h",
        "serverGif": "images/directorydef.png",
        "channelCount": "19",
        "giveawayFrequency": "Rarely",
        "boosterPerks": "N/A",
        "giveawayTop3": "Torpedo, Pink 3, Raptor"
    },
    "JBStreet": {
        "name": "Jailbreak Trading Street",
        "shortHand": "Trading Street",
        "memberCount": "2232",
        "date": "07/05/23",
        "focus": "Trading",
        "serverImage": "images/jbstreet.png",
        "serverLink": "https://discord.gg/jailbreak-trading-street-1126225799012429826",
        "serverGif": "images/directorydef.png",
        "channel Count": "17",
        "giveawayFrequency": "Often",
        "boosterPerks": "2x Entries",
        "giveawayTop3": "Hypershift, 3x Torpedos, 2x Voids"
    },
    "JBEnforcers": {
        "name": "Jailbreak Enforcers",
        "shortHand": "JB Enforcers",
        "memberCount": "191",
        "date": "10/28/23",
        "focus": "Grinding",
        "serverImage": "images/enforcers.png",
        "serverLink": "https://discord.gg/p9CXMNpP3F",
        "serverGif": "images/directorydef.png",
        "channelCount": "23",
        "giveawayFrequency": "Rarely",
        "boosterPerks": "N/A",
        "giveawayTop3": "300 Robux, Shogun, 1M Vehicle"
    },
    "JBBeach": {
        "name": "Jailbreak Beach",
        "shortHand": "JB Beach",
        "memberCount": "732",
        "date": "04/28/23",
        "focus": "Trading",
        "serverImage": "images/jbbeach.png",
        "serverLink": "https://discord.gg/S9xXFU4ejm",
        "serverGif": "images/directorydef.png",
        "channelCount": "29",
        "giveawayFrequency": "Sometimes",
        "boosterPerks": "2x Entries",
        "giveawayTop3": "3x Icebreakers, Orange 5, Beam"
    },
    "HyperCentral": {
        "name": "Hyperchrome Central",
        "shortHand": "Hyper Central",
        "memberCount": "965",
        "date": "12/08/22",
        "focus": "Grinding",
        "serverImage": "images/hypercentral.png",
        "serverLink": "https://discord.gg/ueSkmZWbYW",
        "serverGif": "images/hypercentralbanner.png",
        "channelCount": "35",
        "giveawayFrequency": "Often",
        "boosterPerks": "3x Entries",
        "giveawayTop3": "Green 5, Purple 5, Beam",
    },
    "JBUniverse": {
        "name": "Jailbreak Universe",
        "shortHand": "JB Universe",
        "memberCount": "171",
        "date": "07/31/23",
        "focus": "Trading",
        "serverImage": "images/jbuniverse.png",
        "serverLink": "https://discord.gg/9uW3cM8akJ",
        "serverGif": "images/directorydef.png",
        "channelCount": "21",
        "giveawayFrequency": "Never",
        "boosterPerks": "N/A",
        "giveawayTop3": "N/A",
    },
    "JBExpress": {
        "name": "Jailbreak Express",
        "shortHand": "JB Express",
        "memberCount": "939",
        "date": "11/04/23",
        "focus": "Giveaways",
        "serverImage": "images/jbexpress.gif",
        "serverLink": "https://discord.gg/8qqYpbFsWx",
        "serverGif": "images/directorydef.png",
        "channelCount": "24",
        "giveawayFrequency": "Often",
        "boosterPerks": "3x Entries",
        "giveawayTop3": "3x Beams, 10x Bananas, 4x Torpedos",
    },
    "XZTrading": {
        "name": "XZ Trading",
        "shortHand": "XZ Trading",
        "memberCount": "712",
        "date": "09/14/23",
        "focus": "Trading",
        "serverImage": "images/xztrading.png",
        "serverLink": "https://discord.gg/vb9MArFm5n",
        "serverGif": "images/directorydef.png",
        "channelCount": "24",
        "giveawayFrequency": "Often",
        "boosterPerks": "2x Entries",
        "giveawayTop3": "2x Beignets, 2x Icebreakers, Diamond 5",
    },
    "JBTV": {
        "name": "JB Trading Values",
        "shortHand": "JBTV",
        "memberCount": "428",
        "date": "07/10/23",
        "focus": "Values",
        "serverImage": "images/jbtv.gif",
        "serverLink": "https://discord.gg/2cuee7pmpB",
        "serverGif": "images/directorydef.png",
        "channelCount": "19",
        "giveawayFrequency": "Sometimes",
        "boosterPerks": "2x Entries",
        "giveawayTop3": "Bandit, Brulee, Celsior",
    },
}

function updateServerInfo(serverName) {
    const info = serverInfo[serverName];
    document.getElementById("nameboxtoptext").innerHTML = info.name; 
    document.getElementById("ServerGif").src = info.serverGif;
    document.getElementById("InfoTop").innerHTML = info.shortHand + " - Info"; 
    document.getElementById("Members").innerHTML = "Members - " + info.memberCount;
    document.getElementById("CreDate").innerHTML = "Created - " + info.date;
    document.getElementById("Focus").innerHTML = "Focus - " + info.focus;
    document.getElementById("ServerImg").src = info.serverImage;
    document.getElementById("ServerLink").href = info.serverLink;
    document.getElementById("Channels").innerHTML = "Channels - " + info.channelCount;
    document.getElementById("Freq").innerHTML = "Giveaway Frequency - " + info.giveawayFrequency;
    document.getElementById("Boost").innerHTML = "Booster Perks - " + info.boosterPerks;
    document.getElementById("Top3").innerHTML = info.giveawayTop3;
}  

if (urlParams.has("JBTS")) {updateServerInfo("JBTS");}
if (urlParams.has("JBV")) {updateServerInfo("JBV");}
if (urlParams.has("JBCash")) {updateServerInfo("JBCash");}
if (urlParams.has("JBN")) {updateServerInfo("JBNation");}
if (urlParams.has("JBTC")) {updateServerInfo("JBTC");}
if (urlParams.has("JBSellers")) {updateServerInfo("JBSellers");}
if (urlParams.has("JBBananas")) {updateServerInfo("JBBananas");}
if (urlParams.has("JBGrinders")) {updateServerInfo("JBGrinders");}
if (urlParams.has("JBCash")) {updateServerInfo("JBCash");}
if (urlParams.has("NPCTrade")) {updateServerInfo("NPCTrade");}
if (urlParams.has("JBStreet")) {updateServerInfo("JBStreet");}
if (urlParams.has("JBEnforcers")) {updateServerInfo("JBEnforcers");}
if (urlParams.has("JBBeach")) {updateServerInfo("JBBeach");}
if (urlParams.has("HyperCentral")) {updateServerInfo("HyperCentral");}
if (urlParams.has("JBUniverse")) {updateServerInfo("JBUniverse");}
if (urlParams.has("JBExpress")) {updateServerInfo("JBExpress");}
if (urlParams.has("XZTrading")) {updateServerInfo("XZTrading");}
if (urlParams.has("JBTV")) {updateServerInfo("JBTV");}

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
