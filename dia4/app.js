function createXmasTree(height, ornament) {
    let cad = '';
    for (let i = 0; i < height; i++) {
        
        for (let k = 0; k < height - i -1; k++) {
            cad += '_';
        }
        for (let k = 0; k < 1 + (2 * i); k++) {
            cad += ornament;
        }
        for (let k = 0; k < height - i - 1; k++) {
            cad += '_';
        }
        cad += '\n';
    }
    for (let i = 0; i < 2; i++) {
        for (let k = 0; k < height - 1; k++) {
            cad += '_';
        }
        cad += '#'
        for (let k = 0; k < height - 1; k++) {
            cad += '_';
        }
        if(i==0)
            cad += '\n';
    }
    return cad;
}

console.log(createXmasTree(3,'*'));