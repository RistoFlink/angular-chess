import {Component} from '@angular/core';
import {ChessBoard} from "../../chess-logic/chessboard";
import {Color, FENChar} from "../../chess-logic/models";
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-chess-board',
  standalone: true,
  imports: [
    NgForOf,
    NgClass
  ],
  templateUrl: './chess-board.component.html',
  styleUrl: './chess-board.component.css'
})
export class ChessBoardComponent {
  private chessBoard = new ChessBoard();
  public chessBoardView: (FENChar | null)[][] = this.chessBoard.chessBoardView;

  public get playerColor(): Color {
    return this.chessBoard.playerColor;
  };

  public isSquareDark(x: number, y: number): boolean {
    return ChessBoard.isSquareDark(x, y);
  }
}
