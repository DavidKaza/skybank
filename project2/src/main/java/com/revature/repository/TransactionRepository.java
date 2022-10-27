package com.revature.repository;

import com.revature.model.Transaction;
import com.revature.model.Transfer;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

public class TransactionRepository {

    public void transfer(Transfer t) throws SQLException {

        try (Connection connectionObj = ConnectionFactory.createConnection()) {
            // Setup procedure to call.
            Statement stmt = connectionObj.createStatement();
            //create or replace
            stmt.execute("drop procedure transfer(amount numeric, sending_acc integer, receiving_acc integer, message varchar(500))" +
                    " language plpgsql " +
                    " as $$ " +
                    " declare pre_transaction numeric;" +
                    " declare receiving_person integer;" +
                    " begin " +
                    "    select balance from accounts into pre_transaction where id = sending_acc; " +
                    "    select id from accounts into receiving_person where id = receiving_acc;" +
                    "    if not found then " +
                    "       raise 'No such account exists';" +
                    "    elseif pre_transaction - amount < 0 then raise 'Insufficient Funds';" +
                    "       else " +
                    "           update accounts set balance = balance - amount where id = sender_acc;" +
                    "           update accounts set balance = balance + amount where id = receiving_acc;" +
                    "           insert into transactions (date, from_account_id, to_account_id, total_amount, note) values (current_timestamp, sending_acc, receiving_account, amount, message)" +
                    "   end if;" +
                    "   commit; " +
                    " end; " +
                    " $$ ");
            stmt.close();

// As of v11, we must be outside a transaction for procedures with transactions to work.
            connectionObj.setAutoCommit(true);

// Procedure call with transaction
            CallableStatement transfer = connectionObj.prepareCall("{call transfer(?, ?, ?, ?)}");
            transfer.setInt(1, t.getAmount());
            transfer.setInt(2, t.getSendingAccount());
            transfer.setInt(3, t.getReceivingAccount());
            transfer.setString(4, t.getMessage());
            transfer.execute();
            transfer.close();
        }
    }
}