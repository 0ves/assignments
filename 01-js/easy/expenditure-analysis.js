/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};

  // Iterate through each transaction
  transactions.forEach(transaction => {
      const { category, price } = transaction;
      console.log(categoryTotals);
      // If the category is already in the categoryTotals, add the price
      // Otherwise, initialize it with the current price
      if (categoryTotals[category]) {
        categoryTotals[category] += price;
        
      } else {
        categoryTotals[category] = price;
      }
  });

  // Transform the categoryTotals object into an array of objects
  const result = Object.keys(categoryTotals).map(category => {
      return {
          category: category,
          totalSpent: categoryTotals[category]
      };
  });

  return result;
}


// let bit =calculateTotalSpentByCategory([
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 10,
//     category: "Food",
//     itemName: "Pizza",
//   },
//   {
//     id: 2,
//     timestamp: 1656376800000,
//     price: 100000,
//     category: "car",
//     itemName: "pagani",
//   },{
//     id: 3,
//     timestamp: 1656476800000,
//     price: 10999,
//     category: "car",
//     itemName: "lambo",
//   },
//   {
//     id: 4,
//     timestamp: 1654076800000,
//     price: 100,
//     category: "Food",
//     itemName: "Pizza",
//   }
// ]);

// console.log(bit);
module.exports = calculateTotalSpentByCategory;
