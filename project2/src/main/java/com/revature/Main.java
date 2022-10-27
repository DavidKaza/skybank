package com.revature;

import com.revature.controller.AuthController;
import io.javalin.Javalin;

public class Main {

    public static void main(String[] args) {

//        Javalin app = Javalin.create(config -> {
//            config.enableCorsForAllOrigins();
//        });

        Javalin app = Javalin.create();

        AuthController ac = new AuthController();
        ac.mapEndpoints(app);

        app.start(8070);
    }
}
