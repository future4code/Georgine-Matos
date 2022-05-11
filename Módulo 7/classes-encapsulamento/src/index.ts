import { Request, Response } from "express";
import { app } from "./app";

//1 - o construtor server para inicializar um objeto advindo de uma classe. constructor
//1B - 1
//1C - através do metodo set
class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(cpf: string, name: string, age: number) {
    console.log("Chamando o construtor da classe UserAccount");
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }
}

//2
const account = new UserAccount("123.456.78", "TesteConta", 12);
console.log(account);

class Transaction {
  private description: string;
  private value: number;
  private date: string;

  constructor(description: string, value: number, date: string) {
    (this.description = description), (this.value = value), (this.date = date);
  }
}

//3
class Bank {
  private accounts: UserAccount[];

  constructor(accounts: UserAccount[]) {
    this.accounts = accounts;
  }
  getNome = () => console.log(this.accounts);
}

app;
