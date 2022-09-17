var count=0;

var buttonClick = document.getElementById("navbarButton");
var sideNav = document.getElementById("navigation-side");
var courseList = document.getElementById("courseList");

buttonClick.addEventListener("click",function(e){
    if(count%2==0){
        courseList.classList.remove("col-9");
        courseList.classList.add("col-7");
        sideNav.classList.add("col-2")
        count++;
    }
    else{
        sideNav.classList.remove("col-2");
        courseList.classList.remove("col-7");
        courseList.classList.add("col-9");
        count++;
    }
});