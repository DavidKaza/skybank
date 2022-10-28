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

            pstmt.setString(1, user.getFirstName());
            pstmt.setString(2, user.getMiddleInitial());
            pstmt.setString(3, user.getLastName());
            pstmt.setString(4, user.getSsn());
            pstmt.setString(5, user.getEmail());
            pstmt.setString(6, user.getPhoneNumber());
            pstmt.setString(7, user.getCountry());
            pstmt.setString(8, user.getState());
            pstmt.setString(9, user.getCity());
            pstmt.setString(10, user.getZipcode());
            pstmt.setString(11, user.getUsername());
            pstmt.setString(12, user.getPassword());

            int numberOfRecordsAdded = pstmt.executeUpdate(); // returns an int

            ResultSet rs = pstmt.getGeneratedKeys();
            rs.next();
            int id = rs.getInt(1);

            return new User(id, user.getFirstName(), user.getMiddleInitial(), user.getLastName(), user.getSsn(), user.getEmail(), user.getPhoneNumber(), user.getCountry(), user.getState(), user.getCity(), user.getZipcode(), user.getUsername(), user.getPassword());
        }

    }




    public User getUserByUsername(String username) throws SQLException{
        try (Connection connectionObj = ConnectionFactory.createConnection()) {
            String sql = "SELECT * FROM users as u WHERE u.username = ?";
            PreparedStatement pstmt = connectionObj.prepareStatement(sql);

            pstmt.setString(1, username);

            ResultSet rs = pstmt.executeQuery(); // ResultSet represents a temporary table that contains all data that we have
            // queried for

            if (rs.next()) { // returns a boolean indicating whether there is a record or not for the "next" row AND iterates to the next row

                int id = rs.getInt("id");
                String fn = rs.getString("first_name");
                String mi = rs.getString("middle_initial");
                String ln = rs.getString("last_name");
                String ssn = rs.getString("ssn");
                String em = rs.getString("email");
                String pn = rs.getString("phone_number");
                String ctry = rs.getString("country");
                String st = rs.getString("state");
                String cty = rs.getString("city");
                String zc = rs.getString("zipcode");
                String un = rs.getString("username");
                String pw = rs.getString("password");

                return new User(id, fn, mi, ln, ssn, em, pn, ctry, st, cty, zc, un, pw);
            } else {
                return null;
            }

        }
    }

    //login
    public User getUserByUsernameAndPassword(String username, String password) throws SQLException {
        try (Connection connectionObj = ConnectionFactory.createConnection()) {
            String sql = "SELECT * FROM users as u WHERE u.username = ? AND u.password = ?";
            PreparedStatement pstmt = connectionObj.prepareStatement(sql);

            pstmt.setString(1, username);
            pstmt.setString(2, password);

            ResultSet rs = pstmt.executeQuery();

            if (rs.next()) {

                int id = rs.getInt("id");
                String fn = rs.getString("first_name");
                String mi = rs.getString("middle_initial");
                String ln = rs.getString("last_name");
                String ssn = rs.getString("ssn");
                String em = rs.getString("email");
                String pn = rs.getString("phone_number");
                String ctry = rs.getString("country");
                String st = rs.getString("state");
                String cty = rs.getString("city");
                String zc = rs.getString("zipcode");
                String un = rs.getString("username");
                String pw = rs.getString("password");

                return new User(id, fn, mi, ln, ssn, em, pn, ctry, st, cty, zc, un, pw);
            } else {
                return null;
            }
        }
    }
}

