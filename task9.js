function calculateStatistics(students) {
    const marks = students.map(student => student.mark);
    const sum = marks.reduce((acc, curr) => acc + curr, 0);
    const average = sum / students.length;
    const max = Math.max(...marks);
    const min = Math.min(...marks);
  
    const groupedByClass = students.reduce((acc, curr) => {
      acc[curr.class] = acc[curr.class] || [];
      acc[curr.class].push(curr);
      return acc;
    }, {});
  
    return {
      average: average,
      max: max,
      min: min,
      sum: sum,
      count: students.length,
      groupedByClass: groupedByClass
    };
  }
  