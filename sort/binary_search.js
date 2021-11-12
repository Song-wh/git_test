var partition = function (array, left, right, pivotIndex) {
    var temp;
    var pivot = array[pivotIndex];
    //console.log('pivot :' + pivot);
    while (left <= right) {
        while (array[left] < pivot)
            left++;
        while (array[right] > pivot)
            right--;
        if (left <= right) {
            temp = array[left];
            array[left] = array[right];
            array[right] = temp;
            left++;
            right--;
        }
    }
    temp = array[left];
    array[left] = array[pivotIndex];
    array[pivotIndex] = temp;
    //console.log('array :' + array);
    return left;
};

var quick_sort = function (array, left, right) {
    if (!left) left = 0;
    if (!right) right = array.length - 1;
    var pivotIndex = right;
    pivotIndex = partition(array, left, right - 1, pivotIndex);
    if (left < pivotIndex - 1)
        quick_sort(array, left, pivotIndex - 1);
    if (pivotIndex + 1 < right)
        quick_sort(array, pivotIndex + 1, right);

    return array;
};

//console.log('sort:' + quick_sort([6 ,66, 3, 4, 1, 2, 12, 55, 378, 33, 25]));
var data_array = quick_sort([1, 2, 3, 4, 5, 6]);
console.log('data :' +data_array);


function binary_search(target, array) {
    var low = 0;
    var high = data_array.length - 1;
    while (low <= high) {
        var mid = Math.floor((high + low) / 2);
        console.log('mid :' + mid + ' mid_arr :' +array[mid]);
        var guess = array[mid];
        if (guess == target) {
            return guess;
        } else if (guess > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
        console.log('low :' + low + ' mid :' + mid +' high :' + high + ' data :' + array[mid]);
    }
    return undefined;
}
console.log('binary :' + binary_search(33, data_array));