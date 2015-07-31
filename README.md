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
* [`unShift`](#unshift)   
* [`pop`](#pop)   
* [`shift`](#shift)   
* [`first`](#first)   
* [`last`](#last)   
* [`get`](#get)   
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

    list.pop();

Remove the item at the end of the list, returning the removed item.
Returns `undefined` if the list is empty.

    list.push('one');
    list.push('two');
    list.push('three');
    var item = list.pop();
    console.log(item); // 'three'
    
#### \#shift

    list.shift();

Remove the item at the start of the list, returning the removed item.
Returns `undefined` if the list is empty.

    list.push('one');
    list.push('two');
    list.push('three');
    var item = list.shift();
    console.log(item); // 'one'
    
#### \#first

    list.first();
    
Returns the item at the start of the list.
Returns `undefined` if the list is empty.

    list.push('one');
    list.push('two');
    list.push('three');
    console.log(list.first()); // 'one'
    
#### \#last

    list.last();
    
Returns the item at the end of the list.
Returns `undefined` if the list is empty.

    list.push('one');
    list.push('two');
    list.push('three');
    console.log(list.last()); // 'three'
    
#### \#get

    list.get(i);
    
Returns the item at the given index.
Returns `undefined` if an invalid value is given.

    list.push('one');
    list.push('two');
    list.push('three');
    console.log(list.get(0)); // 'one'
    console.log(list.get(1)); // 'two'
    console.log(list.get(2)); // 'three'
    
#### .length

    list.length;
    
Returns the length of the list.

    list.push('one');
    list.push('two');
    list.push('three');
    console.log(list.length); // 3
    
    
## Changelog

* 2.0.x - 31/07/2015:
    * Add some keywords to the package.json. (2.0.2)
    * Edit formatting of changelog. (2.0.2)
    * Make the get function faster by implementing back to front search. (2.0.1)
    * \+ \# get (2.0.0)
    * \+ \# get tests (2.0.0)
    * Return `undefined` if the data doesn't exist instead of `null`. (2.0.0)
    * Add get function to the documentation. (2.0.0)
* 1.1.x - 30/07/2015:
    * Add navigation to the README. (1.1.3)
    * Small change to some errors in the README. (1.1.2)
    * Add unShift function to the documentation. (1.1.1)
    * \+ \# unShift (1.1.0)
    * \+ \# unShift tests (1.1.0)
* 1.0.x - 30/07/2015:
    * Rename all function names: (1.0.0)
        * \# add -> \# push
        * \# removeFromStart -> \# shift
        * \# removeFromEnd -> \# pop
        * \# getStart -> \# first
        * \# getEnd -> \# last
    * Update the README formatting and information within.
* 0.1.x - 30/07/2015:
    * Added git remotes and issues to the package.json. (0.1.1)
    * Initial implementation with: (0.1.0)
        * Constructor
        * \# add
        * \# removeFromStart
        * \# removeFromEnd
        * \# getStart
        * \# getEnd
        * .length
        * Passing tests
* 0.0.x - 30/07/2015 - Initial publish with no contents. (0.0.0)
