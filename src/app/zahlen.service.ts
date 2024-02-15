import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZahlenService {
public random(min: number, max: number) { 
  return Math.round(Math.random() * (max - min) ) + min;
}
  constructor() { }
}
