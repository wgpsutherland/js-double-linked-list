module.exports = LinkedList;

// Constructor
function LinkedList () {
    this._start = null;
    this._end = null;
    this.length = 0;
}

// Adds the data to the front of the list
LinkedList.prototype.unShift = function(data) {
    if (this._start === null) { // if the list is empty
        this._start = makeNode(data);
        this._end = this._start;
    } else {
        var temp = this._start;
        this._start.previous = makeNode(data);
        this._start = this._start.previous;
        this._start.next = temp;
    }
    this.length++;
};

// Adds the data to the end of the list
LinkedList.prototype.push = function(data) {
    if (this._start === null) { // if the list is empty
        this._start = makeNode(data);
        this._end = this._start;
    } else {
        var temp = this._end;
        this._end.next = makeNode(data);
        this._end = this._end.next;
        this._end.previous = temp;
    }
    this.length++;
};

// Adds the data to the given index in the list
LinkedList.prototype.add = function(i, data) {
    if(i === 0) {
        this.unShift(data);
    } else if(i === this.length) {
        this.push(data);
    } else {
        var node = findNode(this, i);
        if(node) {
            var before = node.previous;
            var after = node;
            var newNode = makeNode(data);
            newNode.previous = before;
            before.next = newNode;
            newNode.next = after;
            after.previous = newNode;
            this.length++;
        } else {
            // not sure how to handle failure to find the node
        }
    }
};

// Removes the first item from the list
LinkedList.prototype.shift = function() {
    if(this._start) { // if the list isn't empty
        var data = this._start.data;
        if(this._start.next === null) { // if the list is of length 1
            this._end = null;
            this._start = null;
        } else {
            this._start = this._start.next;
            this._start.previous = null;
        }
        this.length--;
        return data;
    } else {
        return undefined;
    }
};

// Removes the last item from the list
LinkedList.prototype.pop = function() {
    if(this._end) { // if the list isn't empty
        var data = this._end.data;
        if(this._end.previous === null) { // if the list is of length 1
            this._end = null;
            this._start = null;
        } else {
            this._end = this._end.previous;
            this._end.next = null;
        }
        this.length--;
        return data;
    } else {
        return undefined;
    }
};

// Remove the item at the given index in the list
LinkedList.prototype.remove = function(i) {
    if(i === 0) {
        return this.shift();
    } else if(i === this.length - 1) {
        return this.pop();
    } else {
        var node = findNode(this, i);
        if(node) {
            var before = node.previous;
            var after = node.next;
            before.next = after;
            after.previous = before;
            this.length--;
        } else {
            return undefined;
        }
    }
};

// Returns the item at the start of the list
LinkedList.prototype.first = function() {
    if(this._start) {
        return this._start.data;
    } else {
        return undefined;
    }
};

// Returns the item at the end of the list
LinkedList.prototype.last = function() {
    if(this._end) {
        return this._end.data;
    } else {
        return undefined;
    }
};

// Returns the element at the given index
LinkedList.prototype.get = function(i) {
    var node = findNode(this, i);
    if(node) {
        return node.data;
    } else {
        return undefined;
    }
};


// 'private' - create empty node
function makeNode(data) {
    return {
        data: data,
        previous: null,
        next: null
    }
}

// 'private' - locate a node at the given index
function findNode(that, i) {
    var item, j;
    if(i >= that.length || i < 0 || i % 1 !== 0) {
        item = null;
    } else if(i < (that.length / 2)) { // first -> middle
        item = that._start;
        for(j = 0; j < i; j++) {
            item = item.next;
        }
    } else { // middle <- last
        item = that._end;
        for(j = that.length - 1; j > i; j--) {
            item = item.previous;
        }
    }
    return item;
}
