export const handleKampf = (player1rating: number, player2rating: number, result: number): number => {
    const expected1 = 1 / (1 + 10 ** ((player2rating - player1rating) / 400));
    const change = Math.round(32 * (result - expected1));
    return change;
  };