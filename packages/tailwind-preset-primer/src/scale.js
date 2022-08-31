'use strict';

function convert(scale) {
  const result = {};

  for (const [key, grades] of Object.entries(scale)) {
    if (Array.isArray(grades)) {
      result[key] = {};
      for (let i = 0; i < grades.length; i++) {
        const grade = grades[i];
        result[key][i] = grade;
      }
    } else {
      result[key] = grades;
    }
  }

  return result;
}

module.exports = {
  convert,
};
