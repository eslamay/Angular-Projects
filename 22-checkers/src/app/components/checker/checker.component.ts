import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-checker',
  imports: [CommonModule],
  templateUrl: './checker.component.html',
  styleUrl: './checker.component.scss'
})
export class CheckerComponent {
constructor(public gameService: GameService) {}

  onCellClick(row: number, col: number): void {
    if (this.gameService.gameOver) return;
    if (this.gameService.selectedPiece) {
      this.gameService.movePiece(row, col);
    } else {
      this.gameService.selectPiece(row, col);
    }
  }

  isSelected(rowIndex: number, colIndex: number): boolean {
    return (
      this.gameService.selectedPiece?.row === rowIndex &&
      this.gameService.selectedPiece?.col === colIndex
    );
  }

  resetGame(): void {
    this.gameService.initializeBoard();
  }
}
