// object in TS example
const person: {
  name: string;
  age: number;
  hobbies: string[];
  //   tuple example
  role: [number, string];
} = {
  name: "Raditya",
  age: 21,
  hobbies: ["Sports", "music"],
  role: [20, "musician"],
};

// if we want to add more property to the tuple
// person.role.push("admin");

// This can't be done in tuple
// person.role = [21, "musician", "admin"];

console.log(person.role);

for (const hobby of person.hobbies) {
  console.log(hobby.toLowerCase());
}

enum ROLE {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
// {ADMIN: 10, READ_ONLY: "readOnly", AUTHOR: true }
// {ADMIN: 5, READ_ONLY, AUTHOR}
