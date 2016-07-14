board = []

for loop in range(0, 5):
    treta = ["O"] * 5
    board.append(treta)

def print_board(board):
    for row in board:
        print " ".join(row)

board
