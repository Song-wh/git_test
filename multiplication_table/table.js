const STEP = 2;
const STEP_num = 1;
const last_step = 21;


for (var step_num = STEP; step_num < last_step; step_num++) {
    var dan = (step_num + "단" + "      ").toString();;
    danDigit = dan.length;
    
    process.stdout.write(step_num + "단" + "      ");
    for (var space_num = danDigit; space_num < 9; space_num++) {
        process.stdout.write(" ");
        if (space_num == 7) {
            break;
        }
    }
}
process.stdout.write("\n");

for (var step_value = STEP_num; step_value < last_step; step_value++) {
    for (var step_value_j = STEP; step_value_j < last_step; step_value_j++) {
        
        var num = (step_value_j + "*" + step_value + "=" + step_value * step_value_j).toString();
        numDigit = num.length;
        
        process.stdout.write(step_value_j + "x" + step_value + "=" + step_value * step_value_j);
        for (var sapce_second = numDigit; sapce_second < 10; sapce_second++) {
            process.stdout.write(" ");
            if (sapce_second == 10) {
                break;
            }
        }
    }
    process.stdout.write("\n");
}