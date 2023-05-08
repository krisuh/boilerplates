export function chunk<T>(items: T[], size = 10): T[][] {
    const result: T[][] = [];
    let temp: T[] = [];
    for (let i = 0; i < items.length; i++) {
        temp.push(items[i]);
        if (temp.length % size === 0){
            result.push(temp);
            temp = [];
        }
    }
    if (temp.length > 0)
        result.push(temp);
    return result;
}
