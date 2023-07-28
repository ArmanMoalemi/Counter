let count = 0;
let shower = document.querySelector("#counter");
function myCounter(funcName) {
    if(funcName === "increase"){
        count++;
        return shower.innerHTML = count;
    }else if(funcName === "decrease"){
        count--;
        return shower.innerHTML = count;
    }else {
        count = 0;
        return shower.innerHTML = count;
    }
}
document.querySelector(".btn.inc").addEventListener("click", myCounter.bind(null, "increase"));
document.querySelector(".btn.dec").addEventListener("click", myCounter.bind(null, "decrease"));
document.querySelector(".btn.res").addEventListener("click", myCounter.bind(null, "reset"));