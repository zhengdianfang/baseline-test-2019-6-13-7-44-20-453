'use strict';

function collectSameElements(collectionA, collectionB) {
  const resultArray = [];
  collectionA.forEach(elemA => {
    const newCollectionB = collectionB.flat()
    if (newCollectionB.includes(elemA)) {
      resultArray.push(elemA);
    }
  });
  return resultArray;
}
