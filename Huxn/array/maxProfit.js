// The function loops through the array of stock prices, tracking the minimum price encountered so far and updating the maximum profit whenever a higher profit is found. The final result returned by the function is the highest profit that can be made.

function maxProfit(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];

    // Update minimum price if the lower price is found
    minPrice = Math.min(minPrice, currentPrice);

    const potentialProfit = currentPrice - minPrice;

    maxProfit = Math.max(maxProfit, potentialProfit);
  }
  return maxProfit;
}

const sales = [7, 1, 3, 5, 6];
console.log(maxProfit(sales));
