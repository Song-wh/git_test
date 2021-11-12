var linked_list = (function () {
    function linked_list() {
        this.length = 0;
        this.head = null;
    }

    function Node(data) {
        this.data = data;
        this.next = null;
    }
    linked_list.prototype.add = function (data, prev) {
        var node = new Node(data);
        var current = this.head;
        if (current == null) {
            this.head = node;
            this.length++;
            return node;
        }
        while (current.next) {
            current = current.next;
            if (prev == current) {
                node.next = current.next;
                current.next = node;
                this.length++
                return node;
            }
        }
        current.next = node;
        this.length++;
        return node;
    };
    linked_list.prototype.first = function () {
        if(this.head == null){
            console.error('리스트가 존재하지 않습니다.')
        }
        return this.head;
    };
    linked_list.prototype.next = function (node) {
        if(node.next == null){
            return console.error('다음 노드가 존재하지 않습니다.')
        }
        return node.next;
    };
    linked_list.prototype.tail = function () {
        var current = this.head;
        if (current == null) {
            return current;
        }
        while (current !== null) {
            prev = current
            current = current.next;
        }
        return prev;
    }
    linked_list.prototype.delete = function (node) {
        var current = this.head;
        if (this.length < 1) {
            return console.error('삭제할 리스트가 존재하지 않습니다.');
        }
        if(current == node){
            this.head = current.next;
            this.length--;
            return node;
        }
        while(current !== node) {
            prev = current;
            current = current.next;
            if (current == null) {
                return console.error('삭제할 노드는 리스트에 존재하지 않습니다.');
            } else if (current == node) {
                prev.next = current.next;
                this.length--;
                return node;
            }
        }
    };
    return linked_list;
})();
var list = new linked_list();
var node;

list.delete(null);
node = list.add('z');
node = list.add('x');
node = list.add('c');
node = list.add('v');

console.log("linked : 1111111111111111111111111"); {
    var del = null;
    
    var node = list.first();
    while (node) {
        console.log("node:", node.data);
        if (node.data == 'v') {
            del = node;
        }
        node = list.next(node);
    }
    list.delete(del);
    
    list.delete(list.first());
    list.delete(null);
    node = list.add('oo');
    var temp = node;
    node = list.add('ww');
    node = list.add('xx');
    node = list.add('tt', temp);
    list.delete(list.tail());   
}

console.log("linked : 2222222222222222222222222"); {
    var node = list.first();
    while (node) {
        console.log("node:", node.data);
        node = list.next(node);
    }
    console.log();
}


var queue_list = new linked_list();
node = queue_list.add('z');
node = queue_list.add('x');
node = queue_list.add('c');
node = queue_list.add('v');
console.log("queue_list : 111111111111111111"); {
    var node = queue_list.first();
    while (node) {
        console.log("node:", node.data);
        node = queue_list.next(node);
    }
    node = queue_list.add('b');
    temp = queue_list.first();
    node = queue_list.delete(temp);
}

console.log("queue_list : 22222222222222222"); {
    var node = queue_list.first();
    while (node) {
        console.log("node:", node.data);
        node = queue_list.next(node);
    }
    console.log();
}

var stack_list = new linked_list();

node = stack_list.add('z');
node = stack_list.add('x');
node = stack_list.add('c');
console.log("stack_list : 111111111111111111"); {
    var node = stack_list.first();
    while (node) {
        console.log("node:", node.data);
        node = stack_list.next(node);
    }
    node = stack_list.add('v');
    node = stack_list.add('b');
    temp = stack_list.tail();
    node = stack_list.delete(temp);
}
console.log("stack_list : 22222222222222222"); {
    var node = stack_list.first();
    while (node) {
        console.log("node:", node.data);
        node = stack_list.next(node);
    }
}

