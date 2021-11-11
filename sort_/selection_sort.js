var selection_sort = function (array) {
    var length = array.length;
    for (index_array = 0; index_array < length - 1; index_array++) {
        min_index = index_array;
        for (sub_index_array = index_array + 1; sub_index_array < length; sub_index_array++) {
            if (array[sub_index_array] < array[min_index]) {
                min_index = sub_index_array;
            }
        }
        temp = array[min_index];
        array[min_index] = array[index_array];
        array[index_array] = temp;
        console.log('arr : ' + array);
    }
    return array;
};

console.log(selection_sort([23, 5, 4, 1, 97, 7, 2, 6, 8, 3, 11, 12, 17, 31]));