package com.revature.repository;

import com.revature.model.Account;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class AccountRepository {

    //list all of your (employee) reimbursements
    public List<Account> getAllBalancesforUser(int fkUserId) throws SQLException {
        try (Connection connectionObject = ConnectionFactory.createConnection()) {

            List<Account> accounts = new ArrayList<>();

            String sql = "SELECT * FROM accounts WHERE fk_users_is =?";

            PreparedStatement pstmt = connectionObject.prepareStatement(sql);

            pstmt.setInt(1, fkUserId);

            ResultSet rs = pstmt.executeQuery();

            while (rs.next()) {
                int id = rs.getInt("id");
                int balance = rs.getInt("balance");
                String nickname = rs.getString("nickname");
                int fkAccountType = rs.getInt("fk_account_type");
                int fkUsersId = rs.getInt("fk_users_id");

                Account account = new Account(id, balance, nickname, fkAccountType, fkUsersId);

                accounts.add(account);
            }

            return accounts;
        }
    }
}
