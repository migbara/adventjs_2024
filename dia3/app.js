function organizeInventory(inventory) {
    let result = {};
    for (let obj of inventory) {
        if(result[obj.category]==undefined)
            result[obj.category] = {};
        if(result[obj.category][obj.name]==undefined){
            result[obj.category][obj.name] = obj.quantity;
        }
        else{
            result[obj.category][obj.name] += obj.quantity;
        }
    }
    return result;
}
// const inventory = [];

const inventory = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
];
    // {
    //   toys: {
    //     doll: 5,
    //     car: 5
    //   },
    //   sports: {
    //     ball: 2,
    //     racket: 4
    //   }
    // }
console.log(organizeInventory(inventory));