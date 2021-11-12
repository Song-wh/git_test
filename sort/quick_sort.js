var partition = function (array, left, right, pivot_index) {
    var pivot = array[pivot_index];
    while (left <= right) {
        //console.log('pivot :' + pivot + ' pivot_index :' + pivot_index + ' left :' + array[left]+ ' ' + left + ' right :' + array[right]+ ' '+ right + ' array :' + array);
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
    };
    //console.log('left :' + array[left] + ' right :' + array[right]);
    //console.log('pivot :' + array[pivot_index]);
    temp = array[left];
    array[left] = array[pivot_index];
    array[pivot_index] = temp;
    return left;
};

var quick_sort = function (array, left, right) {
    if (!left) left = 0;
    if (!right) right = array.length - 1;
    //console.log('array left:' + array[left]);
    //console.log('array right:' + array[right] + "\n");
    var pivot_index = right;
    pivot_index = partition(array, left, right -1, pivot_index);
    console.log('left :' + left + ' pivot_index :' + pivot_index + ' right :' + right + ' right_result :' + array[right] + ' arr :' + array);
    if (left <= pivot_index - 1)
        quick_sort(array, left, pivot_index - 1, pivot_index);
    if (pivot_index + 1 <= right)
        quick_sort(array, pivot_index + 1, right, pivot_index);
    return array;
    
};

console.log('sort:' + quick_sort([7, 6, 8, 9, 41, 40, 36, 21]));