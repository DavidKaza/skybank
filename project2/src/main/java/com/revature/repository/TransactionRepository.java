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
            // Setup procedure to call.
            Statement stmt = connectionObj.createStatement();
            //create or replace
//            stmt.execute("drop procedure if exists transfer(amount numeric, sending_acc integer, receiving_acc integer, message varchar(500))");
//
//            stmt.execute("create procedure transfer(amount numeric, sending_acc integer, receiving_acc integer, message varchar(500))" +
//                    " language plpgsql " +
//                    " as $$ " +
//                    " declare pre_transaction numeric;" +
//                    " declare receiving_person integer;" +
//                    " begin " +
//                    "    select balance from project2.accounts into pre_transaction where id = sending_acc; " +
//                    "    select id from project2.accounts into receiving_person where id = receiving_acc;" +
//                    "    if not found then " +
//                    "       raise 'No such account exists';" +
//                    "    elseif pre_transaction - amount < 0 then raise 'Insufficient Funds';" +
//                    "       else " +
//                    "           update project2.accounts set balance = balance - amount where id = sending_acc;" +
//                    "           update project2.accounts set balance = balance + amount where id = receiving_acc;" +
//                    "           insert into transactions (date, from_account_id, to_account_id, total_amount, note) values (current_timestamp, sending_acc, receiving_account, amount, message);" +
//                    "    end if;" +
//                    "    commit;" +
//                    " end;" +
//                    " $$; ");
//            stmt.close();
//
//// As of v11, we must be outside a transaction for procedures with transactions to work.
//            connectionObj.setAutoCommit(true);

// Procedure call with transaction
            CallableStatement transfer = connectionObj.prepareCall("call transfer(?, ?, ?, ?)");
            transfer.setInt(1, t.getAmount());
            transfer.setInt(2, t.getSendingAccount());
            transfer.setInt(3, t.getReceivingAccount());
            transfer.setString(4, t.getMessage());
            transfer.execute();
            transfer.close();
        }
    }

    //list all of your transactions
    public List<Transaction> getAllTransactionsForUser(int fromAccountId) throws SQLException {
        try (Connection connectionObject = ConnectionFactory.createConnection()) {

            List<Transaction> transactions = new ArrayList<>();

            String sql = "SELECT * FROM transactions WHERE from_account_id = ?";

            PreparedStatement pstmt = connectionObject.prepareStatement(sql);

            pstmt.setInt(1, fromAccountId);

            ResultSet rs = pstmt.executeQuery();

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

}