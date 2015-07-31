module.exports = LinkedList;

function makeNode() {
    return {
        previous: null,
        next: null
    }
}

function LinkedList () {
    this._start = null;
    this._end = null;
    this.length = 0;
}

// Adds the data to the end of the list
LinkedList.prototype.push = function(data) {
    if (this._start === null) { // if the list is empty
        this._start = makeNode();
        this._end = this._start;
    } else {
        var temp = this._end;
        this._end.next = makeNode();
        this._end = this._end.next;
        this._end.previous = temp;
    }
    this._end.data = data;
    this.length++;
};

// Adds the data to the front of the list
LinkedList.prototype.unShift = function(data) {
    if (this._start === null) { // if the list is empty
        this._start = makeNode();
        this._end = this._start;
    } else {
        var temp = this._start;
        this._start.previous = makeNode();
        this._start = this._start.previous;
        this._start.next = temp;
    }
    this._start.data = data;
    this.length++;
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
    if(i >= this.length || i < 0 || i % 1 !== 0) {
        return undefined;
    } else {
        var item = this._start;
        for(var j = 0; j < i; j++) {
            item = item.next;
        }
        return item.data;
    }
};
