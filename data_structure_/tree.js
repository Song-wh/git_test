var Tree = (function () {
    function Tree() {
        this.length = 0;
        this.root = null;
    }

    function Node(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    function _insert(root, node) {
        if (root == null) {
            return node;
        }
        if (node.data == root.data){
            return node;
        }
        if (node.data < root.data) {
            root.left = _insert(root.left, node);
            return root;
        } else {
            root.right = _insert(root.right, node);
            return root;
        }
    }
    Tree.prototype.add = function (data) {
        var node = new Node(data);
        if (this.length == 0) {
            this.root = node;
        } else {
            _insert(this.root, node);
        }
        this.length++;
        return node;
    };

    function _get(data, node) {
        if (node !== null) {
            if (data < node.data) {
                return _get(data, node.left);
            } else if (data > node.data) {
                return _get(data, node.right);
            } else {
                return node;
            }
        } else {
            return null;
        }
    }
    Tree.prototype.get = function (data) {
        if (this.root !== null) {
            return _get(data, this.root);
        } else {
            return null;
        }
    };

    function _remove(root, data) {
        var newRoot, exchange, temp;
        if (root == null) return false;
        if (data < root.data) {
            root.left = _remove(root.left, data);
        } else if (data > root.data) {
            root.right = _remove(root.right, data);
        } else {
            if (root.left == null) {
                newRoot = root.right;
                return newRoot;
            } else if (root.right == null) {
                newRoot = root.left;
                return newRoot;
            } else {
                exchange = root.left;
                while (exchange.right !== null) exchange = exchange.right;
                temp = root.data;
                root.data = exchange.data;
                exchange.data = temp;
                root.left = _remove(root.left, exchange.data);
            }
        }
        return root;
    }
    Tree.prototype.remove = function (value) {
        var node = _remove(this.root, value);
        if (node !== null) {
            this.root = node;
            this.length--;
            if (this.length == 0) this.root = null;
        }
        return true;
    };
    Tree.prototype.first = function () {
        if(this.root == null){
            console.error('리스트가 존재하지 않습니다.')
        }
        return this.root;
    };
    return Tree;
})();

var tree = new Tree();
var node;
node = tree.add(5);
node = tree.add(3);
node = tree.add(4);
node = tree.add(2);
node = tree.add(7);
node = tree.add(6);
node = tree.add(2);
node = tree.add(9);
data = tree.get(3);
tree.remove(9);
console.log(tree.first());

/*console.log("treeeeeeeeeeeeeeeeeee"); {
    var node = tree.first();
    console.log('root :' + node.data);
    index = 0;
    while (node !== null) {
        right = node.right;
        node = node.left;
        index++;
        if(node == null){
            node = 'undefind';
        }
        if(right == null){
            right = 'undefind';
        }
        console.log('node' + index + ' :' + node.data + ' ' + right.data);
    }
}*/