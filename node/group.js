function groupBy(list = [], getItemKey = (item) => 'defaultKey') {
    return list.reduce((acc, cur) => {
        const key = getItemKey(cur);
        const group = acc[key] ?? [];
        group.push(cur);
        return { ...acc, [key]: group };
    }, {});
}

const demodata = [
    { firstname: 'Erkki', lastname: 'Hervanta', age: 66 },
    { firstname: 'Jaska', lastname: 'Hervanta', age: 23 },
    { firstname: 'Erkki', lastname: 'Pispala', age: 53 },
    { firstname: 'Mursu', lastname: 'Maunula', age: 34 },
    { firstname: 'Max', lastname: 'Power', age: 41 },
    { firstname: 'Max', lastname: 'Salama', age: 22 },
];

function getFirstName(item) {
    return item.firstname ?? 'noName';
}

const groupedByFirstname = groupBy(demodata, getFirstName);

console.log(JSON.stringify(groupedByFirstname, null, 2));
