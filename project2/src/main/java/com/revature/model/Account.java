package com.revature.model;

import java.util.Objects;

public class Account {
    private float balance;
    private String nickname;

    public Account() {
    }

    public Account(float balance, String nickname) {
        this.balance = balance;
        this.nickname = nickname;
    }

    public float getBalance() {
        return balance;
    }

    public void setBalance(float balance) {
        this.balance = balance;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    @Override
    public String toString() {
        return "Account{" +
                "balance=" + balance +
                ", nickname='" + nickname + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Account account = (Account) o;
        return Float.compare(account.balance, balance) == 0 && nickname.equals(account.nickname);
    }

    @Override
    public int hashCode() {
        return Objects.hash(balance, nickname);
    }
}
