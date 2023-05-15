"use strict";
// const person: {
//     name: string;
//     age: number
// } = {
// const ADMIN = 0;
// const READ_ONLY = 1;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role["READ_ONLY"] = "readonly";
})(Role || (Role = {}));
const person = {
    name: 'Oleg',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.READ_ONLY
};
let favoriteActivities;
favoriteActivities = ["Sports", 5];
console.log(person);
for (const hoppy of person.hobbies) {
    console.log(hoppy.toUpperCase());
}
if (person.role === Role.READ_ONLY) {
    console.log(person.role.toString());
}
//# sourceMappingURL=objs-arrays-enum.js.map