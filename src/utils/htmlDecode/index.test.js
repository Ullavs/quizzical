import htmlDecode from ".";

describe("htmlDecode()", () => {
  test("it will decode the encoded string", () => {
    const encodedString = "Let&#039;s &quot;test&quot; this";
    const expectedString = `Let's "test" this`;

    expect(htmlDecode(encodedString)).toBe(expectedString);
  });
});
