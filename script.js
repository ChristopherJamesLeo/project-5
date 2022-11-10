console.log("Hello I'm Working")
let slideBtn = document.getElementById("slide_media_div");
slideBtn . addEventListener ("click" , btnFun = ()=> {
    let sliderList = document.getElementById("slide_media_list");
    sliderList.classList.toggle("slide_media_list_close");
})
let announceBtn = document.getElementById("announcement");
let pressReleaseBtn = document.getElementById("pressRelease");

announceBtn.addEventListener("click" , e = ()=>{
    let announceBtn = document.getElementById("announcement");
     let pressReleaseBtn = document.getElementById("pressRelease");
    pressReleaseBtn.style.backgroundColor= "black";
    announceBtn.style.backgroundColor = "#2e3192";
    let announceDiv = document .getElementById ("release_div");
    announceDiv.style.display = "block";
    let pressRelease = document .getElementById ("press_release");
    pressRelease.style.display = "none";
})

pressReleaseBtn.addEventListener("click" , e = ()=>{
    let pressReleaseBtn = document.getElementById("pressRelease");
    pressReleaseBtn.style.backgroundColor = "#2e3192";
    let announceBtn = document.getElementById("announcement");
    announceBtn.style.backgroundColor= "black";
    let announceDiv = document .getElementById ("release_div");
    announceDiv.style.display = "none";
    let pressRelease = document .getElementById ("press_release");
    pressRelease.style.display = "block";

})

let rel_btn_2022 = document.getElementById ("rel_btn_2022");
let rel_btn_2021 = document.getElementById ("rel_btn_2021");
let rel_btn_2020 = document.getElementById ("rel_btn_2020");
let rel_btn_2019 = document.getElementById ("rel_btn_2019");
let rel_btn_2018 = document.getElementById ("rel_btn_2018");
let rel_btn_2017 = document.getElementById ("rel_btn_2017");

rel_btn_2022 .addEventListener ("click" , e =()=>{
    let rel_2022 = document.getElementById("rel_2022");
    rel_2022 .style .display = "block";
    let rel_2021 = document.getElementById("rel_2021");
    rel_2021.style.display = "none";
    let rel_2020= document.getElementById ("rel_2020");
    rel_2020.style.display = "none";
    document.getElementById ("rel_btn_2022").style.backgroundColor ="#2e3192";
    document.getElementById ("rel_btn_2021").style.backgroundColor = "black";
    document.getElementById ("rel_btn_2020").style.backgroundColor = "black";
    document.getElementById ("rel_btn_2019").style.backgroundColor = "black";
    document.getElementById ("rel_btn_2018").style.backgroundColor = "black";
    document.getElementById ("rel_btn_2017").style.backgroundColor = "black";
})

rel_btn_2021 .addEventListener ("click" , e =()=>{
    let rel_2022 = document.getElementById("rel_2022");
    rel_2022 .style .display = "none";
    let rel_2021 = document.getElementById("rel_2021");
    rel_2021.style.display = "block";
    let rel_2020= document.getElementById ("rel_2020");
    rel_2020.style.display = "none";
    document.getElementById ("rel_btn_2022").style.backgroundColor ="black";
    document.getElementById ("rel_btn_2021").style.backgroundColor ="#2e3192";
    document.getElementById ("rel_btn_2020").style.backgroundColor = "black";
    document.getElementById ("rel_btn_2019").style.backgroundColor = "black";
    document.getElementById ("rel_btn_2018").style.backgroundColor = "black";
    document.getElementById ("rel_btn_2017").style.backgroundColor = "black";
})
rel_btn_2020 .addEventListener ("click" , e =()=>{
    let rel_2022 = document.getElementById("rel_2022");
    rel_2022 .style .display = "none";
    let rel_2021 = document.getElementById("rel_2021");
    rel_2021.style.display = "none";
    let rel_2020= document.getElementById ("rel_2020");
    rel_2020.style.display = "block";
    document.getElementById ("rel_btn_2022").style.backgroundColor ="black";
    document.getElementById ("rel_btn_2021").style.backgroundColor ="black";
    document.getElementById ("rel_btn_2020").style.backgroundColor = "#2e3192";
    document.getElementById ("rel_btn_2019").style.backgroundColor = "black";
    document.getElementById ("rel_btn_2018").style.backgroundColor = "black";
    document.getElementById ("rel_btn_2017").style.backgroundColor = "black";
})

rel_btn_2019 .addEventListener ("click" , e =()=>{
    document.getElementById ("rel_btn_2022").style.backgroundColor ="black";
    document.getElementById ("rel_btn_2021").style.backgroundColor ="black";
    document.getElementById ("rel_btn_2020").style.backgroundColor = "black";
    document.getElementById ("rel_btn_2019").style.backgroundColor = "#2e3192";
    document.getElementById ("rel_btn_2018").style.backgroundColor = "black";
    document.getElementById ("rel_btn_2017").style.backgroundColor = "black";
})
rel_btn_2018 .addEventListener ("click" , e =()=>{
    document.getElementById ("rel_btn_2022").style.backgroundColor ="black";
    document.getElementById ("rel_btn_2021").style.backgroundColor ="black";
    document.getElementById ("rel_btn_2020").style.backgroundColor = "black";
    document.getElementById ("rel_btn_2019").style.backgroundColor = "black";
    document.getElementById ("rel_btn_2018").style.backgroundColor = "#2e3192";
    document.getElementById ("rel_btn_2017").style.backgroundColor = "black";
})
rel_btn_2017 .addEventListener ("click" , e =()=>{
    document.getElementById ("rel_btn_2022").style.backgroundColor ="black";
    document.getElementById ("rel_btn_2021").style.backgroundColor ="black";
    document.getElementById ("rel_btn_2020").style.backgroundColor = "black";
    document.getElementById ("rel_btn_2019").style.backgroundColor = "black";
    document.getElementById ("rel_btn_2018").style.backgroundColor = "black";
    document.getElementById ("rel_btn_2017").style.backgroundColor = "#2e3192";
})

