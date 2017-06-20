function selectionSort(list) {
    var list = list || [];
    var i = 0,j = 0,
        len = list.length,
        minValueIndex = 0;


    for (; i < len; i++) {
        j = minValueIndex = i;

        for (; j<len; j++) {
            if (list[minValueIndex] > list[j]) {
                minValueIndex = j;
            }
        }
        swap(list, i, minValueIndex);                
    }

    return list;
       
}

function swap(list, i, j) {
    var temp = list[i];
    list[i] = list[j];
    list[j] = temp;
}


console.log(selectionSort([23, 42, 4, 16, 8, 15]));