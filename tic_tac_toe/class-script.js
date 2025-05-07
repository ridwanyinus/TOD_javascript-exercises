/**
 * Cell class represents a single cell in the Tic Tac Toe grid
 */
class Cell {
	constructor() {
		this.value = null;
	}

	addMark(player) {
		this.value = player;
	}

	getValue() {
		return this.value;
	}

	reset() {
		this.value = null;
	}
}

/**
 * GameBoard class manages the game board state
 */
class GameBoard {
	constructor() {
		// Create a 3x3 grid of Cell objects
		this.board = Array.from({ length: 3 }, () =>
			Array.from({ length: 3 }, () => new Cell()),
		);
	}

	getBoard() {
		return this.board;
	}

	placeMark(row, column, player) {
		const cell = this.board[row][column];
		const cellValue = cell.getValue();

		if (cellValue !== null) return;

		cell.addMark(player);
	}
}

/**
 * GameController class manages the game logic
 */
class GameController {
	constructor(playerOneName = "X", playerTwoName = "O") {
		this.board = new GameBoard();
		this.players = [
			{
				name: playerOneName,
				mark: "x",
				playerScore: 0,
			},
			{
				name: playerTwoName,
				mark: "o",
				playerScore: 0,
			},
		];
		this.activePlayer = this.players[0];
		this.grid = this.board.getBoard();
		this.gameOver = false;
		this.winningCells = [];

		// Define winning combinations
		this.winningCombos = [
			[
				[0, 0],
				[0, 1],
				[0, 2],
			], // rows
			[
				[1, 0],
				[1, 1],
				[1, 2],
			],
			[
				[2, 0],
				[2, 1],
				[2, 2],
			],
			[
				[0, 0],
				[1, 0],
				[2, 0],
			], // columns
			[
				[0, 1],
				[1, 1],
				[2, 1],
			],
			[
				[0, 2],
				[1, 2],
				[2, 2],
			],
			[
				[0, 0],
				[1, 1],
				[2, 2],
			], // diagonals
			[
				[0, 2],
				[1, 1],
				[2, 0],
			],
		];
	}

	switchPlayerTurn() {
		this.activePlayer =
			this.activePlayer === this.players[0] ? this.players[1] : this.players[0];
	}

	getActivePlayer() {
		return this.activePlayer;
	}

	incrementScore() {
		this.getActivePlayer().playerScore++;
	}

	checkGameOver(result) {
		const modal = document.getElementById("game-modal");
		const modalMessage = document.getElementById("modal-message");
		const closeModalBtn = document.getElementById("close-modal");

		closeModalBtn.onclick = () => {
			modal.classList.add("hidden");
		};

		if (result === "win") {
			this.incrementScore();
			modalMessage.textContent = `${this.getActivePlayer().name} wins! Please restart the game.`;
			modal.classList.remove("hidden");
		} else if (result === "tie") {
			modalMessage.textContent = "It's a draw!";
			modal.classList.remove("hidden");
		} else {
			console.error("Invalid game result:", result);
		}
	}

	checkWinner() {
		const mark = this.getActivePlayer().mark;
		for (const combo of this.winningCombos) {
			if (
				combo.every(([row, col]) => this.grid[row][col].getValue() === mark)
			) {
				this.winningCells = combo;
				this.gameOver = true;
				this.checkGameOver("win");
				return true;
			}
		}

		if (this.checkIfBoardIsFull()) {
			this.checkGameOver("tie");
			return true;
		}

		return false;
	}

	checkIfBoardIsFull() {
		for (let row = 0; row < this.grid.length; row++) {
			for (let col = 0; col < this.grid[row].length; col++) {
				if (this.grid[row][col].getValue() === null) {
					return false;
				}
			}
		}
		return true;
	}

	playRound(row, column) {
		if (this.gameOver) return;
		if (this.grid[row][column].getValue() !== null) return;

		this.board.placeMark(row, column, this.getActivePlayer().mark);

		if (!this.checkWinner()) {
			this.switchPlayerTurn();
		}
	}

	resetGame() {
		for (let row = 0; row < this.grid.length; row++) {
			for (let col = 0; col < this.grid[row].length; col++) {
				this.grid[row][col].reset();
			}
		}
		this.winningCells = [];
		this.activePlayer = this.players[0];
		this.gameOver = false;
	}

	newGame() {
		this.resetGame();
		this.players[0].playerScore = 0;
		this.players[1].playerScore = 0;
	}

	getWinningCells() {
		return this.winningCells;
	}

	getBoard() {
		return this.board.getBoard();
	}

	getPlayers() {
		return this.players;
	}
}

/**
 * DisplayController class manages the UI using arrow functions for methods
 */
class DisplayController {
	constructor() {
		this.boardContainer = document.querySelector(".board");
		this.headingTitle = document.querySelector(".turn");
		this.scoreBoard = document.querySelector(".score-board");
		this.newGameBtn = document.querySelector(".new-game-button");
		this.resetBtn = document.querySelector(".reset-button");

		// Get user name with a fallback
		const userInput = prompt("Please enter your username", "");
		this.playerName =
			userInput !== null && userInput.trim() !== "" ? userInput.trim() : "X";

		// Initialize game
		this.game = new GameController(this.playerName);

		// Add event listeners
		this.newGameBtn.addEventListener("click", () => {
			this.game.newGame();
			this.renderUI();
		});

		this.resetBtn.addEventListener("click", () => {
			this.game.resetGame();
			this.renderUI();
		});

		// Use the arrow function directly - no binding needed
		this.boardContainer.addEventListener("click", this.handleClick);

		// Initial render
		this.renderUI();
	}

	renderUI = () => {
		this.boardContainer.textContent = "";
		const board = this.game.getBoard();

		// Update player info and scores
		const playersInfoElement = document.createElement("div");
		const [player1, player2] = this.game.getPlayers();
		playersInfoElement.innerHTML = `
      <p>${player1.name} (X) Score: ${player1.playerScore}</p>
      <p>${player2.name} (O) Score: ${player2.playerScore}</p>
    `;

		this.headingTitle.textContent = `${this.game.getActivePlayer().name}'s Turn`;
		this.scoreBoard.textContent = "";
		this.scoreBoard.append(playersInfoElement);

		// Render game board
		for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
			const row = board[rowIndex];
			for (let colIndex = 0; colIndex < row.length; colIndex++) {
				const cell = row[colIndex];
				const btn = document.createElement("button");
				btn.classList.add("cell");
				btn.dataset.rowId = rowIndex;
				btn.dataset.column = colIndex;
				btn.textContent = cell.getValue();

				// Highlight winning cells
				const winning = this.game.getWinningCells();
				if (
					winning.some(([row, col]) => row === rowIndex && col === colIndex)
				) {
					btn.classList.add("highlight");
				}

				this.boardContainer.appendChild(btn);
			}
		}

		// Apply additional styling to cells
		const buttons = Array.from(this.boardContainer.querySelectorAll(".cell"));
		buttons.forEach((btn, index) => {
			btn.dataset.columnId = index + 1;
			if ((index + 1) % 2 === 0) {
				btn.classList.add("middle");
			}
		});
	};

	handleClick = (e) => {
		const selectedRow = Number.parseInt(e.target.dataset.rowId);
		const selectedColumn = Number.parseInt(e.target.dataset.column);

		if (!Number.isNaN(selectedRow) && !Number.isNaN(selectedColumn)) {
			this.game.playRound(selectedRow, selectedColumn);
			this.renderUI();
		}
	};
}

// Initialize the game when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
	new DisplayController();
});
