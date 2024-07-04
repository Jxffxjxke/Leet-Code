expect = function (expect) {
  return {
    toBe: (given) => {
      if (expect !== given) {
        throw new Error("Not Equal");
      }
      return true;
    },
    toNotBe: (given) => {
      if (expect === given) {
        throw new Error("Equal");
      }
      return true;
    },
  };
};
