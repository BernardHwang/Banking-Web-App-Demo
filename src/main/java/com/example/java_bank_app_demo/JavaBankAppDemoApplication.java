// package com.example.java_bank_app_demo;

// import org.springframework.boot.SpringApplication;
// import org.springframework.boot.autoconfigure.SpringBootApplication;

// @SpringBootApplication
// public class JavaBankAppDemoApplication {

// 	public static void main(String[] args) {
// 		SpringApplication.run(JavaBankAppDemoApplication.class, args);
// 	}

// }

// ----------------------------------------------------------------------------------
// package com.example.java_bank_app_demo;

// import java.io.IOException;
// import org.springframework.boot.SpringApplication;
// import org.springframework.boot.autoconfigure.SpringBootApplication;
// // 1. Import
// import com.launchdarkly.sdk.*;
// import com.launchdarkly.sdk.server.*;

// @SpringBootApplication
// public class JavaBankAppDemoApplication {
//     public static void main(String[] args) {
//         // 2. Initialize the LaunchDarkly SDK
//         LDClient client = new LDClient("sdk-75e9f6aa-26bc-4d60-8c36-3c2110ff27ea");

//         try {
//             // Check if the client is initialized and connected
//             if (client.isInitialized()) {
//                 System.out.println("SDK connected successfully!");
//             } else {
//                 System.out.println("Failed to connect SDK.");
//             }

//             // 3. Evaluate context
//             LDContext context = LDContext.builder("user-key") // by default the kind is "user"
// 				.set("name", "MH1")
// 				.set("email", "mh1@gmail.com")
//                 .build();
// 			// 4. Evaluate flag
//             boolean flagValue = client.boolVariation("test-feature-mh", context, false);

//             if (flagValue) {
//                 System.out.println("Feature is enabled for the user!");
//             } else {
//                 System.out.println("Feature is disabled for the user!");
//             }

//             // 5. Close the client when done
//             client.close();
//         } catch (IOException e) {
//             e.printStackTrace();
//             System.out.println("An error occurred while closing the SDK client.");
//         }

//         // Start the Spring Boot application
//         SpringApplication.run(JavaBankAppDemoApplication.class, args);
//     }
// }
//---------------------------------------------------------------------------------------------------
package com.example.java_bank_app_demo;

import java.io.IOException;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
// import org.springframework.stereotype.Component;

// 1. Import
import com.launchdarkly.sdk.LDContext;
import com.launchdarkly.sdk.server.LDClient;

@SpringBootApplication
public class JavaBankAppDemoApplication {
    private LDClient client;

    public static void main(String[] args) {
        SpringApplication.run(JavaBankAppDemoApplication.class, args);
    }

    // 2. Bean definition for LDClient
    @Bean
    public LDClient ldClient() {
        client = new LDClient("sdk-75e9f6aa-26bc-4d60-8c36-3c2110ff27ea");

        if (client != null && client.isInitialized()) {
            System.out.println("SDK connected successfully!");

            // 3. Evaluate context
            LDContext context = LDContext.builder("user-key")
                .set("name", "MH1")
                .set("email", "mh1@gmail.com")
                .build();

            // 4. Evaluate flag
            boolean flagValue = client.boolVariation("test-feature-mh", context, false);
            System.out.println("Feature is " + (flagValue ? "enabled" : "disabled") + " for the user.");
        } else {
            System.out.println("Failed to connect SDK.");
        }

        // Add shutdown hook to close the client
        Runtime.getRuntime().addShutdownHook(new Thread(() -> {
            try {
                if (client != null) {
                    client.close();
                    System.out.println("LaunchDarkly SDK connection closed.");
                }
            } catch (IOException e) {
                e.printStackTrace();
                System.out.println("Error while closing LaunchDarkly SDK connection.");
            }
        }));

        return client;
    }
}
