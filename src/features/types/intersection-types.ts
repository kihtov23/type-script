type Circle = {
  radius: number;
};

type Color = {
  color: string;
};

type ColorfulCircle = Circle &
  Color & {
    price: number;
  };

let colorfulCircle: ColorfulCircle = {
  radius: 5,
  color: "green",
  price: 4.5,
};
