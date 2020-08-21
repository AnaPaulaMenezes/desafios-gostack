import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const reducer = (
      accumulator: Balance,
      transaction: Transaction,
    ): Balance => {
      if (transaction.type === 'income') {
        accumulator.income += transaction.value;
      } else if (transaction.type === 'outcome') {
        accumulator.outcome += transaction.value;
      }

      accumulator.total = accumulator.income - accumulator.outcome;
      return accumulator;
    };
    const balance = this.transactions.reduce(reducer, {
      income: 0,
      outcome: 0,
      total: 0,
    });

    return balance;
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    const transaction = new Transaction({ title, type, value });
    this.transactions.push(transaction);
    return transaction;
  }
}

export default TransactionsRepository;
