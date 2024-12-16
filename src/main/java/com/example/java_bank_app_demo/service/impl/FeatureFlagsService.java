package com.example.java_bank_app_demo.service.impl;

import com.launchdarkly.sdk.LDContext;
import com.launchdarkly.sdk.server.LDClient;
// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class FeatureFlagsService {

    private final LDClient ldClient;
    private final Map<String, Boolean> featureFlags = new HashMap<>();

    // @Autowired
    public FeatureFlagsService(LDClient ldClient) {
        this.ldClient = ldClient;
        initializeFlags();
    }

    // Initialize all feature flags and store their values
    private void initializeFlags() {
        if (!ldClient.isInitialized()) {
            System.out.println("LaunchDarkly SDK not initialized.");
            return;
        }

        LDContext context = LDContext.builder("user-minghui")
            .set("name", "minghui")
            .set("email", "mh123@gmail.com")
            .build();

        // Define and evaluate all feature flags here
        featureFlags.put("maintenance-feature", ldClient.boolVariation("maintenance-feature", context, false));
        featureFlags.put("test-feature-mh", ldClient.boolVariation("test-feature-mh", context, false));

        System.out.println("Feature flags initialized: " + featureFlags);

        // Print all flags for debugging
        System.out.println("All feature flags:");
        for (Map.Entry<String, Boolean> entry : featureFlags.entrySet()) {
            System.out.println("Flag: " + entry.getKey() + ", Value: " + entry.getValue());
        }
    }

    // Retrieve the value of a specific feature flag
    public boolean getFeatureFlag(String flagName) {
        return featureFlags.getOrDefault(flagName, false); // Default to false if flag not found
    }

    // Refresh flags dynamically if needed
    public void refreshFlags() {
        featureFlags.clear();
        initializeFlags();
    }
}
