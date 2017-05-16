function bubbleSort(list) {
    var unsorted = false;
    var pass = 0;
    var counter = 0;

    console.log("Input:",  list);
    for(var i = 0 ; i < list.length - 1; i++) {
        pass ++;
        for(var j = 0; j < list.length - i; j++ ) {
            counter ++;
            if (list[j] > list[j+1]) {
                swap(list, j);
            }
        }
        if(!unsorted) {
            break;
        }        
    }

    function swap(l, i) {
        unsorted = true;
        var temp = l[i];
        l[i] = l[i + 1];
        l[i + 1] = temp;
    }

    console.log("Output:",  list);
    console.log("No of passes: %d", pass);
    console.log("Comparision counter: %d", counter,"\n------------------------");

    return list;
}

// test cases
bubbleSort([9,8,7,6,5,4,3,2,1,0]);
bubbleSort([1,2,3]);
bubbleSort([3,2,1]);