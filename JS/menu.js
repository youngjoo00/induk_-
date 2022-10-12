const tabs = document.querySelectorAll("[data-tab-target]");
const tabContent = document.querySelectorAll("[data-tab-content");


// tabs.forEach((tab)=> {
//   tab.addEventListener("click", () => {
//     const target = document.querySelector(tab.dataset.tabTarget);
//     tabContent.forEach((tabContent_All) => {
//       tabContent_All.classList.remove("active");
//     });
//     target.classList.add("active");
//   })
// });


// 탭을 누르면 class = "active" 가 생겨야함
// 기존에 있던 active 는 없어져야함