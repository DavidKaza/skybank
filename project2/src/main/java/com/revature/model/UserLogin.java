package com.revature.model;

import java.util.Objects;

public class UserLogin {

   User user = new User();

    private int id;
    private String username;

    private String password;

    private int fkUsersId;

    public UserLogin(){}

    public UserLogin(int id, String username, String password, int fkUser){

        this.id = id;
        this.username = username;
        this.password = password;
        this.fkUsersId = fkUser;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getFkUsersId() {
        return fkUsersId;
    }

    public void setFkUsersId(int fkUsersId) {
        this.fkUsersId = fkUsersId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserLogin userLogin = (UserLogin) o;
        return id == userLogin.id && fkUsersId == userLogin.fkUsersId && Objects.equals(user, userLogin.user) && Objects.equals(username, userLogin.username) && Objects.equals(password, userLogin.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(user, id, username, password, fkUsersId);
    }

    @Override
    public String toString() {
        return "UserLogin{" +
                "user=" + user +
                ", id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", fkUsersId=" + fkUsersId +
                '}';
    }
}
