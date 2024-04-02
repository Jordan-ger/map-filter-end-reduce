function hasSameHeight(team1, team2) {
    const set1 = new Set(team1);
    const set2 = new Set(team2);
    for (let height of set1) {
      if (set2.has(height)) {
        return true;
      }
    }
    return false;
  }
  