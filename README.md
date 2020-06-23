### Object literal with some properties. We need to do is calculate the average height of a set of people using JavaScript.
```
const data = {
  "Matt": { "height" : 176, "weight": 87 },
  "Jason": { "height" : 190, "weight": 103 },
  "Peter": { "height" : 180, "weight": 98 }
};
```

#### Using a for...in loop statement
The value of the data constant is a reference to an Object instance, which inherits properties from Object.prototype. As the for...in statement iterates over the enumerable properties of an Object, including those inherited from its prototype chain, we'll need to use the hasOwnProperty() method so that inherited properties are not considered.
```
var count = 0, sumHeight = 0;
for (var key in data) {
 if (data.hasOwnProperty(key)) {
   if (data[key].hasOwnProperty("height")) {
     sumHeight += data[key].height;
     count += 1;
   }
 }
}
console.log(sumHeight/count);  // 182
```
#### Using Object.values() and the reduce() method
The Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well). For example, Object.values(data) will return the following array:
```
[ { height: 176, weight: 87 },
  { height: 190, weight: 103 },
  { height: 180, weight: 98 } ]
```
#### The reduce()method
applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. This method will execute the callback function in different ways, depending on the existence of the optional initialValue argument.

If we don't provide an initialValue, the callback function should return an Object for the next call within reduce(). For instance:
```
var arr = Object.values(data);
var sum = (prev, cur) => ({height: prev.height + cur.height});
var avg = arr.reduce(sum).height / arr.length;
console.log(avg); // 182
```
And if we provide an initialValue of 0, reduce() will invoke the callback function differently:
```
var arr = Object.values(data);
var sum = (accumulator, obj) => accumulator + obj.height;
var avg = arr.reduce(sum, 0) / arr.length;
console.log(avg); // 182
```
#### Using Object.keys()
The Object.keys() method returns an array that contains the names of the own enumerable properties of the object. For instance, Object.keys(data) will return the following array:
```
['Matt', 'Jason', 'Peter']
So, let's write the code using that method:

var arr = Object.keys(data);
var getHeight = key => data[key]["height"];
var avg = arr.reduce((a,c) => a + getHeight(c), 0) / arr.length;
console.log(avg); // 182
```
#### Using Object.entries()
The Object.entries() method returns an array that contains the [key, value] pairs of the own enumerable properties of the object. Then using Object.entries(data) will return the following array:
```
[ [ 'Matt', { height: 176, weight: 87 } ],
  [ 'Jason', { height: 190, weight: 103 } ],
  [ 'Peter', { height: 180, weight: 98 } ] ]
 ``
Now let's write the code using the array returned by the Object.entries() method:

var heights = Object.entries(data).map(el => el[1].height);
var avg2 = heights.reduce((a,c) => a + c) / heights.length;
console.log(avg2); // 182
