import { Injectable } from '@angular/core';
import { Client, fql, FaunaError } from "fauna";
import {apiKey, dowload, setDowload} from '../meine-Dateien/constants';

@Injectable({
  providedIn: 'root'
})
export class FaunadbService {
  client: any;

  constructor() { 
    this.client = new Client({
      secret: apiKey
  });
  }
async create(name: string, rating: number, image: string, record: number[]) {
  try {
    const response = await this.client.query(
      fql`Boxing.create({ name: ${name}, eloRating: ${rating}, image: ${image}, record: ${record}})`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
  }
  async listSync(page: string){
    let details: any;
    if(page === "boxing" && dowload){
  try {
    await this.client.query(
        fql`Boxing.sortedByEloDesc().take(10)`
      ).then(async (response: any) => {
        await this.client.query(
          fql`Boxing.sortedByEloAsc().take(10)`
        ).then((content: any) => {
          details = (response.data.data as any[]).concat((content.data.data as any[]).reverse());
        })
      });
      localStorage.setItem(page, JSON.stringify(details));
      setDowload(false);
      return details;
    } catch (error: any) {
      console.log(error);
    }
    }
    return JSON.parse(localStorage.getItem(page) || "[]");
  }
  async find(objekt: string) {
    try {
      const response = await this.client.query(
        fql`Boxing.byName(${objekt})`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }
async updateElo(name1: string, name2: string, newElo1:number, newElo2:number, newRecord1: number[], newRecord2: number[]) { 
    try{
      await this.client.query(fql`handleKampf(${name1}, ${name2}, ${newElo1}, ${newElo2}, ${newRecord1}, ${newRecord2})`)
    } catch (error) {
      console.log(error);
    }
}
async remove(name: string) {
  try {
    const response = await this.client.query(
      fql`Boxing!.byName(${name}).delete()`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}
}