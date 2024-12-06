function prepareGifts(gifts) {
    // const onlyUnique = (value,index,arr) => typeof value == 'number' && arr.indexOf(value) === index;
    const onlyUnique = (value,index,arr) => arr.indexOf(value) === index;
    return gifts.filter(onlyUnique).sort();
}

console.log(prepareGifts([0,0,0,-1]));

const gifts1 = [3, 1, 2, 3, 4, 2, 5]
const preparedGifts1 = prepareGifts(gifts1)
console.log(preparedGifts1) // [1, 2, 3, 4, 5]

const gifts2 = [6, 5, 5, 5, 5]
const preparedGifts2 = prepareGifts(gifts2)
console.log(preparedGifts2) // [5, 6]

const gifts3 = []
const preparedGifts3 = prepareGifts(gifts3)
console.log(preparedGifts3) // []