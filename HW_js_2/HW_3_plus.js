const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]

// for (const key in enterprises) {
//     let quant = 0;
//     for (const k in enterprises[key].departments){
//         quant = quant + enterprises[key].departments[k].employees_count
//     }
//     console.log(enterprises[key].name + " (" + quant + " сотрудников)")
   
//     enterprises[key].departments.forEach(function(item){
//       console.log(item.name + " (" + item.employees_count + " сотрудников)")})
//       console.log()
//       ////////////////////////////////////////////////////
//       ////////////////////////////////////////////////////
   
// }  
const getEnterpisesName = function(param){
    for (const key in enterprises){
        if (enterprises[key].id == param){ return enterprises[key].name}
    
    for (const k in enterprises[key].departments){
        if ((enterprises[key].departments[k].id == param)||(enterprises[key].departments[k].name == param)){return enterprises[key].name}
    }
    }
}
console.log(getEnterpisesName(4));
console.log(getEnterpisesName(5));
console.log(getEnterpisesName("Отдел аналитики"))
/////////////////////////////////////////////////////////////////////////////////////////

const last_id = function(){
    if (enterprises.at(-1).departments.length == 0){ return enterprises.at(-1).id}
    else {return enterprises.at(-1).departments.at(-1).id}
}


const addEnterprise = function(new_enterpise){
    enterprises.push([last_id() + 1, new_enterpise,[]])
}

addEnterprise("neweee");
console.log(enterprises.at(-1));