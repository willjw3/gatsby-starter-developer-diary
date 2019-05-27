---
title: 'JavaScript Regular Expressions and the Test() Method'
tags: ["javascript"]
published: true
date: '2019-01-06'
---

[Video at YouTube](https://youtu.be/vAP8NLDzGwc). <br>
[Source code and original post at GitHub](https://github.com/willjw3/Coding-Tutorials/tree/master/JavaScript-Regular-Expressions-And-Test-Method). <br>

<iframe width="560" height="315" src="https://www.youtube.com/embed/vAP8NLDzGwc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Using the `test()` method in JavaScript to check for matches between a regular expression and a string can lead to unexpected results for newcomers.<br> Consider the following code:
### noGlobalFlag.js
---
```
let str1 = "The sun is out today.";
let str2 = "Let's go for a run today."
let str3 = "Regular expressions can sometimes be fun."
let str4 = "A hot dog without a bun ain't no fun."
let unRegex = /.un/;
console.log(unRegex.test(str1));

console.log(unRegex.test(str2));

console.log(unRegex.test(str3));

console.log(unRegex.test(str4));
```
---

When we run it and check the console, we see:

---
```
true
true
true
true
[Finished in 0.883s]
```
---

For each string, there was at least one match with our regex `unRegex = /.un/`.<br>

What happens, though, when we set the global flag in our regex? (`unRegex = /.un/g`)

---
```
true
true
true
false
[Finished in 0.892s]
```
---

Even though we expected at least one match with `str4 = "A hot dog without a bun ain't no fun."`, we get a return of `false` indicating no match. Why?<br>

According to MDN Web Docs:

> ### Using test() on a regex with the global flag
> "If the regex has the global flag set, test() will advance the lastIndex of the regex. A subsequent use of test() will start the search  at the substring of str specified by lastIndex (exec() will also advance the lastIndex property). It is worth noting that the lastIndex will not reset when testing a different string."

So, let's modify our code in `globalFlag.js` to log the `lastIndex` value for each application of the `test()` method.
### globalFlag.js
---
```
let str1 = "The sun is out today.";
let str2 = "Let's go for a run today."
let str3 = "Regular expressions can sometimes be fun."
let str4 = "A hot dog without a bun ain't no fun."
let unRegex = /.un/g;

console.log(unRegex.test(str1));
console.log(unRegex.lastIndex);

console.log(unRegex.test(str2));
console.log(unRegex.lastIndex);

console.log(unRegex.test(str3));
console.log(unRegex.lastIndex);

console.log(unRegex.test(str4));
console.log(unRegex.lastIndex);
```
---

This gives us:

---
```
true
7
true
18
true
40
false
0
[Finished in 0.911s]
```
---

For the first string, we get a match, and the index immediately after the match is recorded (7). From there, we look for a match in the second string, but we start from index 7. We get a match because 'run' in the second string is after index 7. The `lastIndex` is now recorded as 18. We look for a match in the third string and get it because 'fun' is after index 18. Now the `lastIndex' is recorded as 40. Looking at the fourth string, we see the first opportunity for a match is given at index 20 ('bun'). However, we're starting our search from index 40, so there's no way we'll catch 'bun' for a match. Using the same reasoning, we see that we won't even get a match for 'fun' in the fourth string.

So, in short, if you're going to check for at least one match between a regular expression and each string in a set of strings, you need to **not** set the global flag for the regex. Of course, this makes sense if you know what setting the global flag does ([Not sure? Look here](https://www.w3schools.com/jsref/jsref_regexp_g.asp)). If you want to see all the matches for a single string, you could use the `match()` method and set the global flag in the regex.

---
```
let str1 = "The sun is out today.";
let str2 = "Let's go for a run today."
let str3 = "Regular expressions can sometimes be fun."
let str4 = "A hot dog without a bun ain't no fun."
let unRegex = /.un/g;

var myMatches = str4.match(unRegex);
console.log(myMatches);
```
---

And, you'll get:

---
```
[ 'bun', 'fun' ]
[Finished in 1.845s]
```
---

[MDN Web Docs - test()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)<br>
[MDN Web Docs - exec()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)

