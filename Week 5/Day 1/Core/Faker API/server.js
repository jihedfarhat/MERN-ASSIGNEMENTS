const express = require("express");
const faker = require("@faker-js/faker");

const app = express();

const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const createUser = () => {
  const newUser = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
  return newUser;
};

const createCompany = () => {
  const newCompany = {
    name: faker.company.companyName(),
    address: {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
    },
  };
  return newCompany;
};


app.get("/api/users/new", (req, res) => {
  response.json({ user: createUser() });
});

app.get("/api/companies/new", (req, res) => {
  response.json({ company: createCompany() });
});

app.get("/api/user/company", (req, res) => {
  response.json({
    user: createUser(),
    company: createUser(),
  });
});
app.listen(port, () => {
  console.log(
    `>>> Server is up and running on port ${port} and is listening for REQuest to RESponse `
  );
});
