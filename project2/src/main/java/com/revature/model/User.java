package com.revature.model;

import java.util.Objects;

public class User {

    private int id;

    private String firstName;

    private String middleInitial;

    private String lastName;

    private int ssn;

    private String email;

    private int phoneNumber;

    private String country;

    private String state;

    private String city;

    private int zipcode;

    private String username;

    private String password;


    public User() {}

    public User(int id, String firstName, String middleInitial, String lastName, int ssn, String email, int phoneNumber, String country, String state, String city, int zipcode, String username, String password){
        this.id = id;
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.ssn = ssn;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.country = country;
        this.state = state;
        this.city = city;
        this.zipcode = zipcode;
        this.username = username;
        this. password = password;

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMiddleInitial() {
        return middleInitial;
    }

    public void setMiddleInitial(String middleInitial) {
        this.middleInitial = middleInitial;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getSsn() {
        return ssn;
    }

    public void setSsn(int ssn) {
        this.ssn = ssn;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(int phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public int getZipcode() {
        return zipcode;
    }

    public void setZipcode(int zipcode) {
        this.zipcode = zipcode;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return id == user.id && ssn == user.ssn && phoneNumber == user.phoneNumber && zipcode == user.zipcode && Objects.equals(firstName, user.firstName) && Objects.equals(middleInitial, user.middleInitial) && Objects.equals(lastName, user.lastName) && Objects.equals(email, user.email) && Objects.equals(country, user.country) && Objects.equals(state, user.state) && Objects.equals(city, user.city) && Objects.equals(username, user.username) && Objects.equals(password, user.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, firstName, middleInitial, lastName, ssn, email, phoneNumber, country, state, city, zipcode, username, password);
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", middleInitial='" + middleInitial + '\'' +
                ", lastName='" + lastName + '\'' +
                ", ssn=" + ssn +
                ", email='" + email + '\'' +
                ", phoneNumber=" + phoneNumber +
                ", country='" + country + '\'' +
                ", state='" + state + '\'' +
                ", city='" + city + '\'' +
                ", zipcode=" + zipcode +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
