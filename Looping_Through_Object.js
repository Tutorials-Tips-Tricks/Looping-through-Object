function calcAvgHeight(data) {
    //Calculate average height from received data. If no data, return null.
    let arr = Object.values(data);
    let sum = (prev, cur) => ({ height: prev.height + cur.height });
    let avg = arr.reduce(sum).height / arr.length;
    console.log(avg)//182
}


//creating arr of objects
let avgHeight = calcAvgHeight(
    {
        Matt: { height: 174, weight: 69 },
        Jason: { height: 190, weight: 103 }
    }
);