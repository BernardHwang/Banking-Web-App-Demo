// package com.example.java_bank_app_demo;

// import java.io.IOException;
// import javax.annotation.PostConstruct;
// import org.springframework.stereotype.Component;
// // 1. Import
// import com.launchdarkly.sdk.*;
// import com.launchdarkly.sdk.server.*;

// @Component // makes it a Spring-managed bean
// public class LaunchDarklyExample {

//     @PostConstruct // ensures that the init method is called after the bean is initialized
//     public void init() {
//         // 2. SDK key put here
//         LDClient client = new LDClient("sdk-75e9f6aa-26bc-4d60-8c36-3c2110ff27ea");

//         try {
//             // Check if the client is initialized and connected
//             if (client.isInitialized()) {
//                 System.out.println("SDK connected successfully!");
//             } else {
//                 System.out.println("Failed to connect SDK.");
//             }

//             // 3. Evaluate context
//             LDContext context = LDContext.builder("mh1") // if you don’t specify a kind, it will be set to "user"
//                 .name("MH1")
//                 .build();
//             // boolean flagValue = client.boolVariation("flag-key-123abc", context, false);

//             // if (flagValue) {
//             //     System.out.println("Feature is enabled for the user!");
//             // } else {
//             //     System.out.println("Feature is disabled for the user!");
//             // }

//             // 4. Close the client when done
//             client.close();
//         } catch (IOException e) {
//             e.printStackTrace();
//             System.out.println("An error occurred while closing the SDK client.");
//         }
//     }
// }
