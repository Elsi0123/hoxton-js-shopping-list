

let shoppingList = [['MILK', 1.2],['Cocoa', 2], ['Salad', 2],
 ['Carrots', 2],['Tomatoes', 2.5],['Ready Meals', 5],
  ]
  let userWantsToAddItem = confirm('Add an item?')
//   let userWantsToAddItem
  while (userWantsToAddItem) {
    //   console.log
    let itemName = String(prompt('The name of the item you want to add?'))
    let itemPrice = Number(

      prompt('The price of the item you want to add?')
    )
    shoppingList.push([itemName, itemPrice])
    userWantsToAddItem = confirm('Add more item?')
  }
  
  let total = 0
//   console.log
  for (let item of shoppingList) {
    let name = item[0]
    let price = item[1]
    total += price
    console.log(`${name}: $${price.toFixed(2)}`);
  }
//   total
  console.log(`Total: $${total.toFixed(2)}`)