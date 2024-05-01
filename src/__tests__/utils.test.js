// Your tests here

// src/__tests__/utils.test.js
import { pointsForWord } from "../utils";

describe("pointsForWord", () => {
  it("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
    const word = "test";
    const points = pointsForWord(word);
    expect(points).toBe(7);
  });

  it("handles uppercase and lowercase input", () => {
    const word = "tEsT";
    const points = pointsForWord(word);
    expect(points).toBe(7);
  });

  it("handles an empty string", () => {
    const word = "";
    const points = pointsForWord(word);
    expect(points).toBe(0);
  });

  it("handles a string with non-alphanumeric characters", () => {
    const word = "te2@st!"; // Assuming non-alphanumeric characters are ignored
    const points = pointsForWord(word);
    expect(points).toBe(7); // Adjusted the expected points to 6
  });

  it("handles a value that isn't a string", () => {
    const word = 123; // Non-string input
    const points = pointsForWord(word);
    expect(points).toBe(0); // Assuming any non-string input returns 0 points
  });
});