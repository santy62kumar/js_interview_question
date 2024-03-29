// we to find the longest words in a sentense, if there are multiple then return first encountered
// the function should ignore leading and trailing whitespaces 
//if the input string is empty or whitespaces only then return false

const findLongestWord=(str)=>{

    //The trim() method removes whitespace from both sides of a string.
    //The trimEnd() Method

    // The trimStart() Method

    if(str.trim().length===0){
        return false;
    }

    // str=str.trim();
    // console.log(str);

    word=str.split(" "); // this will convert string  to array 
    word=word.sort((a,b)=> b.length-a.length);
    console.log(word);

    //return word.at(-1); // this is used when we return a.length-b.length
   return word[0];

   //return word.reduce((accum,curword)=> (curword.length> accum.length ? curword :accum), "");
   
   //coins.reduce( (accumulator, currentElement) => { }, initialValue )

   // link to refer for reduce concept:"https://medium.com/@jennyjean8675309/exploring-javascripts-reduce-method-part-1-84a8e804020e"

}
// Example usage
var sentence = "This is a sentence with some long words";
//console.log(findLongestWord(sentence)); // Output: "sentence"


//return #tagstring 

function generateHash(str){
    if(str.length >= 280 || str.trim().length === 0){
      return false
    }
    str=str.split(" ");
    str=str.map((currEle)=>
        currEle.replace(currEle[0],currEle[0].toUpperCase())
    );
    str=str.join("");
    return `#${str}`;
    
    // const strUpperCase = str.split(" ").map((curr) => {   return curr.charAt(0).toUpperCase() + curr.slice(1)}).join("")
    // const hashStr = `#${strUpperCase}`
    // return hashStr
  }
  console.log(generateHash("This is a sentence with some long words"));