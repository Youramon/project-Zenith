export const handleKampf = (player1rating: number, player2rating: number, result: number): number => {
    const expected = 1 / (1 + 10 ** ((player2rating - player1rating) / 400));
    return Math.round(32 * (result - expected));
  };