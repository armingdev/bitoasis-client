import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PairsService {

  baseUrl = environment.apiUrl;
  requiredSymbols = 'tBTCUSD,tLTCUSD'

  constructor(
    private readonly http: HttpClient,
  ) { }

  // READ
  getAll(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/tickers?symbols=${this.requiredSymbols}`);
  }

  // READ BY SYMBOL
  getBySymbol(objToGet: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/ticker/${objToGet}`);
  }
}
