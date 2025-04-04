function sweetAndSavory(dishes, target) {
  // Write your code here.
  /*

  negative sweet
  positive savory

  absolute value represents flavor intensity

  return the best possible pairing of two dishes, must be a sweet + savory pair
  cannot be more savory than the target flavor profile

  no dishes with 0 val
  assume there will be one best solution

  if no valid solution return [0 0], example no sweet nums or no savory nums, or every
  combo goes past the target flavor limit

  return array should be in order [sweet, savory]

  1st approach, add sweet and savory values to separate arrays, then sort them in increasing order
  of flavor intensity for each, then have two pointers that start,
  incrememt based on checking if it meets the target or not
  return the best pairing

  T O(nlogn)
  S O(1)

  ex. 22
  target -20
  [-25 -7 -4 2 5 12 100]
    l
                  r

  -20
  [-4 -7 -25]
          x
  [2 5 12 100]
     x

  */
  let sweetDishes = [];
  let savoryDishes = [];

  for (let dish of dishes) {
    if (dish < 0) {
      sweetDishes.push(dish);
    } else {
      savoryDishes.push(dish);
    }
  }

  sweetDishes.sort((a,b) => b - a);
  savoryDishes.sort((a,b) => a - b);

  let sweetPointer = 0;
  let savoryPointer = 0;
  let currentSum = 0;
  let distanceToTarget = Infinity;
  let currentSelection = [0,0];

  while (sweetPointer < sweetDishes.length && savoryPointer < savoryDishes.length) {
    currentSum = sweetDishes[sweetPointer] + savoryDishes[savoryPointer];
    if (currentSum <= target) {
      if (target - currentSum < distanceToTarget) {
      distanceToTarget = target - currentSum;
      currentSelection = [sweetDishes[sweetPointer], savoryDishes[savoryPointer]];
      }
      savoryPointer++;
    } else {
      sweetPointer++;
    }
  }

  return currentSelection;
}