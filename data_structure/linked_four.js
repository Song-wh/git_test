var linked = (function () {
    function linked() {
        this.length = 0;
        this.head = null;
    }
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    linked.prototype.add = function(value, position){
        var node = new Node(value);
        count = 0;
        current = this.head;
        if(position == 0){
            this.head = node;
            this.length++
            return node;
        } else {
            while (count < position) {
                before = current;
                current = current.next;
                count++;
            }
            before = node;
            node = current;
            this.length++
            return node;
        }
    };
    linked.prototype.delete = function(position){
        count = 0;
        current = this.head;
        if(position == 0){
            this.head = current.next;
            this.length--
        } else {
            while(count < position) {
                before = current;
                current = current.next;
                count++;
            }
            before = current.next;
            this.length--
            return before;
        }
    };
    linked.prototype.next = function(position){
        count = 0;
        current = this.head;
        while (count < position) {
            current = currnet.next;
            count++;
        }
        next = current.next;
        return next.data;
    };
    linked.prototype.first = function(){
        current = this.head;
        if(!current){
            first = current.next;
        }
        return first;
    }
    return linked();
})();
var list = new linked();
list.add(2, 1);
console.log(list);