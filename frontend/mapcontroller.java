package com.ambulancenav.controller;

import com.ambulancenav.model.TrafficData;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class MapController {

    @GetMapping("/traffic")
    public String getTrafficData() {
        return "Real-time traffic data goes here.";
    }

    @PostMapping("/update-traffic")
    public String updateTrafficData(@RequestBody TrafficData data) {
        // Handle traffic updates
        return "Traffic data updated.";
    }
}
