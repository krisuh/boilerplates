function chunk(items = [], size = 10) {
    const result = [];
    let temp = [];
    for (let i = 0; i < items.length; i++) {
        temp.push(items[i]);
        if (temp.length % size === 0){
            result.push(temp);
            temp = [];
        }
    }
    result.push(temp);
    return result;
}

const demodata = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39];
const listsOfFive = chunk(demodata, 5);
console.log(listsOfFive);
