// 1. Вывести все предприятия и их отделы. 
//Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

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
  


  // var employees1= enterprises[0].departments[0].employees_count,
  // employees2= enterprises[0].departments[1].employees_count,
  // employees3= enterprises[0].departments[2].employees_count,
  // employees4= enterprises[1].departments[0].employees_count,
  // employees5= enterprises[1].departments[1].employees_count,
  // employees6= enterprises[1].departments[2].employees_count,
  // employees7= enterprises[2].departments[0].employees_count;

  // console.log(enterprises[0].name + ": " + (employees1+employees2+employees3) + " сотрудников" )
  // console.log(" - " + enterprises[0].departments[0].name + ": " + employees1 + " сотрудников")
  // console.log(" - " + enterprises[0].departments[1].name + ": " + employees2 + " сотрудников")
  // console.log(" - " + enterprises[0].departments[2].name + ": " + employees3 + " сотрудников")
  // console.log(enterprises[1].name + ": " + (employees4+employees5+employees6) + " сотрудников")
  // console.log(" - " + enterprises[1].departments[0].name + ": " + employees4 + " сотрудников")
  // console.log(" - " + enterprises[1].departments[1].name + ": " + employees5 + " сотрудников")
  // console.log(" - " + enterprises[1].departments[2].name + ": " + employees6 + " сотрудников")
  // console.log(enterprises[2].name + ": " + (employees7) + "сотрудников")
  // console.log(" - " + enterprises[2].departments[0].name + ": " + employees7 + " сотрудников")

  for (let i =0; i < enterprises.length; i++ ) {
    console.log(enterprises[i].name + ": "  )

    for (let j= 0; j < enterprises[i].departments.length; j++){
      
      console.log(" -" + enterprises[i].departments[j].name + ": " + enterprises[i].departments[j].employees_count + " сотрудников")
    }
   
  }