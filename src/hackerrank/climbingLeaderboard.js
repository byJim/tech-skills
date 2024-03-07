const ranked = [100, 90, 90, 80];
const player = [70, 80, 105];

function climbingLeaderboard(p_ranked, p_player) {
  const ranked = [...new Set(p_ranked)];
  const result = [];
  let i = ranked.length;
  p_player.forEach((score) => {
    while (i > 0 && score >= ranked[i - 1]) {
      i--;
    }
    result.push(i + 1);
  });
  return result;
}

console.log(climbingLeaderboard(ranked, player)); // [4, 3, 1]
