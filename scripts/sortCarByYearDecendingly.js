function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const clnDes = [...cars];

  // Tulis code-mu disini

  //Selection Sort
  function sortDescen(arr) {
    for (let n = 0; n < arr.length; n++) {
      let max = n;
      for (let j = n+1; j < arr.length; j++) {
        if (arr[j].year > arr[max].year) {
          max = j;
        }
      }
      if (max !== n) {
        let current = arr[n];
        arr[n] = arr[max];
        arr[max] = current;
      }
    }
    return arr;
  }

  //Insertion Sort
  function sortDescen2(arr) {
    for (let n = 1; n < arr.length; n++) {
      let current = arr[n];
      let j = n - 1;
      while (j >= 0 && arr[j].year < current.year) {
        arr[j+1] = arr[j];
        j = j - 1;
      }
      arr[j+1] = current;
    }
    return arr;
  }

  const result = sortDescen2(clnDes);

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}