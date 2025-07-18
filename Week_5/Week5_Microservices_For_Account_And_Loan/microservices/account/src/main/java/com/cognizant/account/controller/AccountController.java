package com.cognizant.account.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

@RestController
public class AccountController {

    @GetMapping("/accounts/{number}")
    public Map<String, Object> getAccountByNumber(@PathVariable String number) {
        // Return dummy response (you can change the number based on input too if needed)
        return Map.of(
            "number", "00987987973432",
            "type", "savings",
            "balance", 234343
        );
    }
}
