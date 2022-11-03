package com.revature.repository;

import com.revature.model.Account;
import com.revature.model.Transaction;
import com.revature.model.Transfer;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class TransactionRepository {

    public void transfer(Transfer t) throws SQLException {

        try (Connection connectionObj = ConnectionFactory.createConnection()) {
            connectionObj.createStatement();

            CallableStatement transfer = connectionObj.prepareCall("call transfer(?, ?, ?, ?)");
            transfer.setInt(1, t.getAmount());
            transfer.setInt(2, t.getSendingAccount());
            transfer.setInt(3, t.getReceivingAccount());
            transfer.setString(4, t.getMessage());
            transfer.execute();
            transfer.close();
        }
    }

    // list all of your transactions
    public List<Transaction> getAllTransactionsForUser(int userId) throws SQLException {
        try (Connection connectionObject = ConnectionFactory.createConnection()) {

            List<Transaction> transactions = new ArrayList<>();

            // String sql = "SELECT * FROM transactions WHERE = ?";

            // PreparedStatement pstmt = connectionObject.prepareStatement(sql);
            CallableStatement cstmt = connectionObject.prepareCall("select * from allTransactions(?)");

            cstmt.setInt(1, userId);

            // ResultSet rs = pstmt.executeQuery();
            ResultSet rs = cstmt.executeQuery();

            while (rs.next()) {
                int id = rs.getInt("id");
                Timestamp time = rs.getTimestamp("date");
                int fromAccountId1 = rs.getInt("from_account_id");
                int toAccountId = rs.getInt("to_account_id");
                int totalAmount = rs.getInt("total_amount");
                String note = rs.getString("note");

                Transaction transaction = new Transaction(id, time, fromAccountId1, toAccountId, totalAmount, note);

                transactions.add(transaction);
            }

            return transactions;
        }
    }

    public Account getAccountsById(int sendingAccount, int receivingAccount) throws SQLException {
        try (Connection connectionObj = ConnectionFactory.createConnection()) {
            String sql = "SELECT * FROM project2.accounts as a WHERE a.id = ? AND a.id = ?";
            PreparedStatement pstmt = connectionObj.prepareStatement(sql);

            pstmt.setInt(1, sendingAccount);
            pstmt.setInt(1, receivingAccount);

            ResultSet rs = pstmt.executeQuery();

            if (rs.next()) {
                int id = rs.getInt("id");
                int b = rs.getInt("balance");
                String n = rs.getString("nickname");
                int at = rs.getInt("fk_account_type");
                int ui = rs.getInt("fk_user_id");

                return new Account(id, b, n, at, ui);
            } else {
                return null;
            }
        }
    }

    // add getAccountsOfUser so that you can fix the bug Yasin found
    public Account getAccountsOfUser(int fkUserId) throws SQLException {
        try (Connection connectionObject = ConnectionFactory.createConnection()) {
            String sql = "Select * From project2.accounts as a WHERE a.fk_users_id = ?";
            PreparedStatement pstmt = connectionObject.prepareStatement(sql);

            pstmt.setInt(1, fkUserId);

            ResultSet rs = pstmt.executeQuery();

            if (rs.next()) {

                int id = rs.getInt("id");
                int bal = rs.getInt("balance");
                String nn = rs.getString("nickname");
                int at = rs.getInt("fk_account_type");
                int ui = rs.getInt("fk_users_id");

                return new Account(id, bal, nn, at, ui);
            } else {
                return null;
            }
        }
    }

    public ArrayList<Integer> getAccounts(int fkUserId) throws SQLException {
        try (Connection connectionObject = ConnectionFactory.createConnection()) {
            String sql = "Select * From project2.accounts as a WHERE a.fk_users_id = ?";
            PreparedStatement pstmt = connectionObject.prepareStatement(sql);

            pstmt.setInt(1, fkUserId);

            ResultSet rs = pstmt.executeQuery();

            ArrayList<Integer> account = new ArrayList<>();

            while (rs.next()) {

                int id = rs.getInt("id");
                account.add(id);
            }
            return account;
        }
    }
}