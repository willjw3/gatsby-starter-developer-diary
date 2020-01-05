---
title: 'JavaScript Regular Expressions and the Test() Method'
tags: ["javascript"]
published: true
date: '2019-01-06'
---

[Video at YouTube](https://youtu.be/vAP8NLDzGwc). <br>

<iframe width="560" height="315" src="https://www.youtube.com/embed/vAP8NLDzGwc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
---
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sapien nisi, consequat nec dolor ut, lobortis vestibulum nunc. Nulla facilisi. Suspendisse leo urna, pulvinar ut pretium sit amet, consequat eget sapien. Nam ultricies in nulla finibus feugiat. Maecenas lacinia, lorem quis egestas convallis, tortor nunc consectetur est, vel finibus odio dui et nunc.
### noGlobalFlag.js

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
<br>

Proin quis ante ut felis lacinia dignissim quis ac risus. Vestibulum a maximus est. Pellentesque malesuada eros ac diam aliquam, non pulvinar magna sodales.

```
true
true
true
true
[Finished in 0.883s]
```
<br>

 Fusce hendrerit malesuada quam, ut accumsan massa efficitur et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam vitae ornare sem, eget volutpat mauris. Praesent aliquet condimentum dui non bibendum. Nam dapibus rutrum mi sit amet luctus. Proin id vehicula risus. Nullam dictum, elit sit amet molestie eleifend, felis dolor scelerisque risus, sed dictum odio dolor id justo. Integer consectetur dui non tortor scelerisque, non vulputate sem laoreet.

```
true
true
true
false
[Finished in 0.892s]
```
<br>

Nunc blandit purus sit amet justo vehicula, at venenatis ante tempus. Integer sagittis ultrices lorem, ut faucibus erat molestie quis. Phasellus semper orci nisl, egestas maximus risus porta sit amet. Fusce vitae egestas sem. Nunc sagittis, erat sodales maximus tempus, magna diam iaculis ex, ut feugiat odio libero sit amet lectus. Suspendisse elit turpis, volutpat laoreet consequat ac, ultricies eu sem. Donec non orci in justo porta iaculis. Donec pulvinar nunc quis viverra volutpat. Quisque et orci non enim sodales eleifend. Etiam in enim id nulla posuere lacinia. Ut rutrum pharetra nisi quis feugiat.

### globalFlag.js
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
<br>

Cras arcu lectus, euismod a lacinia a, cursus vitae magna. Aenean ultricies, enim id pharetra ultricies, ligula lectus congue tellus, ac lobortis ex elit at nulla. Sed lobortis vitae tortor sed laoreet. Praesent porta bibendum ullamcorper.

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
<br>

Integer fermentum euismod risus, vitae fringilla erat condimentum at. Suspendisse luctus egestas dui, eu dictum sem tincidunt sed. Sed efficitur eget orci eu dictum. Etiam faucibus, enim nec tincidunt sollicitudin, diam neque ultricies magna, eget ultrices sem tortor non justo. Vestibulum viverra tincidunt elit sit amet gravida. Morbi sed tempus odio. Nunc efficitur ultricies elit et porta. Praesent finibus placerat felis, vitae efficitur ligula sagittis non. Nam fringilla malesuada ligula ullamcorper dignissim.

Morbi mauris lacus, vehicula eget ullamcorper et, fringilla at ipsum. Nam tempus felis ex, congue varius urna consectetur eget. Cras tempor condimentum accumsan. In hac habitasse platea dictumst. Nulla pharetra mauris enim, quis dictum ipsum dictum sed. Sed luctus eros volutpat, luctus augue et, tempus ante. Sed imperdiet diam id luctus faucibus. Sed ullamcorper suscipit arcu, in dictum lectus ultricies et. Donec accumsan a ipsum sed aliquet. Nulla auctor justo eget tincidunt egestas. Cras blandit, ante vitae facilisis hendrerit, justo mauris fermentum diam, id congue diam velit eu ipsum. Nullam pulvinar auctor tincidunt. Maecenas felis velit, bibendum ac purus nec, cursus lacinia nulla. Sed posuere orci sapien, id accumsan eros feugiat vel. Aenean convallis lacinia orci. In metus elit, iaculis vitae nisi vel, iaculis vehicula mi.

```
let str1 = "The sun is out today.";
let str2 = "Let's go for a run today."
let str3 = "Regular expressions can sometimes be fun."
let str4 = "A hot dog without a bun ain't no fun."
let unRegex = /.un/g;

var myMatches = str4.match(unRegex);
console.log(myMatches);
```

<br>

Nam elementum augue vel nulla consectetur elementum.

```
[ 'bun', 'fun' ]
[Finished in 1.845s]
```

<br>

[MDN Web Docs - test()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)<br>
[MDN Web Docs - exec()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)

