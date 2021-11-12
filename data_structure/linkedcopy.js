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
module.exports = linked_list;
