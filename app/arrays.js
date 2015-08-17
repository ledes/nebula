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

  },

  square : function(arr) {
    for (var i= 0; i < arr.length; i++){
      arr[i]**2;
    }
    return arr;
  },

  findAllOccurrences : function(arr, target) {

  }
};
