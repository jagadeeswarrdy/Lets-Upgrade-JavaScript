let ar = ["one", "two", "three","four","five"];
console.log(ar);
// Sorts the elements of an array
ar.sort();
console.log(ar);
//Fill the elements in an array with a static value
ar.fill("six",4);
console.log(ar)
//This method returns true if the array
//contains the element, and false if not.
console.log(ar.includes("six"));
// join returns the array as a string.
let str=ar.join();
console.log(str,typeof str);
//splice()  adds or removes items to or from an array
//returns the removed item(s).
console.log(ar.splice(2));
console.log(ar)

let a="welcome to the Let's Upgrade";
//Returns the Unicode of the character at the specified index
console.log(a.charCodeAt(1));
//Checks whether a string contains the specified string/characters
console.log(a.includes("to"));
//Compares two strings in the current locale
// both same return 0 other wise return 1 or -1 based on i/p
console.log(a.localeCompare("welcome to the Let's Upgrade"));
//Searches a string for a specified value, or a regular expression
//and returns a new string where the specified values are replaced
console.log(a.replace(" ",""));
//returns position of the first occurrence of the specified searchvalue
// -1 if no match is found
console.log(a.search("Let's"));
//Extracts a part of a string and returns a new string
console.log(a.slice(2,10));
//Extracts the characters from a string, beginning at a specified start position
// and through the specified number of character
console.log(a.substr(0,7));
//Extracts the characters from a string, between two specified indices
console.log(a.substring(2,7));
let b="  abcd   ";
console.log(b,b.length)
// Removes whitespace from both ends of a string
b=b.trim();
console.log(b,b.length);