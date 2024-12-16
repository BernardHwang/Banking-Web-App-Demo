// package com.example.java_bank_app_demo;

// import org.springframework.boot.SpringApplication;
// import org.springframework.boot.autoconfigure.SpringBootApplication;

// @SpringBootApplication
// public class JavaBankAppDemoApplication {

// 	public static void main(String[] args) {
// 		SpringApplication.run(JavaBankAppDemoApplication.class, args);
// 	}

// }

package com.example.java_bank_app_demo;

import java.io.IOException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
// import org.springframework.stereotype.Component;

// 1. Import
// import com.launchdarkly.sdk.LDContext;
import com.launchdarkly.sdk.server.LDClient;

@SpringBootApplication
public class JavaBankAppDemoApplication {
    private LDClient client;
    // private final Map<String, Boolean> featureFlags = new HashMap<>();

    public static void main(String[] args) {
        SpringApplication.run(JavaBankAppDemoApplication.class, args);
    }

    // 2. Bean definition for LDClient
    @Bean
    public LDClient ldClient() {
        client = new LDClient("sdk-75e9f6aa-26bc-4d60-8c36-3c2110ff27ea");

        if (client != null && client.isInitialized()) {
            System.out.println("SDK connected successfully!");

            // // 3. Evaluate context
            // LDContext context = LDContext.builder("user-key")
            //     .set("name", "MH1")
            //     .set("email", "mh1@gmail.com")
            //     .build();

            // // 4. Evaluate flag
            // featureFlags.put("maintenance-feature", client.boolVariation("maintenance-feature", context, false));
            // featureFlags.put("test-feature-mh", client.boolVariation("test-feature-mh", context, false));

            // System.out.println("Feature flags initialized: " + featureFlags);
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
