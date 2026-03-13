Set.prototype.union = function(setB) {
  return new Set([...this, ...setB]);
};

const A = new Set (['a', 'b', 'c'])
const B = new Set (['b', 'c', 'd'])

const C = A.union(B);
console.log(C)