let press_btn_2022 = document.getElementById ("press_btn_2022");
let press_btn_2021 = document.getElementById ("press_btn_2021");
let press_btn_2020 = document.getElementById ("press_btn_2020");
let press_btn_2019 = document.getElementById ("press_btn_2019");
let press_btn_2018 = document.getElementById ("press_btn_2018");
let press_btn_2017 = document.getElementById ("press_btn_2017");

press_btn_2022.addEventListener("click" , e =()=>{
    document.getElementById("prs_2022").style.display = "block";
    document.getElementById("prs_2021").style.display = "none";
    document.getElementById("prs_2020").style.display = "none";
    document.getElementById ("press_btn_2022").style.backgroundColor = "#2e3192";
    document.getElementById ("press_btn_2021").style.backgroundColor = "black";
    document.getElementById ("press_btn_2020").style.backgroundColor = "black";
    document.getElementById ("press_btn_2019").style.backgroundColor = "black";
    document.getElementById ("press_btn_2018").style.backgroundColor = "black";
    document.getElementById ("press_btn_2017").style.backgroundColor = "black";
})

press_btn_2021.addEventListener("click" , e =()=>{
    document.getElementById("prs_2022").style.display = "none";
    document.getElementById("prs_2021").style.display = "block";
    document.getElementById("prs_2020").style.display = "none";
    document.getElementById ("press_btn_2022").style.backgroundColor = "black";
    document.getElementById ("press_btn_2021").style.backgroundColor = "#2e3192";
    document.getElementById ("press_btn_2020").style.backgroundColor = "black";
    document.getElementById ("press_btn_2019").style.backgroundColor = "black";
    document.getElementById ("press_btn_2018").style.backgroundColor = "black";
    document.getElementById ("press_btn_2017").style.backgroundColor = "black";
})

press_btn_2020.addEventListener("click" , e =()=>{
    document.getElementById("prs_2022").style.display = "none";
    document.getElementById("prs_2021").style.display = "none";
    document.getElementById("prs_2020").style.display = "block";
    document.getElementById ("press_btn_2022").style.backgroundColor = "black";
    document.getElementById ("press_btn_2021").style.backgroundColor = "black";
    document.getElementById ("press_btn_2020").style.backgroundColor = "#2e3192";
    document.getElementById ("press_btn_2019").style.backgroundColor = "black";
    document.getElementById ("press_btn_2018").style.backgroundColor = "black";
    document.getElementById ("press_btn_2017").style.backgroundColor = "black";
})

press_btn_2019.addEventListener("click" , e =()=>{
    document.getElementById("prs_2022").style.display = "none";
    document.getElementById("prs_2021").style.display = "none";
    document.getElementById("prs_2020").style.display = "block";
    document.getElementById ("press_btn_2022").style.backgroundColor = "black";
    document.getElementById ("press_btn_2021").style.backgroundColor = "black";
    document.getElementById ("press_btn_2020").style.backgroundColor = "black";
    document.getElementById ("press_btn_2019").style.backgroundColor = "#2e3192";
    document.getElementById ("press_btn_2018").style.backgroundColor = "black";
    document.getElementById ("press_btn_2017").style.backgroundColor = "black";
})

press_btn_2018.addEventListener("click" , e =()=>{
    document.getElementById("prs_2022").style.display = "none";
    document.getElementById("prs_2021").style.display = "none";
    document.getElementById("prs_2020").style.display = "block";
    document.getElementById ("press_btn_2022").style.backgroundColor = "black";
    document.getElementById ("press_btn_2021").style.backgroundColor = "black";
    document.getElementById ("press_btn_2020").style.backgroundColor = "black";
    document.getElementById ("press_btn_2019").style.backgroundColor = "black";
    document.getElementById ("press_btn_2018").style.backgroundColor = "#2e3192";
    document.getElementById ("press_btn_2017").style.backgroundColor = "black";
})

press_btn_2017.addEventListener("click" , e =()=>{
    document.getElementById("prs_2022").style.display = "none";
    document.getElementById("prs_2021").style.display = "none";
    document.getElementById("prs_2020").style.display = "block";
    document.getElementById ("press_btn_2022").style.backgroundColor = "black";
    document.getElementById ("press_btn_2021").style.backgroundColor = "black";
    document.getElementById ("press_btn_2020").style.backgroundColor = "black";
    document.getElementById ("press_btn_2019").style.backgroundColor = "black";
    document.getElementById ("press_btn_2018").style.backgroundColor = "black";
    document.getElementById ("press_btn_2017").style.backgroundColor = "#2e3192";
})
