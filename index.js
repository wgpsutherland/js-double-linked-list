module.exports = LinkedList;

function makeNode() {
    return {
        data: null,
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
LinkedList.prototype.add = function(data) {
    if (this._start === null) {
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

// Removes the last item from the list
LinkedList.prototype.removeFromEnd = function() {
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
        return null;
    }
};

// Removes the first item from the list
LinkedList.prototype.removeFromStart = function() {
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
        return null;
    }
};

// Returns the item at the start of the list
LinkedList.prototype.getStart = function() {
    if(this._start) {
        return this._start.data;
    } else {
        return null;
    }
};

// Returns the item at the end of the list
LinkedList.prototype.getEnd = function() {
    if(this._end) {
        return this._end.data;
    } else {
        return null;
    }
};
