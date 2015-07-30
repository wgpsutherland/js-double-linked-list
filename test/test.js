var chai = require('chai');
var expect = chai.expect;

var LinkedList = require('../index.js');

describe('testing linked-list', function () {

    describe('structure', function () {

        it('should have a start of null when newly created', function () {
            var list = new LinkedList();
            expect(list.getStart()).to.equal(null);
        });

        it('should have an end of null when newly created', function () {
            var list = new LinkedList();
            expect(list.getEnd()).to.equal(null);
        });

        it('should have the same start and end when consisting of one element', function () {
            var list = new LinkedList();
            list.add('one');
            expect(list.getStart()).to.equal('one');
            expect(list.getEnd()).to.equal('one');
            expect(list.getEnd()).to.equal(list.getEnd());
        });

        it('should have the correct start and end when it has multiple elements', function () {
            var list = new LinkedList();
            list.add('one');
            list.add('two');
            expect(list.getStart()).to.equal('one');
            expect(list.getEnd()).to.equal('two');
            list.add('three');
            expect(list.getEnd()).to.equal('three');
        });
    });

    describe('length', function () {

        it('should have a length of 0 when newly created', function () {
            var list = new LinkedList();
            expect(list.length).to.equal(0);
        });

        it('should have the correct length when items have been added to it', function () {
            var list = new LinkedList();
            list.add('one');
            expect(list.length).to.equal(1);
            list.add('two');
            expect(list.length).to.equal(2);
            list.add('three');
            expect(list.length).to.equal(3);
        });

        it('should have the correct length when adding and removing elements from it', function () {
            var list = new LinkedList();
            list.add('one');
            list.add('two');
            expect(list.length).to.equal(2);
            list.removeFromStart();
            expect(list.length).to.equal(1);
            list.removeFromStart();
            expect(list.length).to.equal(0);
        });

        it('should not have a length below 0 if you try and remove from an empty list', function () {
            var list = new LinkedList();
            list.removeFromStart();
            expect(list.length).to.equal(0);
            list.removeFromEnd();
            expect(list.length).to.equal(0);
        });
    });

    describe('#add', function () {

        it('should change the end of the list to be the added element', function () {
            var list = new LinkedList();
            list.add('one');
            expect(list.getEnd()).to.equal('one');
            list.add('two');
            expect(list.getEnd()).to.equal('two');
            list.add('three');
            expect(list.getEnd()).to.equal('three');
        });

        it('should have the same start and end when added to an empty list', function () {
            var list = new LinkedList();
            list.add('one');
            expect(list.getStart()).to.equal('one');
            expect(list.getEnd()).to.equal('one');
        });

        it('should have a length of one more when added to', function () {
            var list = new LinkedList();
            expect(list.length).to.equal(0);
            list.add('one');
            expect(list.length).to.equal(1);
            list.add('two');
            expect(list.length).to.equal(2);
            list.add('three');
            expect(list.length).to.equal(3);
        })
    });

    describe('#removeFromStart', function () {

        it('after removing from the start, the second item in the list should become the start', function () {
            var list = new LinkedList();
            list.add('one');
            list.add('two');
            list.removeFromStart();
            expect(list.getStart()).to.equal('two');
        });

        it('should survive removing and adding in random orders', function() {
            var list = new LinkedList();
            list.add('one');
            expect(list.length).to.equal(1);
            expect(list.getStart()).to.equal('one');
            expect(list.getEnd()).to.equal('one');
            list.add('two');
            expect(list.length).to.equal(2);
            expect(list.getStart()).to.equal('one');
            expect(list.getEnd()).to.equal('two');
            list.add('three');
            expect(list.length).to.equal(3);
            expect(list.getStart()).to.equal('one');
            expect(list.getEnd()).to.equal('three');
            list.removeFromStart();
            expect(list.length).to.equal(2);
            expect(list.getStart()).to.equal('two');
            expect(list.getEnd()).to.equal('three');
            list.removeFromStart();
            expect(list.length).to.equal(1);
            expect(list.getStart()).to.equal('three');
            expect(list.getEnd()).to.equal('three');
            list.removeFromStart();
            expect(list.length).to.equal(0);
            expect(list.getStart()).to.equal(null);
            expect(list.getEnd()).to.equal(null);
            list.add('four');
            list.add('five');
            expect(list.length).to.equal(2);
            expect(list.getStart()).to.equal('four');
            expect(list.getEnd()).to.equal('five');
            list.removeFromStart();
            expect(list.length).to.equal(1);
            expect(list.getStart()).to.equal('five');
            expect(list.getEnd()).to.equal('five');
        });

        it('should return the removed element data', function () {
            var list = new LinkedList();
            list.add('one');
            list.add('two');
            list.add('three');
            expect(list.removeFromStart()).to.equal('one');
        });

        it('should return null when removing from an empty list', function () {
            var list = new LinkedList();
            expect(list.removeFromStart()).to.equal(null);
        });

        it('should have a length of one less after removing', function () {
            var list = new LinkedList();
            list.add('one');
            list.add('two');
            list.add('three');
            expect(list.length).to.equal(3);
            list.removeFromStart();
            expect(list.length).to.equal(2);
            list.removeFromStart();
            expect(list.length).to.equal(1);
            list.removeFromStart();
            expect(list.length).to.equal(0);
        });
    });

    describe('#removeFromEnd', function () {

        it('after removing from the end, the second last item in the list should become the end', function () {
            var list = new LinkedList();
            list.add('one');
            list.add('two');
            list.add('three');
            list.add('four');
            list.removeFromEnd();
            expect(list.getEnd()).to.equal('three');
        });

        it('should survive removing and adding in random orders', function() {
            var list = new LinkedList();
            list.add('one');
            expect(list.length).to.equal(1);
            expect(list.getStart()).to.equal('one');
            expect(list.getEnd()).to.equal('one');
            list.add('two');
            expect(list.length).to.equal(2);
            expect(list.getStart()).to.equal('one');
            expect(list.getEnd()).to.equal('two');
            list.add('three');
            expect(list.length).to.equal(3);
            expect(list.getStart()).to.equal('one');
            expect(list.getEnd()).to.equal('three');
            list.removeFromEnd();
            expect(list.length).to.equal(2);
            expect(list.getStart()).to.equal('one');
            expect(list.getEnd()).to.equal('two');
            list.removeFromEnd();
            expect(list.length).to.equal(1);
            expect(list.getStart()).to.equal('one');
            expect(list.getEnd()).to.equal('one');
            list.removeFromEnd();
            expect(list.length).to.equal(0);
            expect(list.getStart()).to.equal(null);
            expect(list.getEnd()).to.equal(null);
            list.add('four');
            list.add('five');
            expect(list.length).to.equal(2);
            expect(list.getStart()).to.equal('four');
            expect(list.getEnd()).to.equal('five');
            list.removeFromEnd();
            expect(list.length).to.equal(1);
            expect(list.getStart()).to.equal('four');
            expect(list.getEnd()).to.equal('four');
        });

        it('should return the removed element data', function () {
            var list = new LinkedList();
            list.add('one');
            list.add('two');
            list.add('three');
            expect(list.removeFromEnd()).to.equal('three');
        });

        it('should return null when removing from an empty list', function () {
            var list = new LinkedList();
            expect(list.removeFromEnd()).to.equal(null);
        });

        it('should have a length of one less after removing', function () {
            var list = new LinkedList();
            list.add('one');
            list.add('two');
            list.add('three');
            expect(list.length).to.equal(3);
            list.removeFromEnd();
            expect(list.length).to.equal(2);
            list.removeFromEnd();
            expect(list.length).to.equal(1);
            list.removeFromEnd();
            expect(list.length).to.equal(0);
        });
    });

    describe('time testing to see how it handles large lists', function() {

        var iterations = 100000;

        it('testing the LinkedList', function() {
            var startTime = new Date();
            var list = new LinkedList();
            for(var i = 0; i < iterations; i++) {
                list.add('item');
            }
            for(i = 0; i < iterations; i++) {
                list.removeFromStart();
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
