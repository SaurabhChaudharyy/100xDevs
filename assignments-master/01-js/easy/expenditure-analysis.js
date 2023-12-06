/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotal = {};

  transactions.forEach((transaction) => {
    const { category, price } = transaction;

    if (!categoryTotal[category]) {
      categoryTotal[category] = 0;
    }

    categoryTotal[category] += price;
  });

  const result = Object.keys(categoryTotal).map((category) => ({
    category,
    totalSpent: categoryTotal[category],
  }));

  return result;
}

module.exports = calculateTotalSpentByCategory;