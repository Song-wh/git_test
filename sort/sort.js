const readline = require('readline');
var start_index = 0;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
        console.log("line :" + line);
        array = line.split(' ').map((index) => parseInt(index));
    })
    .on('close', function selection_sort(array) {
        array = line.split(' ').map((index) => parseInt(index));
        console.log("array :" + array);
        for (var arr_index = start_index; arr_index < array.length; arr_index++){
            var arr_index_min = arr_idex;
            for (var sub_arr_index = arr_index+1; sub_arr_index < array.length; sub_arr_index++){
                arr_index_min = sub_arr_index;
            }
        }
        if (arr_index_min !== arr_index){
            var lesser = array[arr_index_min];
            array[arr_index_min] = array[arr_index];
            array[arr_index] - lesser;
        }
        
        
        process.exit();
    });
    