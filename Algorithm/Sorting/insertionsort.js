function insertionSort(list) {
    var list = list || [];
    var i = 1;
    var len = list.length;
    for (; i < len; i++) {
        // method 1
        var j = i; 
        var el = list[i];
        while(j > 0 && list[j-1] > el) {
            swap(list, j , j-1);
            j = j-1;
        }

        // method 2

        // if(list[i] <= list[i+1]) {
        //     continue;            
        // } else {
        //    var j = i+1;
        //    for(;j > 0; j--) {
        //        if(list[j] < list[j-1]) {
        //             swap(list, j , j-1);
        //        }
        //    }
        // }

        
    }

    return list;

    function swap(list, i, j) {
        var temp = list[i];
        list[i] = list[j];
        list[j] = temp;
    }
}

console.log(insertionSort([9,8,7,6,5,4,3,2,1,0]));