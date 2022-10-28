package com.revature.controller;

import com.revature.model.Account;
import com.revature.model.Transaction;
import com.revature.model.Transfer;
import com.revature.model.User;
import com.revature.service.TransactionService;
import io.javalin.Javalin;

import javax.servlet.http.HttpSession;
import java.util.List;

public class TransactionController {

    private TransactionService transactionService = new TransactionService();

    public void mapEndpoints(Javalin app) {


        // Endpoint is for user to "request" transaction
        app.post("/users/{userId}/transactions", (ctx) -> {
            HttpSession httpSession = ctx.req.getSession();

            User user = (User) httpSession.getAttribute("user");
            Transfer transferAdded = ctx.bodyAsClass(Transfer.class);

            if (user != null) { // Check if logged in

                int userId = Integer.parseInt(ctx.pathParam("userId"));
                if (user.getId() == userId) {
                    transactionService.transfer(transferAdded);
                    ctx.json(transferAdded);
                } else {
                    ctx.result("You are not logged in as the user you are trying to retrieve your balance from");
                    ctx.status(401);
                }
            } else {
                ctx.result("You are not logged in!");
                ctx.status(401);
            }
        });

        // Endpoint is for user to view all transactions they're involved with
        app.get("/users/{userId}/transactions", (ctx) -> {
            HttpSession httpSession = ctx.req.getSession();

            User user = (User) httpSession.getAttribute("user");

            if (user != null) { // Check if logged in

                int userId = Integer.parseInt(ctx.pathParam("userId"));
                if (user.getId() == userId) {
                    List<Transaction> transactions = transactionService.getAllTransactionsForUser(userId);
                    ctx.json(transactions);
                } else {
                    ctx.result("You are not logged in as the user you are trying to retrieve your balance from");
                    ctx.status(401);
                }
            } else {
                ctx.result("You are not logged in!");
                ctx.status(401);
            }
        });
    }
}
