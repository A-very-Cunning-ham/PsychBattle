var categs =  [false, false, false, false, false, false, false, false, false, false, false, false, false, false,];


function toggleCategs(n) {
    var checkbox = document.getElementById("check" + n);
    
    if (checkbox.checked === true) {
        categs[n] = true;
        sessionStorage.categs = JSON.stringify(categs);
    } else {
        categs[n] = false;
        sessionStorage.categs = JSON.stringify(categs);
    }
    
}

