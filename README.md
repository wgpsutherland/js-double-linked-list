Double Linked List
==================

A JavaScript implementation of a double linked list. Much faster than the native JS array if your focus is adding
and removing from large data sets. 

Slow if you need to randomly access elements from within the data set.

## Installation

    $ npm install double-linked-list
    
## Use

    var LinkedList = require('double-linked-list');
    
    var list = new LinkedList();
    
## Method reference

### List\#add

    list.add(item);

Add an item to the end of the list.

    list.add('one');
    list.add('two');
    list.add('three');
    console.log(list.getEnd()); // 'three'

### List\#removeFromEnd

    list.removeFromEnd();

Remove the item at the end of the list, returning the removed item.
Returns `null` if the list is empty.

    list.add('one');
    list.add('two');
    list.add('three');
    var item = list.removeFromEnd();
    console.log(item); // 'three'
    
### List\#removeFromStart

    list.removeFromStart();

Remove the item at the start of the list, returning the removed item.
Returns `null` if the list is empty.

    list.add('one');
    list.add('two');
    list.add('three');
    var item = list.removeFromStart();
    console.log(item); // 'one'
    
### List\#getStart

    list.getStart();
    
Returns the item at the start of the list.
Returns `null` if the list is empty.

    list.add('one');
    list.add('two');
    list.add('three');
    console.log(list.getStart()); // 'one'
    
### List\#getEnd

    list.getEnd();
    
Returns the item at the end of the list.
Returns `null` if the list is empty.

    list.add('one');
    list.add('two');
    list.add('three');
    console.log(list.getEnd()); // 'three'
    
### List.length

    list.length;
    
Returns the length of the list.

    list.add('one');
    list.add('two');
    list.add('three');
    console.log(list.length); // 3
    
    
## Changelog

* 0.1.1 - 30/07/2015 - Added git remotes and issues to the package.json.
* 0.1.0 - 30/07/2015 - Initial implementation with constructor, \#add, \#removeFromStart, \#removeFromEnd, \#getStart, \#getEnd, .length and all tests.
* 0.0.0 - 30/07/2015 - Initial publish with no contents.
