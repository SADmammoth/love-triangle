/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  
  let count = 0;
  let num = 0;
  let prev;

	for(let j = 0; j < preferences.length; j++){
		for(let i = 0; i < 3; i++) {

			if (i == 0) {
				num = j;
      }
      
			prev = num;
      num = preferences[num] - 1;
      
			if (num == -1) {
				break;
      }
      
			if (prev == num || (j == num && i != 2)) {
				break;
      }
      
			if (j == num) {
        count++;
        break;
			}
       
    }		
	}

	count /= 3;
  return count;
};
