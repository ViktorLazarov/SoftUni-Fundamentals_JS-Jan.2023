function magicMatrices(arr) {
    let isMagic = false;
    let magicNumber = 0;

    for (let i = 0; i < arr.length; i++) {
        magicNumber += Number(arr[0][i]);
    }

 
    for (let i = 0; i < arr.length; i++) {
        let rowSum = 0;
        let colSum = 0;
        for (let j = 0; j < arr[i].length; j++) {
            rowSum += Number(arr[i][j]);
            colSum += Number(arr[j][i]); 
        }
        if (rowSum == magicNumber && colSum == magicNumber) {
            isMagic = true;
        } else {
            isMagic = false;
        }

        
    }
    console.log(isMagic);

}

magicMatrices([[4, 5, 6]
    ,          [6, 5, 4],
               [5, 5, 5]])

magicMatrices([[11, 32, 45], 
               [21, 0, 1], 
               [21, 1, 1]])

magicMatrices([[1, 0, 0], 
               [0, 0, 1], 
               [0, 1, 0]])