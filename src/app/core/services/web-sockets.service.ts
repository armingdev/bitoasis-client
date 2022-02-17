import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class WebSocketsService {

  wssURL = environment.wsUrl;

  constructor() { }

  getPairTickerBySymbol(eventType: string, selectedChannel: string, selectedSymbol :string) {

    const msg = JSON.stringify({
      event: eventType,
      channel: selectedChannel,
      symbol: selectedSymbol
    });

    const wss = new WebSocket(this.wssURL);

    wss.onopen = () => {
      wss.send(msg);
    }

    wss.onmessage = (msg) => console.log('data: ', msg.data);
  }
}
