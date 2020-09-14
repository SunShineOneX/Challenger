package com.challenger.demo.controllers;

import com.challenger.demo.models.Monitor;
import com.challenger.demo.services.MonitorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/monitors")
public class MonitorController {

    @Autowired
    MonitorService monitorService;

    @GetMapping
    public Iterable<Monitor> findAll() {
        return monitorService.listMonitors();
    }

    @PostMapping
    public Monitor createMonitor(@RequestBody Monitor monitor) {
        return monitorService.createMonitor(monitor);
    }

    @DeleteMapping("/{monitorId}")
    public HttpStatus deleteMonitor(@PathVariable long monitorId) {
        return monitorService.deleteMonitor(monitorId);

    }

}

