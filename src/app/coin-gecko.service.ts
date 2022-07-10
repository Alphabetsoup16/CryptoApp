import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

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

  public getSpecificCoin(coin_id: string | null): Observable<any> {
    return this.http.get<any>(`${this.BASE_API_URL}/coins/${coin_id}`);
  }
  //   export interface Coin {
  //     id: string,
  //     name: string,
  //     image: string,
  //     current_price: number,
  //     all_time_high: number,
  //     market_cap: number,
  //     circulating_supply: number,
  // }
  public getSpecificCoin2(coin_id: string | null) {
    return this.http.get(`${this.BASE_API_URL}/coins/${coin_id}`)
      .pipe(map((response: any) => ({
        name: response.name,
        image: response.image['large'],
        developer_score: response.developer_score || "N/A",
        community_score: response.community_score || "N/A",
        genesis_date: response.genesis_date,
        hashing_algorithm: response.hashing_algorithm || "N/A",
        coin_description: response.description['en'],
        market_data_price: response.market_data['current_price']['usd'] || "Price Unavailable"
      })))
  }


  public getAllExchanges(): Observable<any> {
    return this.http.get<any>(`${this.BASE_API_URL}/exchanges`);
  }
}
