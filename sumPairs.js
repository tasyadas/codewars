/**
 * Sum of Pairs
    Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

    sum_pairs([11, 3, 7, 5],         10)
    #              ^--^      3 + 7 = 10
    == [3, 7]

    sum_pairs([4, 3, 2, 3, 4],         6)
    #          ^-----^         4 + 2 = 6, indices: 0, 2 *
    #             ^-----^      3 + 3 = 6, indices: 1, 3
    #                ^-----^   2 + 4 = 6, indices: 2, 4
    #  * entire pair is earlier, and therefore is the correct answer
    == [4, 2]

    sum_pairs([0, 0, -2, 3], 2)
    #  there are no pairs of values that can be added to produce 2.
    == None/nil/undefined (Based on the language)

    sum_pairs([10, 5, 2, 3, 7, 5],         10)
    #              ^-----------^   5 + 5 = 10, indices: 1, 5
    #                    ^--^      3 + 7 = 10, indices: 3, 4 *
    #  * entire pair is earlier, and therefore is the correct answer
    == [3, 7]
    Negative numbers and duplicate numbers can and will appear.

    NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.
 */

let cache = {}

function memo(params, result){
   if (cache[params] in cache) {
      if (cache[params].includes(result)) {
         
      }
   }
}

var sum_pairs=function(ints, s){
   var arr = [];
   for (let i = 0; i < ints.length; i++ ) {
      for (let j = 0; j < ints.length; j++) {
         if (i !== j && (ints[i] + ints[j] === s)) {
            arr.push([ints[i], ints[j]]);
            delete ints[i,j];
         }
      }
   }


   if (arr.length === 0) return undefined;
   if (arr.length === 1) return arr[0];
   else
      var kecil = arr[0];
      for (let i = 1; i < arr.length; i++) {
         if (arr[i][0] < kecil[0]) kecil = arr[i];
      }
      return kecil;
}


l1= [1, 4, 8, 7, 3, 15]; //[1,7]
l2= [1, -2, 3, 0, -6, 1]; //[0,-6]
l3= [20, -13, 40]; //undefined
l4= [1, 2, 3, 4, 1, 0]; //[1,1],[2,0]
l5= [10, 5, 2, 3, 7, 5]; //[5,5],[3,7]
l6= [4, -2, 3, 3, 4]; //[4,4]
l7= [0, 2, 0]; //[0,0]
l8= [5, 9, 13, -3]; //[13,-3]


console.log(sum_pairs(l1, 8));
console.log(sum_pairs(l2, -6));
console.log(sum_pairs(l3, -7));
console.log(sum_pairs(l4, 2));
console.log(sum_pairs(l5, 10));
console.log(sum_pairs(l6, 8));
console.log(sum_pairs(l7, 0));
console.log(sum_pairs(l8, 10));
console.log(memo(sum_pairs(l8, 10)));