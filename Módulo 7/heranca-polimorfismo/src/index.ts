import { Request, Response } from "express";
import { app } from "./app";
import Customer from "./classes/Customer";
import User from "./classes/User";

const user1 = new User("123", "teste@teste.com", "teste", "teste");

console.log(user1);
console.log("----------------------------------------");
console.log(" ");


const customer1 = new Customer(
  "1",
  "customer@teste.com",
  "customername",
  "asdf",
  "345234523452345",
);

console.log(customer1.interoduceYourself());
console.log("----------------------------------------");
console.log(" ");

app;
