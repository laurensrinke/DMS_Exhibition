// Author: Jo Preibisch
// Datum: 2014_06_25
// Projekt: Drone Monitoring System

function say (argument) {
  console.log(argument);
}

function map(v, a, b, x, y) {
    return (v == a) ? x : (v - a) * (y - x) / (b - a) + x;
};