module.exports = {
  excerpt: function(input, chars, breakOnWord) {
    input = String(input).replace(/<[^>]+>/gm, '');
    if (isNaN(chars) || chars <= 0) chars = 90;
    if (input && input.length > chars) {
      input = input.substring(0, chars);

      if (!breakOnWord) {
        var lastspace = input.lastIndexOf(' ');
        //get last space
        if (lastspace !== -1) {
          input = input.substr(0, lastspace);
        }
      } else {
        while(input.charAt(input.length-1) === ' ') {
          input = input.substr(0, input.length -1);
        }
      }
      return input + '…';
    }
    return input;
  }
}