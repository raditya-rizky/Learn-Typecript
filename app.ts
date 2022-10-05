let userInput: unknown;
let userName: string;

userInput = 90;
if (typeof userInput === "string") {
  userName = userInput;
}

// this will break our code (script), the :never means that this function will never return anything
function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
}

generateError("An error occurred", 500);
