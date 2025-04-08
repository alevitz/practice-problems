// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findKthLargestValueInBst(tree, k) {
  // Write your code here.
  /*

  do dfs in order
  add nums to array
  loop thru array to return kth largest num

  T O(max(k, h))
  S O(max(k, h))

  do dfs but search right middle then left
  increment count once you get thru nodes up to k

  T O(h + k) need to traverse to furthest node right of tree, then go bak to find kth largest node from that point
  S O(H) height of tree up to N max


  */

  let data = {
    count: 0,
    node: undefined
  };

  function dfs(tree, k, data) {
    if (!tree || data.node) return;

    dfs(tree.right, k, data);

    data.count++;
    if (data.count === k) {
      data.node = tree.value;
      return;
    }


    dfs(tree.left, k, data);
  }

  dfs(tree, k, data);
  return data.node;
}