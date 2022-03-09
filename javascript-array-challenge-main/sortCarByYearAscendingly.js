function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const clnAs = [...cars];

  // Tulis code-mu disini
  
  //Selection Sort
  function sortAscen(arr) {
    for (let n = 0; n < arr.length; n++) {
      let min = n;
      for (let j = n + 1; j < arr.length; j++) {
        if (arr[j].year < arr[min].year) {
          min = j;
        }
      }
      if (min !== n) {
        let current = arr[n];
        arr[n] = arr[min];
        arr[min] = current;
      }
    }
    return arr;
  }

  //Insertion Sort
  function sortAscen2(arr) {
    for (let n = 1; n < arr.length; n++) {
      let current = arr[n];
      let j = n - 1;
      while (j >= 0 && arr[j].year > current.year) {
        arr[j+1] = arr[j];
        j = j - 1;
      }
      arr[j+1] = current;
    }
    return arr;
  }

  const result = sortAscen2(clnAs);

  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}