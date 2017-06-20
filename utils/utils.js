window.utils = function() {

    function swap(list, i, j) {
        var temp = list[i];
        list[i] = list[j];
        list[j] = temp;
        return list;
    }

    return {
        swap: swap
    }
}