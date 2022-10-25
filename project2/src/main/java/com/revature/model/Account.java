package com.revature.model;

import java.util.Objects;

public class Account {

    private int id;
    private int balance;
    private String nickname;
    private int fkAccountType;
    private int fkUserId;

    public Account(){}

    public Account (int id, int balance, String nickname, int fkAccountTye, int fkUserId) {

        this.id = id;
        this.balance =balance;
        this.nickname = nickname;
        this.fkAccountType = fkAccountType;
        this.fkUserId = fkUserId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getBalance() {
        return balance;
    }

    public void setBalance(int balance) {
        this.balance = balance;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public int getFkAccountType() {
        return fkAccountType;
    }

    public void setFkAccountType(int fkAccountType) {
        this.fkAccountType = fkAccountType;
    }

    public int getFkUserId() {
        return fkUserId;
    }

    public void setFkUserId(int fkUserId) {
        this.fkUserId = fkUserId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Account account = (Account) o;
        return id == account.id && balance == account.balance && fkAccountType == account.fkAccountType && fkUserId == account.fkUserId && Objects.equals(nickname, account.nickname);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, balance, nickname, fkAccountType, fkUserId);
    }

    @Override
    public String toString() {
        return "Account{" +
                "id=" + id +
                ", balance=" + balance +
                ", nickname='" + nickname + '\'' +
                ", fkAccountType=" + fkAccountType +
                ", fkUserId=" + fkUserId +
                '}';
    }
}