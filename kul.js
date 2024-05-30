let b = document.getElementById("but");
let d = document.getElementById("div-st");
let well = document.getElementById("wellcome");
let mainai = document.getElementById("mainai");

// input sid butions 
let inputb = document.getElementById("inputb");
let butin = document.getElementById("butin1");
let butin1 = document.getElementById("butin2");
let butin2 = document.getElementById("butin3");
let butin3 = document.getElementById("butin4");
let done = document.getElementById("inputbut");
let outputperent = document.getElementById("outputperent");

// create a eliment 

let pp = document.createElement("p");
let pp1 = document.createElement("p");
let inp = document.createElement("input");
let inp1 = document.createElement("input");
let buttt = document.createElement("button");

// add a value of a data
let namea = [];
let numar = [];

// creat a object
let a = new Object();


function but() {

    d.style.display = "none";
    console.log("hy");
    well.style.display = "flex";

    setTimeout(() => {
        well.style.display = "none";
        console.log("hy");
        mainai.style.display = "flex";
    }, 1000)
}

b.addEventListener("click", but);

function buti() {
    inputb.value = butin.innerText
}
function but1() {
    inputb.value = butin1.innerText
}

function but2() {
    inputb.value = butin2.innerText
}

butin.addEventListener('click', buti);
butin1.addEventListener("click", but1)
butin2.addEventListener("click", but2)

// input a velue and gve output

function donef() {
    if (inputb.value == "GIVE A CODE") {
        let dd = document.createElement("div");
        outputperent.appendChild(dd)

        let hh = document.createElement('input');
        hh.value = "hy"
        dd.appendChild(hh)
    }
    else if (inputb.value == 'ADD YOUR DATA') {
        let dd = document.createElement("div");
        outputperent.appendChild(dd);

        pp.innerText = "enter your name";
        inp1.type = "number";
        dd.appendChild(pp);
        dd.appendChild(inp)
        pp1.innerText = "enter your numbar"
        dd.appendChild(pp1);
        dd.appendChild(inp1);
        buttt.innerText = "submit"
        dd.appendChild(buttt);
        function addvalue() {
            namea.push(inp.value);
            numar.push(inp1.value);
            inp.value = "";
            inp1.value = "";

        }
        buttt.addEventListener("click", addvalue);

    }
    else if (inputb.value == 'SHOW YOUR DETEL') {
        console.log(namea);
        console.log(numar);
        for (let i = 0; i < namea.length; i++) {
            console.log(namea[i]);
            a.nam = namea[i]
            a.numbar = numar[i]
        }
        console.log(a);
    }
    else {
        console.log("not work");
    }
}

done.addEventListener("click", donef)