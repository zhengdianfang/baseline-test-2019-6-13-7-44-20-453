'use strict';

function collectSameElements(collectionA, objectB) {
  const resultArray = [];
  const flatCollectionA = collectionA.flatMap(elemA => Object.values(elemA).flat()).flat();
  const flatCollectionB = Object.values(objectB).flat();
  flatCollectionA.forEach(elemA => {
    if (flatCollectionB.includes(elemA)) {
        resultArray.push(elemA);
    }
  });
  return resultArray;
}
