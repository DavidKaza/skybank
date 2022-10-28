package com.revature.repository;

import com.revature.model.Account;

import java.sql.*;
import java.util.ArrayList;

public class UserRepository {

    public ArrayList getAccounts() throws SQLException {
        try (Connection co = ConnectionFactory.createConnection()) {
            String sql = "select balance, nickname from accounts join users on users.id = accounts.fk_users_id where users.id = 3";
            PreparedStatement pst = co.prepareStatement(sql);

            ResultSet rs = pst.executeQuery();

            ArrayList accounts = new ArrayList<Account>();

            while (rs.next()) {
                float b = rs.getFloat(1);
                String n = rs.getString(2);

                Account ac = new Account(b,n);
                accounts.add(ac);
            }
            return accounts;
        }
    }
}

