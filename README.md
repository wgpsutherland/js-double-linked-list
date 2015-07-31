Double Linked List
==================

A JavaScript implementation of a double linked list. Much faster than the native JS array if your focus is adding
and removing from large data sets. 

Slow if you need to randomly access elements from within the data set.

* [`Installation`](#installation)   
* [`Use`](#use)   
* [`Documentation`](#documentation)   
* [`Changelog`](#changelog)   

## Installation

    $ npm install double-linked-list
    
## Use

    var LinkedList = require('double-linked-list');
    
    var list = new LinkedList();
    
## Documentation
    
* [`push`](#push)   
* [`unShift`](#unShift)   
* [`pop`](#pop)   
* [`shift`](#shift)   
* [`first`](#first)   
* [`last`](#last)   
* [`length`](#length)   

### Method reference

#### \#push

    list.push(item);

Add an item to the end of the list.

    list.push('one');
    list.push('two');
    list.push('three');
    console.log(list.last()); // 'three'
    console.log(list.first()); // 'one'
    
#### \#unShift

    list.unShift(item);

Add an item to the start of the list.

    list.unShift('one');
    list.unShift('two');
    list.unShift('three');
    console.log(list.first()); // 'three'
    console.log(list.last()); // 'one'

#### \#pop

    list.removeFromEnd();

Remove the item at the end of the list, returning the removed item.
Returns `null` if the list is empty.

    list.push('one');
    list.push('two');
    list.push('three');
    var item = list.pop();
    console.log(item); // 'three'
    
#### \#shift

    list.removeFromStart();

Remove the item at the start of the list, returning the removed item.
Returns `null` if the list is empty.

    list.push('one');
    list.push('two');
    list.push('three');
    var item = list.shift();
    console.log(item); // 'one'
    
#### \#first

    list.getStart();
    
Returns the item at the start of the list.
Returns `null` if the list is empty.

    list.push('one');
    list.push('two');
    list.push('three');
    console.log(list.first()); // 'one'
    
#### \#last

    list.getEnd();
    
Returns the item at the end of the list.
Returns `null` if the list is empty.

    list.push('one');
    list.push('two');
    list.push('three');
    console.log(list.last()); // 'three'
    
#### .length

    list.length;
    
Returns the length of the list.

    list.push('one');
    list.push('two');
    list.push('three');
    console.log(list.length); // 3
    
    
## Changelog

* 1.1.0 - 30/07/2015:
    * \+ \# unShift
    * \+ \# unShift tests
* 1.0.0 - 30/07/2015:
    * Rename all function names:
        * \# add -> \# push
        * \# removeFromStart -> \# shift
        * \# removeFromEnd -> \# pop
        * \# getStart -> \# first
        * \# getEnd -> \# last
    * Update the README formatting and information within.
* 0.1.1 - 30/07/2015:
    * Added git remotes and issues to the package.json.
* 0.1.0 - 30/07/2015:
    * Initial implementation with: 
        * Constructor
        * \# add
        * \# removeFromStart
        * \# removeFromEnd
        * \# getStart
        * \# getEnd
        * .length
        * Passing tests
* 0.0.0 - 30/07/2015 - Initial publish with no contents.
