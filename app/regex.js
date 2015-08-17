exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
  var regex = /\d+/g;
  var matches = str.match(regex);
  if (matches != null){
    return true;
  }
  else{
    return false;
  }
  },

  containsRepeatingLetter : function(str) {
  var hasDuplicates = (/([a-z])\1/i).test(str);
  return hasDuplicates;
  },

  endsWithVowel : function(str) {
    return (/[aeiou]$/i).test(str);  //$ last char
                                    //^ first char
                                    // i same for capitals

  },

  captureThreeNumbers : function(str) {
    var nums = (/(?:\d{3}|\(\d{3}\))/).exec(str);
       if (nums == null) {
         return false
       }
       else {
       return nums[0]
     }
  },

  matchesPattern : function(str) {
    return (/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/).test(str)

  },

  isUSD : function(str) {
   return /^\$(([1-9]\d{0,2}(,\d{3})*)|(([1-9]\d*)?\d))(\.\d\d)?$/.test(str);
  }
};
