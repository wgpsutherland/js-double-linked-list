var chai = require('chai');
var expect = chai.expect;

var LinkedList = require('../index.js');

describe('testing linked-list', function () {

    describe('structure', function () {

        it('the first element should be undefined when newly created', function () {
            var list = new LinkedList();
            expect(list.first()).to.equal(undefined);
        });

        it('the last element should be undefined when newly created', function () {
            var list = new LinkedList();
            expect(list.last()).to.equal(undefined);
        });

        it('the first and last elements should be the same when there is one element in the list', function () {
            var list = new LinkedList();
            list.push('one');

            expect(list.first()).to.equal('one');
            expect(list.last()).to.equal('one');
            expect(list.last()).to.equal(list.last());
        });

        it('the first and last elements should be correct when the list consists of multiple elements', function () {
            var list = new LinkedList();
            list.push('one');
            list.push('two');
            expect(list.first()).to.equal('one');
            expect(list.last()).to.equal('two');
            list.push('three');
            expect(list.last()).to.equal('three');
        });
    });

    describe('length', function () {

        it('should have a length of 0 when newly created', function () {
            var list = new LinkedList();
            expect(list.length).to.equal(0);
        });

        it('should have the correct length when items have been added to it', function () {
            var list = new LinkedList();
            list.push('one');
            expect(list.length).to.equal(1);
            list.push('two');
            expect(list.length).to.equal(2);
            list.push('three');
            expect(list.length).to.equal(3);
        });

        it('should have the correct length when adding and removing elements from it', function () {
            var list = new LinkedList();
            list.push('one');
            list.push('two');
            expect(list.length).to.equal(2);
            list.shift();
            expect(list.length).to.equal(1);
            list.shift();
            expect(list.length).to.equal(0);
        });

        it('should not have a length below 0 if you try and remove from an empty list', function () {
            var list = new LinkedList();
            list.shift();
            expect(list.length).to.equal(0);
            list.pop();
            expect(list.length).to.equal(0);
        });
    });

    describe('#push', function () {

        it('should change the last element of the list to be the added element', function () {
            var list = new LinkedList();
            list.push('one');
            expect(list.last()).to.equal('one');
            list.push('two');
            expect(list.last()).to.equal('two');
            list.push('three');
            expect(list.last()).to.equal('three');
        });

        it('the first and last elements should be the same when added to an empty list', function () {
            var list = new LinkedList();
            list.push('one');
            expect(list.first()).to.equal('one');
            expect(list.last()).to.equal('one');
        });

        it('the length should increase by 1 when an element is pushed to the list', function () {
            var list = new LinkedList();
            expect(list.length).to.equal(0);
            list.push('one');
            expect(list.length).to.equal(1);
            list.push('two');
            expect(list.length).to.equal(2);
            list.push('three');
            expect(list.length).to.equal(3);
        });

        it('should return null if the data passed into it is null', function() {
            var list = new LinkedList();
            list.push(null);
            expect(list.first()).to.equal(null);
        });
    });

    describe('#unShift', function() {

        it('should change the first element in the list to be the added element', function() {
            var list = new LinkedList();
            list.unShift('one');
            expect(list.first()).to.equal('one');
            list.unShift('two');
            expect(list.first()).to.equal('two');
            list.unShift('three');
            expect(list.first()).to.equal('three');
        });

        it('the first and last elements should be the same when added to an empty list', function() {
            var list = new LinkedList();
            list.unShift('one');
            expect(list.first()).to.equal('one');
            expect(list.last()).to.equal('one');
        });

        it('the length should increase by 1 when an element is unShifted onto the list', function () {
            var list = new LinkedList();
            expect(list.length).to.equal(0);
            list.unShift('one');
            expect(list.length).to.equal(1);
            list.unShift('two');
            expect(list.length).to.equal(2);
            list.unShift('three');
            expect(list.length).to.equal(3);
        });

        it('the list should survive shifting and unShifting in random orders', function() {
            var list = new LinkedList();
            list.unShift('one');
            expect(list.length).to.equal(1);
            expect(list.first()).to.equal('one');
            expect(list.last()).to.equal('one');
            list.unShift('two');
            expect(list.length).to.equal(2);
            expect(list.first()).to.equal('two');
            expect(list.last()).to.equal('one');
            list.unShift('three');
            expect(list.length).to.equal(3);
            expect(list.first()).to.equal('three');
            expect(list.last()).to.equal('one');
            list.shift();
            expect(list.length).to.equal(2);
            expect(list.first()).to.equal('two');
            expect(list.last()).to.equal('one');
            list.shift();
            expect(list.length).to.equal(1);
            expect(list.first()).to.equal('one');
            expect(list.last()).to.equal('one');
            list.shift();
            expect(list.length).to.equal(0);
            expect(list.first()).to.equal(undefined);
            expect(list.last()).to.equal(undefined);
            list.unShift('four');
            list.unShift('five');
            expect(list.length).to.equal(2);
            expect(list.first()).to.equal('five');
            expect(list.last()).to.equal('four');
            list.shift();
            expect(list.length).to.equal(1);
            expect(list.first()).to.equal('four');
            expect(list.last()).to.equal('four');
        });

        it('should return null if the data passed into it is null', function() {
            var list = new LinkedList();
            list.unShift(null);
            expect(list.first()).to.equal(null);
        });
    });

    describe('#shift', function () {

        it('after shifting, the second item in the list should become the first', function () {
            var list = new LinkedList();
            list.push('one');
            list.push('two');
            list.shift();
            expect(list.first()).to.equal('two');
        });

        it('the list should survive shifting and pushing in random orders', function() {
            var list = new LinkedList();
            list.push('one');
            expect(list.length).to.equal(1);
            expect(list.first()).to.equal('one');
            expect(list.last()).to.equal('one');
            list.push('two');
            expect(list.length).to.equal(2);
            expect(list.first()).to.equal('one');
            expect(list.last()).to.equal('two');
            list.push('three');
            expect(list.length).to.equal(3);
            expect(list.first()).to.equal('one');
            expect(list.last()).to.equal('three');
            list.shift();
            expect(list.length).to.equal(2);
            expect(list.first()).to.equal('two');
            expect(list.last()).to.equal('three');
            list.shift();
            expect(list.length).to.equal(1);
            expect(list.first()).to.equal('three');
            expect(list.last()).to.equal('three');
            list.shift();
            expect(list.length).to.equal(0);
            expect(list.first()).to.equal(undefined);
            expect(list.last()).to.equal(undefined);
            list.push('four');
            list.push('five');
            expect(list.length).to.equal(2);
            expect(list.first()).to.equal('four');
            expect(list.last()).to.equal('five');
            list.shift();
            expect(list.length).to.equal(1);
            expect(list.first()).to.equal('five');
            expect(list.last()).to.equal('five');
        });

        it('should return the removed element data', function () {
            var list = new LinkedList();
            list.push('one');
            list.push('two');
            list.push('three');
            expect(list.shift()).to.equal('one');
        });

        it('should return undefined when removing from an empty list', function () {
            var list = new LinkedList();
            expect(list.shift()).to.equal(undefined);
        });

        it('should have a length of one less after shifting', function () {
            var list = new LinkedList();
            list.push('one');
            list.push('two');
            list.push('three');
            expect(list.length).to.equal(3);
            list.shift();
            expect(list.length).to.equal(2);
            list.shift();
            expect(list.length).to.equal(1);
            list.shift();
            expect(list.length).to.equal(0);
        });

        it('should return the actual reference to the object that was passed into the list', function() {
            var list = new LinkedList();
            var string = 'one';
            list.push(string);
            expect(list.shift()).to.equal(string);

            list = new LinkedList();
            var obj = {foo: 'bar'};
            list.push(obj);
            expect(list.shift()).to.equal(obj);
        });
    });

    describe('#pop', function () {

        it('after popping, the second last item in the list should become the last', function () {
            var list = new LinkedList();
            list.push('one');
            list.push('two');
            list.push('three');
            list.push('four');
            list.pop();
            expect(list.last()).to.equal('three');
        });

        it('should survive popping and adding in random orders', function() {
            var list = new LinkedList();
            list.push('one');
            expect(list.length).to.equal(1);
            expect(list.first()).to.equal('one');
            expect(list.last()).to.equal('one');
            list.push('two');
            expect(list.length).to.equal(2);
            expect(list.first()).to.equal('one');
            expect(list.last()).to.equal('two');
            list.push('three');
            expect(list.length).to.equal(3);
            expect(list.first()).to.equal('one');
            expect(list.last()).to.equal('three');
            list.pop();
            expect(list.length).to.equal(2);
            expect(list.first()).to.equal('one');
            expect(list.last()).to.equal('two');
            list.pop();
            expect(list.length).to.equal(1);
            expect(list.first()).to.equal('one');
            expect(list.last()).to.equal('one');
            list.pop();
            expect(list.length).to.equal(0);
            expect(list.first()).to.equal(undefined);
            expect(list.last()).to.equal(undefined);
            list.push('four');
            list.push('five');
            expect(list.length).to.equal(2);
            expect(list.first()).to.equal('four');
            expect(list.last()).to.equal('five');
            list.pop();
            expect(list.length).to.equal(1);
            expect(list.first()).to.equal('four');
            expect(list.last()).to.equal('four');
        });

        it('should return the removed element data', function () {
            var list = new LinkedList();
            list.push('one');
            list.push('two');
            list.push('three');
            expect(list.pop()).to.equal('three');
        });

        it('should return undefined when removing from an empty list', function () {
            var list = new LinkedList();
            expect(list.pop()).to.equal(undefined);
        });

        it('should have a length of one less after popping', function () {
            var list = new LinkedList();
            list.push('one');
            list.push('two');
            list.push('three');
            expect(list.length).to.equal(3);
            list.pop();
            expect(list.length).to.equal(2);
            list.pop();
            expect(list.length).to.equal(1);
            list.pop();
            expect(list.length).to.equal(0);
        });

        it('should return the actual reference to the object that was passed into the list', function() {
            var list = new LinkedList();
            var string = 'one';
            list.push(string);
            expect(list.pop()).to.equal(string);

            list = new LinkedList();
            var obj = {foo: 'bar'};
            list.push(obj);
            expect(list.pop()).to.equal(obj);
        });
    });

    describe('#get', function () {

        it('should return the correct item at the given index', function () {
            var list = new LinkedList();
            list.push('one');
            list.push('two');
            list.push('three');
            list.push('four');
            expect(list.get(0)).to.equal('one');
            expect(list.get(1)).to.equal('two');
            expect(list.get(2)).to.equal('three');
            expect(list.get(3)).to.equal('four');
        });

        it('should return undefined if a negative index is given', function() {
            var list = new LinkedList();
            list.push('one');
            expect(list.get(-1)).to.equal(undefined);
            expect(list.get(-10)).to.equal(undefined);
            expect(list.get(-0.1)).to.equal(undefined);
            expect(list.get(-100)).to.equal(undefined);
        });

        it('should return undefined if used on an empty list', function() {
            var list = new LinkedList();
            expect(list.get(0)).to.equal(undefined);
        });

        it('should return undefined if a decimal index is given', function() {
            var list = new LinkedList();
            list.push('one');
            list.push('two');
            list.push('three');
            list.push('four');
            list.push('five');
            expect(list.get(0.1)).to.equal(undefined);
            expect(list.get(1.5)).to.equal(undefined);
            expect(list.get(3.99999)).to.equal(undefined);
        });

        it('should return undefined if too great an index is given', function() {
            var list = new LinkedList();
            expect(list.get(0)).to.equal(undefined);
            list.push('one');
            expect(list.get(5)).to.equal(undefined);
            expect(list.get(100)).to.equal(undefined);
            expect(list.get(list.length)).to.equal(undefined);
            expect(list.get(list.length + 0.1)).to.equal(undefined);
        });

        it('should return the actual reference to the object that was passed into the list', function() {
            var list = new LinkedList();
            var string = 'one';
            list.push(string);
            expect(list.get(0)).to.equal(string);

            list = new LinkedList();
            var obj = {foo: 'bar'};
            list.push(obj);
            expect(list.get(0)).to.equal(obj);
        });

        it('when items in front are removed, the correct index of an item should change', function() {
            var list = new LinkedList();
            list.push('one');
            list.push('two');
            list.push('three');
            list.push('four');
            expect(list.get(3)).to.equal('four');
            list.shift();
            expect(list.get(2)).to.equal('four');
            list.shift();
            expect(list.get(1)).to.equal('four');
            list.shift();
            expect(list.get(0)).to.equal('four');
        });

        it('the item at index 0 should be the first item in the list', function() {
            var list = new LinkedList();
            list.push('one');
            expect(list.get(0)).to.equal(list.first());
        });

        it('the item at index list.length-1 should be the last item in the list', function() {
            var list = new LinkedList();
            list.push('one');
            list.push('two');
            list.push('three');
            expect(list.get(list.length - 1)).to.equal(list.last());
        });

        it('should return the correct item on a large list', function() {
            var list = new LinkedList();
            list.push('hello');
            list.push('hello');
            list.push('hello');
            list.push('hello');
            list.push('four'); // i = 4
            list.push('hello');
            list.push('hello');
            list.push('seven'); // i = 7
            list.push('eight'); // i = 8
            list.push('nine'); // i = 9
            list.push('hello');
            list.push('hello');
            list.push('hello');
            list.push('thirteen'); // 13
            list.push('hello');
            list.push('hello'); // list.length === 16
            expect(list.get(4)).to.equal('four');
            expect(list.get(13)).to.equal('thirteen');
            expect(list.get(7)).to.equal('seven');
            expect(list.get(8)).to.equal('eight');
            expect(list.get(9)).to.equal('nine');
            list.push('hello'); // list.length === 17
            expect(list.get(7)).to.equal('seven');
            expect(list.get(8)).to.equal('eight');
            expect(list.get(9)).to.equal('nine');
        });
    });

    describe('#add', function() {

        it('should place the item in the correct position', function() {
            var list = new LinkedList();
            list.push('one');
            list.push('two');
            list.push('three');
            list.push('four');
            list.push('five');

            list.add(1, 'new1');
            expect(list.get(1)).to.equal('new1');
            list.add(3, 'new3');
            expect(list.get(3)).to.equal('new3');
            list.add(4, 'new4');
            expect(list.get(4)).to.equal('new4');
        });

        it('adding to index 0 should make the item the first in the list', function() {
            var list = new LinkedList();
            list.push('one');
            list.add(0, 'new1');
            expect(list.first()).to.equal('new1');
        });

        it('adding to an index of less than 0 should make the item the first in the list', function() {
            var list = new LinkedList();
            list.push('one');
            list.add(-1, 'new1');
            expect(list.first()).to.equal('new1');
            list.add(-5, 'new2');
            expect(list.first()).to.equal('new2');
            list.add(-100, 'new3');
            expect(list.first()).to.equal('new3');
        });

        it('adding to index list.length should make the item the last in the list', function() {
            var list = new LinkedList();
            list.push('one');
            list.add(list.length, 'new1');
            expect(list.last()).to.equal('new1');
        });

        it('adding to a decimal index should do nothing', function() {
            var list = new LinkedList();
            list.push('one');
            list.add(1.1, 'new1');
            list.add(0.1, 'new1');
            list.add(-5.7, 'new1');
            expect(list.length).to.equal(1);
            expect(list.first()).to.equal('one');
            expect(list.last()).to.equal('one');
        });

        it('adding to an index larger than the length of the list should add to the end', function() {
            var list = new LinkedList();
            list.push('one');
            list.add(list.length + 1, 'new1');
            expect(list.last()).to.equal('new1');
            list.add(10, 'new2');
            expect(list.last()).to.equal('new2');
            list.add(100, 'new3');
            expect(list.last()).to.equal('new3');
        });

        it('should move the other items in the list correctly', function() {
            var list = new LinkedList();
            list.push('one');
            list.push('two');
            list.push('three');
            list.add(1, 'hello');
            expect(list.get(0)).to.equal('one');
            expect(list.get(1)).to.equal('hello');
            expect(list.get(2)).to.equal('two');
            expect(list.get(3)).to.equal('three');
        });

        it('should increase the length by one', function() {
            var list = new LinkedList();
            list.add(0, 'one');
            list.add(0, 'two');
            list.add(0, 'three');
            expect(list.length).to.equal(3);
        });
    });

    describe('#remove', function() {

        it('should remove the correct item', function() {
            var list = new LinkedList();
            list.push('one');
            list.push('two');
            list.push('three');
            list.push('four');
            list.push('five');
            expect(list.remove(4)).to.equal('five');
            expect(list.remove(3)).to.equal('four');
            expect(list.remove(2)).to.equal('three');
            expect(list.remove(1)).to.equal('two');
            expect(list.remove(0)).to.equal('one');
        });

        it('should move the positions of the items after it', function() {
            var list = new LinkedList();
            list.push('one');
            list.push('two');
            list.push('three');
            list.push('four');
            list.push('five');
            list.remove(1);
            expect(list.get(0)).to.equal('one');
            expect(list.get(1)).to.equal('three');
            expect(list.get(2)).to.equal('four');
        });

        it('removing from index 0 should change the first item in the list', function() {
            var list = new LinkedList();
            list.push('one');
            list.push('two');
            list.push('three');
            list.remove(0);
            expect(list.first()).to.equal('two');
        });

        it('removing from index list.length should change the last item in the list', function() {
            var list = new LinkedList();
            list.push('one');
            list.push('two');
            list.push('three');
            list.remove(list.length - 1);
            expect(list.last()).to.equal('two');
        });

        it('should decrease the length by one', function() {
            var list = new LinkedList();
            list.push('one');
            list.push('two');
            list.push('three');
            expect(list.length).to.equal(3);
            list.remove(2);
            expect(list.length).to.equal(2);
            list.remove(1);
            expect(list.length).to.equal(1);
            list.remove(0);
            expect(list.length).to.equal(0);
        });

        it('should return undefined if removing from the empty list', function() {
            var list = new LinkedList();
            expect(list.remove(0)).to.equal(undefined);
        });

        it('should return undefined if removing from a non existent index in the list', function() {
            var list = new LinkedList();
            list.push('one');
            list.push('two');
            list.push('three');
            expect(list.remove(3)).to.equal(undefined);
            expect(list.remove(-1)).to.equal(undefined);
            expect(list.remove(100)).to.equal(undefined);
        });

        it('should return undefined if removing from a decimal index', function() {
            var list = new LinkedList();
            list.push('one');
            list.push('two');
            list.push('three');
            expect(list.remove(0.1)).to.equal(undefined);
            expect(list.remove(1.4)).to.equal(undefined);
            expect(list.remove(-1.1)).to.equal(undefined);
            expect(list.remove(3.00000001)).to.equal(undefined);
            expect(list.remove(2.99999999)).to.equal(undefined);
        });

        it('should return the actual reference to the object that was passed into the list', function() {
            var list = new LinkedList();
            var string = 'one';
            list.push(string);
            expect(list.remove(0)).to.equal(string);

            list = new LinkedList();
            var obj = {foo: 'bar'};
            list.push(obj);
            expect(list.remove(0)).to.equal(obj);
        });
    });

    describe('#toString', function() {

        it('should return the list in a nice format', function() {
            var list = new LinkedList();
            list.push('one');
            list.push('two');
            list.push('three');
            expect(list.toString()).to.equal("one, two, three");
        });

        it('should return an object in a readable format', function() {
            var list = new LinkedList();
            list.push({
                one: "2"
            });
            list.push({
                two: "2"
            });
            expect(list.toString()).to.equal('{"one":"2"}, {"two":"2"}');
        });

        it('should return the empty string if the list is empty', function() {
            var list = new LinkedList();
            expect(list.toString()).to.equal("");
        });
    });

    describe('time testing to see how it handles large lists', function() {

        var iterations = 100000;

        it('testing the LinkedList', function() {
            var startTime = new Date();
            var list = new LinkedList();
            for(var i = 0; i < iterations; i++) {
                list.push('item');
            }
            for(i = 0; i < iterations; i++) {
                list.shift();
            }
            var endTime = new Date();
            var time = endTime.getTime() - startTime.getTime();
            console.log("linked list time: %sms", time);
        });

        it('testing the js array', function() {
            var startTime = new Date();
            var list = [];
            for(var i = 0; i < iterations; i++) {
                list.push('item');
            }
            for(i = 0; i < iterations; i++) {
                list.shift();
            }
            var endTime = new Date();
            var time = endTime.getTime() - startTime.getTime();
            console.log("js array time: %sms", time);
        });
    });
});
