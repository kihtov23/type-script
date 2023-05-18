//default numbers 0, 1, 2
enum ResponseTypeEnum {
  yes,
  no,
  maybe,
}

let response = ResponseTypeEnum.no;

function checkYesResponse(response: ResponseTypeEnum) {
  return console.log(response === ResponseTypeEnum.yes);
}
checkYesResponse(ResponseTypeEnum.yes);
checkYesResponse(ResponseTypeEnum.no);

//enum mapped to strings
enum TurnDirectionEnum {
  LEFT = "left",
  RIGHT = "right",
  UP = "up",
  DOWN = "down",
}
const myTurn = TurnDirectionEnum.LEFT;
