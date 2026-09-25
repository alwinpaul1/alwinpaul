// Splits text the way a subword tokenizer would: leading spaces stay on the
// word, punctuation is its own token, and long words break in two. Each token
// gets a start and end time so the text can stream in like a model's response.
const TOKEN_PATTERN = /\s*[\p{L}\p{N}]+|\s*[^\s\p{L}\p{N}]/gu;

// Real streams arrive in uneven bursts, so the gaps between tokens vary
const GAPS = [48, 36, 70, 42, 55, 38, 92, 44, 51, 35, 66, 40, 58, 47, 83, 39];

export const streamTokens = (text: string, startMs: number) => {
  const pieces = (text.match(TOKEN_PATTERN) ?? []).flatMap((piece) => {
    const word = piece.trimStart();
    if (word.length < 8) return [piece];
    const cut = piece.length - Math.floor(word.length * 0.45);
    return [piece.slice(0, cut), piece.slice(cut)];
  });
  let clock = startMs;
  const tokens = pieces.map((piece, i) => {
    const start = clock;
    clock += GAPS[i % GAPS.length];
    return { text: piece, start, end: clock };
  });
  return { tokens, end: clock };
};
