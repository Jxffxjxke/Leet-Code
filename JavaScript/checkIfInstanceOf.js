const checkIfInstanceOf = (obj, classFunc) => {
  if (obj == null || typeof classFunc !== "function")
    return false;

  return Object(obj) instanceof classFunc;
};

const result = checkIfInstanceOf(new Date(), Date);
const result2 = checkIfInstanceOf(5, Number);
const nullCase = checkIfInstanceOf(null, null);
console.log(result, result2, nullCase);
