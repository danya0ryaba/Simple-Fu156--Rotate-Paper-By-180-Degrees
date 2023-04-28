  function rotatePaper(number) {
    const obj = { 2: 2, 5: 5, 6: 9, 8: 8, 9: 6, 0: 0 };
    let new_arr = [];

    array_number = number.split('').map(item => Number(item));

      for (let item of array_number) {
        for (let key in obj) {
             if (item == key) new_arr.push(String(obj[key]));
         }
       }

    let my_str = new_arr.reverse().join('');
    if (number == my_str) return true;
    else return false;

}
