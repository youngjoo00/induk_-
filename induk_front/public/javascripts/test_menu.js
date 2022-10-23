'use strict';

const ip = `http://3.39.226.145:8000`;

const local_username = window.localStorage.getItem("login-username"); 

function Get_AdminToken() {
  const url = `${ip}/account/user/list/`;

  return fetch(url)
  .then((res) =>res.json())
  .then((data) => {
    for(let i = 0; i<Object.keys(data).length; i++) {
      if('관리자' === local_username) {
        const AdminToken = data[i].token;
        return AdminToken;
      }
    }
  })
}

// 관리자 토큰 값 뽑아내기
async function adminCheck() {
  const adminToken = await Get_AdminToken();

  console.log("관리자 토큰 값 : " + adminToken);
  Post_CocktailCategoryCreate(adminToken);
}

adminCheck();

// 도수 카테고리
function Get_CocktailCategoryList() {
  const url = `${ip}/cocktail/category/`;

  fetch(url)
  .then((res) =>res.json())
  .then((data) => {console.log(data);})
}

function Post_CocktailCategoryCreate(adminToken) {
  console.log("Post_CategoryCreate 내부 : " + adminToken);
  fetch(`${ip}/cocktail/category/`, {
    method: 'POST',
    headers: { 
      'Content-Type' : 'application/json',
      Authorization: `token ${adminToken}`,
    },
    body: JSON.stringify({
      name: '10~20%',
    })
  })
  .then((res) => console.log(res))
  // .then((data) => console.log(data))
};

// function Pacth_UserEdit(newUser) {
//   fetch(`${edit_ip}/account/user/${newUser.id}/`, 
//   {
//     method: 'POST',
//     headers: { 
//       'Content-Type' : 'application/json',
//       Authorization: `token ${newUser.token}`,
//   },
//     body: JSON.stringify({
//       email: newUser.email,
//       age: newUser.age,
//       username: newUser.name,
//       date_of_birth: newUser.date,
//     })
//   }
// )
// .then((res) => res.json())
// .then((data) => {
//   window.localStorage.removeItem("login-username");
//   window.localStorage.setItem("login-username", data.username)

//   alert("정보를 수정하였습니다!");
//   location.href = "/";
// })
// };

// Get_CocktailCategoryList();

// function Get_UserList() {
//   const url = `${ip}/account/user/list/`;

//   fetch(url)
//   .then((res) =>res.json())
//   .then((data) => {console.log(data);})
// }

// Get_UserList();