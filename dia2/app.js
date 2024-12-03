function createFrame(names) {
    const tam_x = (names.length);
    let max = 0;
    names.forEach(el => {
        if(el.length > max)
            max = el.length;
    });
    let tam_y = max + 4;
    let cad = '';
    for (let i = -1; i <= tam_x; i++) {
        
        if(i==-1 || i==tam_x){
            for (let j = 0; j < tam_y; j++) {
                cad += '*';
            }
        }
        else{
            cad += `* ${names[i]}`;
            for (let j = names[i].length; j < tam_y-3; j++) {
                cad += ' ';
            }
            cad += '*';
        }

        if(i<tam_x){
            cad += '\n';
        }
        const el = names[i];
    }
    return cad;
}

console.log(createFrame(['marcos','bruno','aitana']));
console.log(createFrame(['marcos','miguel jesus', 'bruno','aitana','fernando']));