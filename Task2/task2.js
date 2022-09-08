const data = {
  userID: 504,
  name: "Joe",
  surname: "Doe",
  lastLogged: "12:30:45 1 November 2019",
};

const objectChange = (lastLogged, age, data) => {
  const clonedData = {
    ...data,
    lastLogged: lastLogged,
    age: age,
  };

  return clonedData;
};

console.log(objectChange("16:20:12 31 May 2020", 25, data));
console.log(data === objectChange("16:20:12 31 May 2020", 25, data));
