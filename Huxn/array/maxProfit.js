// The function loops through the array of stock prices, tracking the minimum price encountered so far and updating the maximum profit whenever a higher profit is found. The final result returned by the function is the highest profit that can be made.

function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit;
}

const sales = [7, 1, 3, 5, 6];
console.log(maxProfit(sales));
