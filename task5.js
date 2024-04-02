function arrayStatistics(array) {
    const positiveNumbers = array.filter(number => number > 0);
    const negativeNumbers = array.filter(number => number < 0);
    const productOfNegatives = negativeNumbers.reduce((acc, curr) => acc * curr, 1);
    return {
      positiveCount: positiveNumbers.length,
      productOfNegatives: productOfNegatives
    };
  }
  