export const apiKey: string = "";
export let currentPage: string = "tabs";
export let dowload = true;
export function setCurrentPage(value: string): void{
    currentPage = value;
}
export function setDowload(value: boolean): void{    
    dowload = value;
}