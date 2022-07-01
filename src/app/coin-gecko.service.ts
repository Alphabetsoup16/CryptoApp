import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CoinGeckoService {
  private readonly BASE_API_URL: string = "https://api.coingecko.com/api/v3"

  constructor(private http: HttpClient) { }

  public getApiPing() {
    return this.http.get(`${this.BASE_API_URL}/ping`, { observe: 'response' });
  }

  public getTop100Coins(): Observable<any> {
    return this.http.get<any>(`${this.BASE_API_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
  }

  public getSpecificCoin(coin_id: string) {
    return this.http.get(`${this.BASE_API_URL}/coins/${coin_id}`);
  }

  public getAllExchanges(): Observable<any> {
    return this.http.get<any>(`${this.BASE_API_URL}/exchanges`);
  }
}
