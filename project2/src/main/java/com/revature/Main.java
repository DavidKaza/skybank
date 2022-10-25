package com.revature;

import com.revature.controller.AuthController;
import io.javalin.Javalin;

public class Main {

    public static void main(String[] args) {


        Javalin app = Javalin.create();

        AuthController ac = new AuthController();
        ac.mapEndpoints(app);

//        ReimbursementController reimbursementController = new ReimbursementController();
//        reimbursementController.mapEndpoints(app);

        app.start(8080);
    }
}
