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
        app.before(ctx -> ctx.header("Access-Control-Allow-Credentials", "true"));
        app.post("/users/{userId}/transfer", (ctx) -> {
            HttpSession httpSession = ctx.req.getSession();

            User user = (User) httpSession.getAttribute("user");
            Transfer transferAdded = ctx.bodyAsClass(Transfer.class);

            if (user != null) { // Check if logged in

                int userId = Integer.parseInt(ctx.pathParam("userId"));
                if (user.getId() == userId) {

                    if (true){
                        transactionService.transfer(transferAdded);
                        ctx.json(transferAdded);

                    } else{
                        ctx.result("You must either be the sender or receiver of this transaction");
                        ctx.status(401);
                    }
                }else{
                    ctx.result("You must submit transactions for yourself");
                    ctx.status(401);
                }
            } else {
                ctx.result("You are not logged in!");
                ctx.status(401);
            }
        });

        // Endpoint is for user to view all transactions they're involved with
        app.before(ctx -> ctx.header("Access-Control-Allow-Credentials", "true"));
        app.get("/users/{userId}/transactions", (ctx) -> {
            HttpSession httpSession = ctx.req.getSession();

            User user = (User) httpSession.getAttribute("user");

            if (user != null) { // Check if logged in

                int userId = Integer.parseInt(ctx.pathParam("userId"));
                if (user.getId() == userId) {
                    List<Transaction> transactions = transactionService.getAllTransactionsForUser(userId);
                    ctx.json(transactions);
                } else {
                    ctx.result("You are not logged in as the user you are trying to retrieve your transactions from");
                    ctx.status(401);
                }
            } else {
                ctx.result("You are not logged in!");
                ctx.status(401);
            }
        });
    }
}
