import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  turn = true;
  board = [
    ["*","*","*","*","*"],
    ["*","*","*","*","*"],
    ["*","*","*","*","*"],
    ["*","*","*","*","*"],
    ["*","*","*","*","*"]
  ]
  barisP1 : number;
  kolomP1 : number;
  barisP2 : number;
  kolomP2 : number;

  attackP1(barisP1: number, kolomP1: number){
    this.board[barisP1][kolomP1] = "1"
    this.turn = false;
  }

  attackP2(barisP2: number, kolomP2: number){
    this.board[barisP2][kolomP2] = "0"
    this.turn = true;
  }
}
