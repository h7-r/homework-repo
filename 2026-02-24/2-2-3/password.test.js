const isValidPassword = require("./password");

describe("isValidPassword", () => {
  describe("로그인 성공 😝", () => {
    test("유효한 비밀번호 ✨", () => {
      expect(isValidPassword("Password231")).toBe(true);
    });
  });

  describe("로그인 실패 😨", () => {
    test("8자 미만은 실패 🤮", () => {
      expect(isValidPassword("Pass1")).toBe(false);
    });

    test("숫자가 없으면 실패 🤮", () => {
      expect(isValidPassword("Password")).toBe(false);
    });

    test("영문이 없으면 실패 🤮", () => {
      expect(isValidPassword("12345678")).toBe(false);
    });

    test("빈 문자열이면 🤮", () => {
      expect(isValidPassword("")).toBe(false);
    });
  });
});
