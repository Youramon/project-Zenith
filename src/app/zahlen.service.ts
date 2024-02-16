import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZahlenService {
public random(min: number, max: number) { 
  return Math.round(Math.random() * (max - min) ) + min;
}
public kgvRechner(num1: number, num2: number): number {
  const gcd = (a: number, b: number): number => {
    return b === 0 ? a : gcd(b, a % b);
  };

  const lcm = (a: number, b: number): number => {
    return (a * b) / gcd(a, b);
  };

  const a = lcm(num1, num2);
  if (a/Math.min(num1,num2) <= 200) {
    return a;
  } else {
    return 0;
  }
}




  constructor() { }
}
