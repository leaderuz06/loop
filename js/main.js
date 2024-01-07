const customersList = document.querySelector('.customers-list')
const foodsSelect = document.querySelector('#foodsSelect')
const ordersList = document.querySelector('.orders-list')
const userAdd = document.querySelector('#userAdd')
const usernameInput = document.querySelector('#usernameInput')
const telephoneInput = document.querySelector('#telephoneInput')
const foodsForm = document.querySelector('#foodsForm')
const foodsCount = document.querySelector('#foodsCount')
const clientId  = document.querySelector('#clientId')

// console.log(foodsSelect)

function renderUsers () {
    customersList.innerHTML = null
    for (const user of users) {
      
        // console.log(user.contact)

        const [li,span,a] = createElement('li','span','a');
        li.classList.add('customer-item')
        span.classList.add('customer-name')
        a.classList.add('customer-phone')
        
        a.setAttribute('href','tel:' + user.contact)
        span.textContent = user.username
        a.textContent = user.contact
        
        li.append(span,a);
        customersList.append(li)

        li.addEventListener('click',() => {
            clientId.innerHTML = user.userId
            userHeader.innerHTML = 
            renderOrders(user.userId)
        })
    }
}

function renderFoods () {
    for (const food of foods) {
       const [option ] = createElement('option');
        option.value = food.foodId
        option.textContent = food.foodName
        foodsSelect.append(option)
    }
}


function renderOrders(userId) {
    ordersList.innerHTML = null

    for (const order of orders) {
        if(!(order.userId == userId)) continue
        const [elli,elImg,elDiv,elName,elCount] = createElement('li','img','div','span','span');

        elli.classList.add('order-item');
        elName.classList.add('order-name')
        elCount.classList.add('order-count')

        const food = foods.find(el => el.foodId == order.foodId)
        
        elName.textContent = food.foodName
        elCount.textContent = order.count

        elImg.setAttribute('src', food.foodImg)

        elDiv.append(elName,elCount)
        elli.append(elImg,elDiv)
        ordersList.append(elli)

        // console.log(elName)
        // console.log(elCount)
        // console.log(elImg)


    }
}

function addUser () {

}

function addOrder (event) {
  event.preventDefault()

  const foodId = foodsSelect.value.trim()
  const count  =  foodsCount.value.trim()
  const userId = cliendId.textContent.trim()

  let order = orders.find(el => el.foodId == foodId && el.userId == userId)

  if (
    !count ||
    +count > 10 ||
    !userId

  ) return

  if (order) {
    order.count == +count + +order.count
  }else{
    order ={ foodId, userId, count}
    orders.push(order)
  }
  
  window.localStorage.setItem('orders', JSON.stringify(orders))
return renderOrders(userId)
  
}

renderUsers(

)
renderFoods()
renderOrders()


userAdd.addEventListener('submit', function (event) {
   event.preventDefault()

  const username = usernameInput.value.trim()
  const contact = telephoneInput.value.trim()

    if(!username || username.length > 30) {
        return alert("Invalid user name")
    }

    if(!(/998(9[0123456789]|3[3]|7[1]|8[8])[0-9]{7}$/).test(contact)){
            return alert("telefon nomer xato")
    }

    const newUser  = {
        userId: users.length ? users[users.length - 1].userId + 1 : 1,
        username: username,
        contact
    }


    users.push(newUser)

    return renderUsers()

    // 998(9[0123456789]|3[3]|7[1]|8[8])[0-9]{7}$
   
})