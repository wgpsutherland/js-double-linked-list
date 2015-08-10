//==================== CONSTRUCTOR =======================//

var LinkedList = module.exports = function () {
    this._start = this._end = null;
    this.length = 0;
};

//==================== PRIVATE ===========================//

// Create empty node
var makeNode = function (data) {
    return {
        data: data,
        previous: null,
        next: null
    }
};

// Locate a node at the given index
var findNode = function (i) {
    var item, j;
    if (i >= this.length || i < 0 || i % 1 !== 0) {
        item = null;
    } else if (i < (this.length / 2)) { // first -> middle
        item = this._start;
        for (j = 0; j < i; j++) {
            item = item.next;
        }
    } else { // middle <- last
        item = this._end;
        for (j = this.length - 1; j > i; j--) {
            item = item.previous;
        }
    }
    return item;
};

// Place a new node at the end of the list specified by the inputs
var placeEnd = function (data, end, n1, n2) {
    if (this._start) {
        var temp = this[end];
        this[end][n1] = makeNode(data);
        this[end] = this[end][n1];
        this[end][n2] = temp;
    } else { // the list is empty
        this._start = this._end = makeNode(data);
    }
    this.length++;
};

// Removes the node at the given end of the list
var removeEnd = function (end, n1, n2) {
    if (this[end]) { // if the list isn't empty
        var data = this[end].data;
        if (this[end][n1] === null) { // if the list is of length 1
            this._end = this._start = null;
        } else {
            this[end] = this[end][n1];
            this[end][n2] = null;
        }
        this.length--;
    }
    return data; // will be undefined if the list is empty
};

// Gets the given end's data if it exists
var getEnd = function (end) {
    if (this[end]) var x = this[end].data;
    return x; // will be undefined if the list is empty
};

//==================== PUBLIC ===========================//

LinkedList.prototype = {

    // Adds the data to the front of the list
    unShift: function (data) {
        placeEnd.call(this, data, '_start', 'previous', 'next')
    },

    // Adds the data to the end of the list
    push: function (data) {
        placeEnd.call(this, data, '_end', 'next', 'previous')
    },

    // Adds the data to the given index in the list
    add: function (i, data) {
        if (i % 1 !== 0) {
            // do nothing
        } else if (i <= 0) {
            this.unShift(data);
        } else if (i >= this.length) {
            this.push(data);
        } else {
            var node = findNode.call(this, i);
            if (node) {
                var before = node.previous;
                var after = node;
                var newNode = makeNode(data);
                newNode.previous = before;
                newNode.next = after;
                before.next = after.previous = newNode;
                this.length++;
            }
        }
    },

    // Removes the first item from the list
    shift: function () {
        return removeEnd.call(this, '_start', 'next', 'previous');
    },

    // Removes the last item from the list
    pop: function () {
        return removeEnd.call(this, '_end', 'previous', 'next');
    },

    // Remove the item at the given index in the list
    remove: function (i) {
        if (i === 0) {
            return this.shift();
        } else if (i === this.length - 1) {
            return this.pop();
        } else {
            var node = findNode.call(this, i);
            if (node) {
                var before = node.previous;
                var after = node.next;
                before.next = after;
                after.previous = before;
                this.length--;
            } else {
                return undefined;
            }
        }
    },

    // Returns the item at the start of the list
    first: function () {
        return getEnd.call(this, '_start');
    },

    // Returns the item at the end of the list
    last: function () {
        return getEnd.call(this, '_end');
    },

    // Returns the element at the given index
    get: function (i) {
        var node = findNode.call(this, i);
        if (node) {
            return node.data;
        } else {
            return undefined;
        }
    },

    // Returns the list in a printable format
    toString: function () {
        var item = this._start;
        var string = "";
        for (var i = 0; i < this.length; i++) {
            if (typeof item.data === "object") {
                string += JSON.stringify(item.data);
            } else {
                string += item.data;
            }
            if (i !== this.length - 1) string += ', ';
            item = item.next;
        }
        return string;
    }
};
