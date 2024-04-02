function hasDuplicate(array) {
    return array.length !== new Set(array).size;
  }
  