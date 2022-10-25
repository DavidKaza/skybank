package com.revature.repository;

import com.revature.model.User;
import com.revature.model.UserLogin;

import java.sql.*;
public class UserRepository {


    //Register
    public UserLogin addUser(User user, UserLogin userLogin) throws SQLException {

        try (Connection connectionObject = ConnectionFactory.createConnection()) {
            String sql1 = "insert into users (first_name, middle_initial, last_name, ssn, email, phone_number, country, state, city, zipcode) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

            PreparedStatement pstmt1 = connectionObject.prepareStatement(sql1, Statement.RETURN_GENERATED_KEYS);

            pstmt1.setString(1, user.getFirstName());
            pstmt1.setString(2, user.getMiddleInitial());
            pstmt1.setString(3, user.getLastName());
            pstmt1.setInt(4, user.getSsn());
            pstmt1.setString(5, user.getEmail());
            pstmt1.setInt(6, user.getPhoneNumber());
            pstmt1.setString(7, user.getCountry());
            pstmt1.setString(8, user.getState());
            pstmt1.setString(9, user.getCity());
            pstmt1.setInt(10, user.getZipcode());

            int numberOfRecordsAdded1 = pstmt1.executeUpdate(); // returns an int

            ResultSet rs1 = pstmt1.getGeneratedKeys();
            rs1.next();
            int id1 = rs1.getInt(1);


            String sql2 = "insert int users_login (username, password, fk_users_id) values (?, ?, ?)";

            PreparedStatement pstmt2 = connectionObject.prepareStatement(sql2, Statement.RETURN_GENERATED_KEYS);

            pstmt2.setString(1, userLogin.getUsername());
            pstmt2.setString(2, userLogin.getPassword());
            pstmt2.setInt(3, user.getId());

            int numberOfRecordsAdded2 = pstmt2.executeUpdate(); // returns an int

            ResultSet rs2 = pstmt2.getGeneratedKeys();
            rs2.next();
            int id2 = rs2.getInt(1);


            return new UserLogin(id2, userLogin.getUsername(), userLogin.getPassword(), userLogin.getFkUsersId());
        }

    }




    public UserLogin getUserByUsername(String username) throws SQLException{
        try (Connection connectionObj = ConnectionFactory.createConnection()) {
            String sql = "SELECT * FROM users_login as u WHERE u.username = ?";
            PreparedStatement pstmt = connectionObj.prepareStatement(sql);

            pstmt.setString(1, username);

            ResultSet rs = pstmt.executeQuery(); // ResultSet represents a temporary table that contains all data that we have
            // queried for

            if (rs.next()) { // returns a boolean indicating whether there is a record or not for the "next" row AND iterates to the next row
                int id = rs.getInt("id");
                String un = rs.getString("username");
                String pw = rs.getString("password");
                int usersId = rs.getInt("fk_users_id");

                return new UserLogin(id, un, pw, usersId);
            } else {
                return null;
            }

        }
    }

    //login
    public UserLogin getUserByUsernameAndPassword(String username, String password) throws SQLException {
        try (Connection connectionObj = ConnectionFactory.createConnection()) {
            String sql = "SELECT * FROM users as u WHERE u.username = ? AND u.password = ?";
            PreparedStatement pstmt = connectionObj.prepareStatement(sql);

            pstmt.setString(1, username);
            pstmt.setString(2, password);

            ResultSet rs = pstmt.executeQuery();

            if (rs.next()) {
                int id = rs.getInt("id");
                String un = rs.getString("username");
                String pw = rs.getString("password");
                int userId = rs.getInt("fk_users_id");

                return new UserLogin(id, un, pw, userId);
            } else {
                return null;
            }
        }
    }
}

