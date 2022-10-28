package com.revature.service;

import com.revature.model.Transfer;
import com.revature.repository.TransactionRepository;

import java.sql.SQLException;

public class TransactionService {

    //will have to add exceptions if balance is less than 0, or if account doesn't exist
    private TransactionRepository transactionRepository = new TransactionRepository();

    public void transfer(Transfer t) throws SQLException {
        transactionRepository.transfer(t);
    }
}
