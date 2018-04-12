
function quickSort(list, low, high) {
    if(low === high) {
        return list;
    }
    var pivot = list[high -1];
    var wall = low - 1;
    for(j = low; j < high; j++) {
          if(list[j] <= pivot) {
              wall++;
              var tmp = list[wall];
              list[wall] = list[j];
              list[j] = tmp;
          }  
    }

    quickSort(list, low, wall);
    quickSort(list, wall + 1, high);
} 

quickSort([10, 80, 30, 90, 40, 50, 70], 0 ,7);