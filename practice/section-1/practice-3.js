'use strict';

function collectSameElements(collectionA, objectB) {
  const resultArray = [];
  const collectionB = Object.values(objectB);
  collectionA.forEach(elemA => {
    const newCollectionB = collectionB.flat()
    if (newCollectionB.includes(elemA)) {
      resultArray.push(elemA);
    }
  });
  return resultArray;
}
