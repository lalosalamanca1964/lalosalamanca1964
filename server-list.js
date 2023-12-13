const JBDinfo = {
    membercount: "127"
};

document.getElementById("JBDMemCountFSL").innerHTML = JBDinfo.membercount; 
//JBDistrict

//JBTS---------------!
const JBTSinfo = {
    membercount: "1276"
};

document.getElementById("JBTSMemCountFSL").innerHTML = JBTSinfo.membercount; 
//JBTS---------------!

//JBV---------------!
const JBVinfo = {
    membercount: "46758"
};

document.getElementById("JBVMemCountFSL").innerHTML = JBVinfo.membercount; 
//JBV---------------!

//JBN---------------!
const JBNinfo = {
    membercount: "2132"
};

document.getElementById("JBNMemCountFSL").innerHTML = JBNinfo.membercount; 
//JBN---------------!

//Member Count High to Low Sorting Method--------!

function sortList() {
    let mainListFlexContainer = document.getElementById("mainlistflex");

    let serverFlexDivs = document.querySelectorAll(".serverflex");

    let existingDivs = Array.from(serverFlexDivs);

    let objectsArray = [JBDinfo, JBTSinfo, JBVinfo, JBNinfo];

    objectsArray.sort((a , b) => b.membercount - a.membercount);

    let indexMapping = {};
    existingDivs.forEach((div , index) => {
        let divObjectId = div.Id1;
        indexMapping[index] = objectsArray.findIndex((obj) => obj.objectId === divObjectId);
    });

    existingDivs.sort((a , b) => indexMapping[existingDivs.indexOf(b)] - indexMapping[existingDivs.indexOf(a)]);

    existingDivs.forEach((div) => {
        mainListFlexContainer.appendChild(div);
    });

    console.log("existingDivs: ", existingDivs);

    console.log("objectsArray: ", objectsArray);

    console.log("indexMapping: ", indexMapping);
}

sortList()

//Member Count High to Low Sorting Method--------!

//Rearranging Flex Boxes Method---!

//Rearranging Flex Boxes Method---!
