import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoinGeckoService } from '../coin-gecko.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.css']
})
export class CoinDetailsComponent implements OnInit {

  coin?: any;
  coinDescription?: string;

  constructor(
    private route: ActivatedRoute,
    private coinGecko: CoinGeckoService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCoinDetails();
    this.getCoinDetails2();
  }

  getCoinDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.coinGecko.getSpecificCoin(id)
      .subscribe((coin: any) => {
        this.coin = coin
        this.coinDescription = coin?.description['en']
        console.log(coin)
      })
  }

  getCoinDetails2(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.coinGecko.getSpecificCoin2(id)
      .subscribe((coin2: any) => {
        console.log(coin2)
      })
  }

  goBack(): void {
    this.location.back();
  }
}
