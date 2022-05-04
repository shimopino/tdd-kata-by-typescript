import { expect, it } from "vitest";
import { Game } from "./Game";

it("Gameクラスを作成する", () => {
  const game = new Game();

  expect(game).toBeDefined();
});
