function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe

  // Tempat penampungan hasil
  const clnFil = [...cars];

  // Tulis code-mu disini
  function filtArr(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].available == true) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  const result = filtArr(clnFil);

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
