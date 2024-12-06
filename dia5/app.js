/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes
 */
function organizeShoes(shoes) {
    let result = [];
    let pairs = {};
    shoes.forEach( (el, index, arr) => {
        if(pairs[el.size] == undefined){
            pairs[el.size] = {};
        }
        if(pairs[el.size][el.type] == undefined){
            pairs[el.size][el.type] = 1;
        }
        else{
            pairs[el.size][el.type]++;
        }

    });
    for(let pair of Object.keys(pairs)){
        // console.log(pair);
        if(pairs[pair]["I"]!=undefined && pairs[pair]["R"]!=undefined){
            // console.log(pairs[pair]);
            for (let i = 1; i <= Math.min(pairs[pair]["I"],pairs[pair]["R"]); i++) {
                result.push(Number(pair));
            }
        }
    }
    return result;
}

const shoes = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 42 },
];

console.log(organizeShoes(shoes));

const shoes2 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 }
  ];

console.log(organizeShoes(shoes2));

const shoes3 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 36 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 43 }
  ]
  
console.log(organizeShoes(shoes3));
