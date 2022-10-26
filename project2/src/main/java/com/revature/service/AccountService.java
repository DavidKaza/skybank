package com.revature.service;

import com.revature.model.Account;
import com.revature.repository.AccountRepository;

import java.sql.SQLException;
import java.util.List;

public class AccountService {

    private AccountRepository accountRepository= new AccountRepository();

    public List<Account> getAllBalancesforUser(int fkUserId) throws SQLException {
        return accountRepository.getAllBalancesforUser(fkUserId);
    }
}
