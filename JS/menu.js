let obj = {
  name : "youngjoo",
  age : 22,
  greeting : (name) => {
    console.log(`나는 ${name} 입니다. 안녕하세요.`)
  }
}

console.log(obj.name);

let man_json = JSON.stringify(obj)
console.log(man_json);

let man_obj = JSON.parse(man_json);
console.log(man_obj);

const HI = obj.greeting("zz");

// 콜백을 활용해 자기가 원하는 데이터와 값을 뽑아낼 수 있음
const manJSON_Name = JSON.stringify(obj, ['name']);

console.log(manJSON_Name);