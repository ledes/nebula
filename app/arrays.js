exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  removeWithoutCopy : function(arr, item) {
    for (i = arr.length; i >=0; i--){
      if (arr[i] == item){
        arr.splice(i,1);
      }
  }
  return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    var new_Array = arr1.concat(arr2);
    return new_Array;
  },

  insert : function(arr, item, index) {
     var b =arr.splice(index,0, item);
     return arr;
  },

  count : function(arr, item) {
    var count = 0;
    for (var i= 0; i < arr.length; i++){
      if(arr[i] == item)
      count++;
    }
    return count;
  },

  duplicates : function(arr) {
    var dupli = [];
    for (i = arr.length; i >=0; i--){
      if (_.lastIndexOf(arr, arr[i]) != _.indexOf(arr, arr[i])){
        dupli.push(arr[i]);
      }
    }
    return _.uniq(dupli);
  },

  square : function(arr) {
    var new_Array = []
    for (var i= 0; i < arr.length; i++){
    new_Array.push(arr[i]* arr[i]);
  }
    return new_Array;
  },

  findAllOccurrences : function(arr, target) {
  var index =[];
  for (i = 0; i < arr.length; i++)
    if(arr[i]== target)
      index.push(i);
    return index;
  }
};
