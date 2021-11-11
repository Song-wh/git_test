var linked_list = require('./linkedcopy.js');
var queue = (function () {
    var queue = function () {
        this.list = new linked_list();
    }
    queue.prototype.push = function(node) {
        this.list.add(node);
        
        return node;
    };
    queue.prototype.pop = function() {
        var temp = this.list.first();
        var data = temp;
        this.list.delete(temp);
        return data;
    }
    return queue;
})();

var list = new queue();
var node;
node = list.push(2);
node = list.push(6);
node = list.pop();
node = list.push(3);
node = list.push(4);
node = list.push(5);
console.log('데이터 :' + list.pop().data);
console.log('데이터 :' + list.pop().data);
console.log('데이터 :' + list.pop().data);
console.log('데이터 :' + list.pop().data);
// console.log('데이터 :' + list.pop().data);
console.log(list);