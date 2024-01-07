let users = window.localStorage.getItem('users');
let foods = window.localStorage.getItem('foods');
let orders = window.localStorage.getItem('orders');



users = JSON.parse(users) || [
    {userId: 1, username: 'ali', contact: '998998781731'},
    {userId: 2, username: 'vali', contact: '998998780011'},
    {userId: 3, username: 'sobir', contact: '998998783344'},
    {userId: 4, username: 'mavlon', contact: '998998786655'},
  
];

foods = JSON.parse(foods) || [
    { foodId: 1, foodName: 'burger cheese', foodImg: './img/burger_cheese.jpeg' },
    { foodId: 2, foodName: 'chicken togora', foodImg: './img/chicken_togora.jpeg' },
    { foodId: 3, foodName: 'chicken_wings', foodImg: './img/chicken_wings.jpeg' },
    { foodId: 4, foodName: 'cola', foodImg: './img/cola.jpeg' },
    { foodId: 5, foodName: 'combo', foodImg: './img/combo.jpeg' },
    { foodId: 6, foodName: 'fanta', foodImg: './img/fanta.jpeg' },
    { foodId: 7, foodName: 'spinner', foodImg: './img/spinner.jpeg' },
   
];

orders = JSON.parse(orders) ||[

    { userId: 1, foodId: 2, count: 2 },  // ali chicken togora 2 ta zakaz qilgan
    { userId: 3, foodId: 4, count: 1 },  // sobir 1 ta cola zakaz qilgan
    { userId: 2, foodId: 1, count: 2 },  // vali  burger cheese 2 ta zakaz qilgan
    { userId: 4, foodId: 7, count: 3 },  // mavlon spiner 3 ta zakz qilgan

]