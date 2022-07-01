import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CoinGeckoService {
  private readonly BASE_API_URL: string = "https://api.coingecko.com/api/v3"

  constructor(private http: HttpClient) { }

  public getApiPing() {
    return this.http.get(`${this.BASE_API_URL}/ping`, { observe: 'response' });
  }

  public getAllExchanges() {
    return this.http.get(`${this.BASE_API_URL}/exchanges`);
  }
}
