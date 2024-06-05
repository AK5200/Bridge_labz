let str = "Anupam Kumar"

// .length method -- gives the length of the array
console.log(str.length)
// 12

// .charAt method -- returns character at a certain index
console.log(str.charAt(11))
// 0 indexed


//  .charCodeAt method -- returns UTF-16 code (ACSII val)
let a = '123'
console.log(a.charCodeAt(0)) 

// at methods --retuns char at position same as charAt
console.log(str.at(1))


// [] Access method for accessing a specifies index
let text = "Hello Anupam"
console.log(text[1])
// e


// extracting a part of string
// 1- slice(start,end)  end not included
// 2- substring(start,end)
// 3- substr(start,length)
let str1 = "Anupam is cuurently pursuing his Bachelor's"
let part1 = str1.slice(1,3)
let part2 = str1.substring(1,3)
let part3 = str1.substr(1,3)

console.log("1,3 \n", "1. Slice : ",part1
    ,"\n", "2. Substring : ", part2, "\n", "3. substr : ",part3
)

// slice : nu
// substring : nu
// substr : nup



// .toUpperCase()
let text1 = "Hello World!";
let text2 = text1.toUpperCase();
let text3 = text1.toLowerCase();
console.log(text1,"\n",text2,"\n",text3)



// .concat() combines two strings
let text4 = "    Hello  "
let text5 = "Anupam"
let text6 = text4.concat(" ",text5)
console.log(text6)


// .trim() removes white spaces from both sides
let text7 = text4.trim();
console.log(text7)

// .trimStart() and .trimEnd()
console.log(text4.trimStart()); //removes white spaces from start
console.log(text4.trimEnd()); // removes white spaces form end


// .padStart(how many, with what) and .padEnd()
let text8 = "anu"
let pad1 = text8.padStart(4,"0") // total lenth 4 including 5
console.log(pad1)
console.log(text8.padStart(5,"0"))

console.log(text8.padEnd(5,"1"))


// .repeat()  --repeats string
console.log(text8.repeat(4))


// .replace()
let text10 = "google is a great company. google"
console.log(text10.replace("google","Microsoft"))
// .replace(org,replaceWith)
// replaces just the first occurence


// .replaceAll()
console.log(text10.replaceAll("google", "Microsoft"))

// .split(), slpit string on comma,space,period etc
let text11 = "Google is a very good company, people love it there. google offers..."
console.log(text11.split("g"))
// text1.split(",") etc