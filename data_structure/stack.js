var linked_list = require('./linkedcopy.js');
var stack = (function () {
    var stack = function () {
        this.list = new linked_list();
    }
    stack.prototype.push = function(node) {
        this.list.add(node);
        
        return node;
    };
    stack.prototype.pop = function() {
        temp = this.list.tail();
        data = temp;
        this.list.delete(temp);
        return data;
    }
    return stack;
})();
var list = new stack();
var node;
node = list.pop();
node = list.push(2);
node = list.push(3);
node = list.push(4);
node = list.push(5);
node = list.push(6);
node = list.pop();
console.log('꺼내온 데이터 :' + data.data);
// console.log(list);