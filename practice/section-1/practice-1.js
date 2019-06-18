'use strict';

function collectSameElements(collectionA, collectionB) {
  const resultArray = [];
  collectionA.forEach(elemA => {
    if (collectionB.includes(elemA)) {
        resultArray.push(elemA);
    }
  });
  return resultArray;
}
