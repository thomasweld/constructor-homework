// Get Our Constructors
import Dog from './constructors/dog';
import Human from './constructors/human';

// Get Our Test Suite & Tests
import testRunner from './testing/tests';

/*
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!  Do Not Write Anything In This File
!!!  Only Write in the `/constructors/` folder
!!!  Use the instance creation below to base your code off of
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/

// Create Some Dogs
let sadie = new Dog({ color: "black", hungry: false });
let moonshine = new Dog({ color: "blue-red" });
let atticus = new Dog();

// Create Some Humans
let mason = new Human();
let julia = new Human({ cool: true });

// Run Our Tests
testRunner(sadie, moonshine, atticus, mason, julia);