function prepareGifts(gifts) {
    // const onlyUnique = (value,index,arr) => typeof value == 'number' && arr.indexOf(value) === index;
    const onlyUnique = (value,index,arr) => arr.indexOf(value) === index;
    return gifts.filter(onlyUnique).sort();
}

console.log(prepareGifts([0,0,0,-1]));