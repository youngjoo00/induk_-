const tabs = document.querySelectorAll("[data-tab-target]");
const tabContent = document.querySelectorAll("[data-tab-content");

console.log(tabs, tabContent);

function tabAddClass() {
  
}

tabs[0].addEventListener("click", tabAddClass);

// 탭을 누르면 class = "active" 가 생겨야함
// 기존에 있던 active 는 없어져야함