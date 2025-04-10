async function sleep() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

function Sum(a, b, c) {
    return a + b + c;
}

(async function main() {
    // let a = await sleep()
    // console.log(a);
    // let b = await sleep()
    // console.log(b);


    // let [x,y] = [1,5];
    // console.log(x,y);

    // let [x, y, ...rest] = [1, 5, 7, 12];
    // console.log(x, y, rest);

    // let obj = {
    //     a: 1,
    //     b: 2,
    //     c: 3
    // }

    // let { a, b } = obj
    // console.log(a, b)

    let arr = [1, 2, 3];
    // console.log(Sum(arr[0], arr[1], arr[2]));
    // console.log(Sum(...arr));

    let obj = { ...arr };
    console.log(obj);

})();