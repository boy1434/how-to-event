const title = document.querySelector("div.hello:first-child h1");

// 클릭 되었을때 
function handleTitleClick(){
    console.log("title was clickce"); 
}

function handleMouseEnter(){
    title.innerText = "마우스 올리기";
}

function handleMouseLeave(){
    title.innerText = "마우스 떼기";
}

// 타이틀이 클릭되면 handleTitleClick 함수 실행
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
