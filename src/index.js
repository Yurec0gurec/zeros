module.exports = function getZerosCount(number) {
    var answer = 0;
    while(number > 0) {
        number /= 5;
        answer = Math.floor(answer);
        answer += number;
    }
   
 
    return answer;
  // your implementation
}
