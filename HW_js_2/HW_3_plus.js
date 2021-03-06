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
//3.2
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
//3.3
const last_id = function(){  //find last id in object
    if (enterprises.at(-1).departments.length == 0){ return enterprises.at(-1).id}
    else {return enterprises.at(-1).departments.at(-1).id}
}


const addEnterprise = function(new_enterpise){
    enterprises.push({id: last_id() + 1,name: new_enterpise, departments: []})
}

addEnterprise("neweee");
console.log(enterprises.at(-1));
console.log(getEnterpisesName(11));
/////////////////////////////////////////////////////////////////////////////////////////
//3.4
const addDepartment = function(enterprise_id, department_name){
  for (const key in enterprises){
    if (enterprises[key].id == enterprise_id){
      enterprises[key].departments.push({id: last_id() + 1, name: department_name, employees_count: 0 })
    }
  }
}
addDepartment(11, "New department");
console.log(enterprises[3]);
//////////////////////////////////////////////////////////////////////////////////////////
//3.5

const editEnterprise = function(enterprise_id, enterprise_newName){
  for (const key in enterprises){
    if (enterprises[key].id == enterprise_id){
      enterprises[key].name = enterprise_newName
    }
  }
}
editEnterprise(11,"Edited enterprise");
console.log(enterprises[3]);
//////////////////////////////////////////////////////////////////////////////////////////
//3.6

const editDepartment = function(department_id, department_newName){
  for (const key in enterprises){
    for (const dep_key in enterprises[key].departments){
      if (enterprises[key].departments[dep_key].id == department_id){
        enterprises[key].departments[dep_key].name = department_newName
      }
    }
  }
}
editDepartment(12, "Edited department");
console.log(enterprises[3]);
/////////////////////////////////////////////////////////////////////////////////////////
//3.7
const deleteEnterprise = function(enterprise_id){
  for (const key in enterprises){
    if (enterprises[key].id == enterprise_id){
      delete enterprises[key]
    }
  }
}
deleteEnterprise(11);
console.log(enterprises);
//////////////////////////////////////////////////////////////////////////////////////////
//3.8

const deleteDepartment = function(department_id){
  for (const key in enterprises){
    for (const dep_key in enterprises[key].departments){
      if (enterprises[key].departments[dep_key].id == department_id){
        if (enterprises[key].departments[dep_key].employees_count <= 0){
        delete enterprises[key].departments[dep_key]
        }else{console.log("Can not delete. This department have employees")}
      }
    }
  }
}

deleteDepartment(10);
deleteDepartment(8);
console.log(enterprises[2]);
//////////////////////////////////////////////////////////////////////////////////////////
//3.9
const moveEmployees = function(department_id_donor, department_id_recip){
  let empl;
  for (const key in enterprises) {
    for (const k in enterprises[key].departments){
      if (enterprises[key].departments[k].id == department_id_donor){
        empl = enterprises[key].departments[k].employees_count;
        enterprises[key].departments[k].employees_count = 0;
      }
    }
  }
  for (const key in enterprises) {
    for (const k in enterprises[key].departments){
      if (enterprises[key].departments[k].id == department_id_recip){
        enterprises[key].departments[k].employees_count += empl;
      }
    }
  }
}
console.log(enterprises[0]);
moveEmployees(3,2);
console.log(enterprises[0]);