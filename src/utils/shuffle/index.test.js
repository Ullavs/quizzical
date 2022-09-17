import shuffle from ".";

describe("shuffle()", () => {
  test("it will shuffle the given array", () => {
    global.Math.random = () => 0.5;

    const arr = ["a", "b", "c", "d"];
    const expected = ["a", "d", "b", "c"];

    expect(shuffle(arr)).toStrictEqual(expected);
  });

  test("it will keep the same length for given array", () => {
    const arr = [1, 2, 3];

    expect(shuffle(arr).length).toStrictEqual(arr.length);
  });
});
