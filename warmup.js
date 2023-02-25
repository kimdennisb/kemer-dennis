function catAndMouse(x, y, z) {
  let disA = Math.abs(x - z);
  let disB = Math.abs(z - y);
  if (disA < disB) {
    return "Cat A";
  } else if (disA > disB) {
    return "Cat B";
  } else {
    return "Mouse C";
  }

  function breakingRecords(scores) {
    let min = scores[0];
    let max = scores[0];
    let minCounter = 0;
    let maxCounter = 0;
    scores.forEach((value) => {
      if (min > value) {
        minCounter++;
        min = value;
      }
      if (max < value) {
        maxCounter++;
        max = value;
      }
    });
    return [maxCounter, minCounter];
  }
}
