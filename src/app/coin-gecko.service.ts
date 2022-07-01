import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CoinGeckoService {
  private readonly EXCHANGE_API_URL: string = "https://api.coingecko.com/api/v3/exchanges"

  constructor(private http : HttpClient) { }

  public getAllExchanges() { 
    return this.http.get(this.EXCHANGE_API_URL); 
    } 
}
