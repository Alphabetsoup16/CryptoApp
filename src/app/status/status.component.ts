import { Component, OnInit } from '@angular/core';
import { CoinGeckoService } from '../coin-gecko.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  status: number = 0;

  constructor(private coinGecko: CoinGeckoService) { }

  ngOnInit(): void {
    this.coinGecko.getApiPing().subscribe(response => {
      this.status = response.status;
    })
  }

}
