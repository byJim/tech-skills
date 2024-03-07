const height = [1, 6, 3, 5, 2];
const k = 4;
function hurdleRace(k, height) {
  let max = Math.max(...height);
  if (max < k) return 0;
  return max - k;
}

hurdleRace(k, height);
