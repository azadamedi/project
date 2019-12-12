
function insertion(a){
    let length = a.length;
    for (let i = 1; i < length; i++) {
        let key = a[i];
        let j = i - 1;
        while (j >= 0 && a[j] > key) {
            a[j + 1] = a[j];
            j = j - 1;
        }
        a[j + 1] = key;
    }
    return a
}

    let inputArr = [5,3,4,1,8]
   insertion( inputArr)
   console.log(inputArr)
