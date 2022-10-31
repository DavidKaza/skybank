package com.revature;

import com.revature.controller.AccountController;
import com.revature.controller.AuthController;
import com.revature.controller.TransactionController;
import com.revature.model.*;
import io.javalin.Javalin;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {

    public static void main(String[] args) {

        Javalin app = Javalin.create(config -> {
            config.enableCorsForAllOrigins();
        });

            AuthController ac = new AuthController();
        ac.mapEndpoints(app);

        AccountController accountController = new AccountController();
        accountController.mapEndpoints(app);

        TransactionController transactionController = new TransactionController();
        transactionController.mapEndpoints(app);

        app.start(8080);

    }
}


//        try (ClassPathXmlApplicationContext container = new ClassPathXmlApplicationContext("beans.xml")){
//
//            AuthController authController = container.getBean(AuthController.class);
//            authController.mapEndpoints(app);
//
//            AccountController accountController = container.getBean(AccountController.class);
//            accountController.mapEndpoints(app);
//
//            TransactionController transactionController = container.getBean(TransactionController.class);
//            transactionController.mapEndpoints(app);
//
//            Account account = container.getBean(Account.class);
//
//            AccountType accountType = container.getBean(AccountType.class);
//
//            Transaction transaction = container.getBean(Transaction.class);
//
//            Transfer transfer = container.getBean(Transfer.class);
//
//            User user = container.getBean(User.class);
//
//        }catch(Exception e) {
//            //TODO: handle exception
//        }
//
//        app.start(8080);
//
//        try (AnnotationConfigApplicationContext container = new AnnotationConfigApplicationContext("beans.xml")){
//
//        }catch(Exception e) {
//            //TODO: handle exception
//        }