import { signal } from "@angular/core";

export const apiKey = "fnAFiMacMbAA0JWwpVoVOD6MdWcr21W4ctSKr9Y6";
export let currentPage: string = "tabs";
export let dowload = true;
export function setCurrentPage(value: string): void{
    currentPage = value;
}
export function setDowload(value: boolean): void{    
    dowload = value;
}

export let counter = signal(0);
export function count(): void {
  counter.update(value => value + 1);
}