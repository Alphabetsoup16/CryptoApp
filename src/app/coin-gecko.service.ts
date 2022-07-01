import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CoinGeckoService {
  private readonly EXCHANGE_API_URL: string = "https://api.coingecko.com/api/v3/exchanges"
  private readonly PING_API_URL: string = "https://api.coingecko.com/api/v3/ping"

  constructor(private http: HttpClient) { }

  public getApiPing() {
    return this.http.get(this.PING_API_URL, { observe: 'response' });
  }

  public getAllExchanges() {
    return this.http.get(this.EXCHANGE_API_URL);
  }
}
