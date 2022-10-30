package com.revature.service;

import com.revature.exception.AccountDoesntExistException;
import com.revature.model.Account;
import com.revature.model.Transaction;
import com.revature.model.Transfer;
import com.revature.repository.TransactionRepository;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class TransactionService {

    //will have to add exceptions if balance is less than 0, or if account doesn't exist
    private TransactionRepository transactionRepository = new TransactionRepository();

    public void transfer(Transfer t) throws  SQLException {


        transactionRepository.transfer(t);
    }

    public List<Transaction> getAllTransactionsForUser(int userId) throws SQLException {
        List<Transaction> transactions = transactionRepository.getAllTransactionsForUser(userId);
        return transactions;
    }
        
}
