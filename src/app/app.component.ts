import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  turn = true;
  //board
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
  winner : String;
  counter = 0;

  attackP1(barisP1: number, kolomP1: number){
    this.board[barisP1][kolomP1] = "1"
    //CHECK HORIZONTAL
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++){
        if(this.board[i][j] == "1"){
          this.counter += 1;
        }
        if(this.counter == 4){
          this.winner = "PLAYER 1 WIN"
          break;
        }
        else{
          this.turn = false;
        }
      } //for ends
      this.counter = 0;
    }//for ends

    //CHECK VERTICAL
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++){
        if(this.board[j][i] == "1"){
          this.counter += 1;
        }
        if(this.counter == 4){
          this.winner = "PLAYER 1 WIN"
          break;
        }
        else{
          this.turn = false;
        }
      } //for ends
      this.counter = 0;
    }//for ends
  }

  attackP2(barisP2: number, kolomP2: number){
    this.board[barisP2][kolomP2] = "0"
    //CHECK HORIZONTAL
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++){
        if(this.board[i][j] == "0"){
          this.counter += 1;
        }
        if(this.counter == 4){
          this.winner = "PLAYER 2 WIN"
          break;
        }
        else{
          this.turn = true;
        }
      } //for ends
      this.counter = 0;
    }//for ends

    //CHECK VERTICAL
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++){
        if(this.board[j][i] == "0"){
          this.counter += 1;
        }
        if(this.counter == 4){
          this.winner = "PLAYER 2 WIN"
          break;
        }
        else{
          this.turn = true;
        }
      } //for ends
      this.counter = 0;
    }//for ends
  }

}
