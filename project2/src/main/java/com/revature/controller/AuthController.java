package com.revature.controller;

import com.revature.model.Account;
import com.revature.repository.UserRepository;
import com.revature.service.AuthService;
import io.javalin.Javalin;

import java.util.ArrayList;

public class AuthController {

    private AuthService authService = new AuthService();
    private UserRepository ur = new UserRepository();

    public void mapEndpoints(Javalin app) {
        app.get("/accounts/3", (ctx) -> {
            ArrayList<Account> accounts = ur.getAccounts();
            ctx.json(accounts);
        });
    }
}
