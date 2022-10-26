package com.revature.controller;

import com.revature.model.Account;
import com.revature.model.User;
import com.revature.service.AccountService;
import io.javalin.Javalin;

import javax.servlet.http.HttpSession;
import java.util.List;

public class AccountController {


    private AccountService accountService = new AccountService();

    public void mapEndpoints(Javalin app) {
        // Endpoint is for user to view own account balance
        app.get("/users/{userId}/balance", (ctx) -> {
            HttpSession httpSession = ctx.req.getSession();

            User user = (User) httpSession.getAttribute("user");

            if (user != null) { // Check if logged in
                    int fkUsersId = Integer.parseInt(ctx.pathParam("fk_users_id"));
                    if (user.getId() == fkUsersId) {
                        List<Account> reimbursements = accountService.getAllBalancesforUser(fkUsersId);
                        ctx.json(reimbursements);
                    } else {
                        ctx.result("You are not logged in as the user you are trying to retrieve reimbursements from");
                        ctx.status(401);
                    }
            } else {
                ctx.result("You are not logged in!");
                ctx.status(401);
            }
        });
    }
}
