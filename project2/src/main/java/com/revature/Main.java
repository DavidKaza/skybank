package com.revature;

import com.revature.controller.AccountController;
import com.revature.controller.AuthController;
import com.revature.controller.TransactionController;
import io.javalin.Javalin;

public class Main {

    public static void main(String[] args) {

//        Javalin app = Javalin.create(config -> {
//            config.enableCorsForAllOrigins();
//        });

        Javalin app = Javalin.create();

        AuthController ac = new AuthController();
        ac.mapEndpoints(app);

        AccountController accountController = new AccountController();
        accountController.mapEndpoints(app);

        TransactionController transactionController = new TransactionController();
        transactionController.mapEndpoints(app);

        app.start(8080);
    }
}
