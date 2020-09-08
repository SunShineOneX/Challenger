package com.challenger.demo.services;

import com.challenger.demo.models.Monitor;
import org.springframework.http.HttpStatus;

public interface MonitorService {
    public Iterable<Monitor> listMonitors();
    public Monitor createMonitor(Monitor monitor);
    public Monitor queryMonitors(String model, String manufacturer);
    public HttpStatus deleteMonitor(long monitorId);

    // create monitor
    // list monitor
    // delete monitor
    // query monitor
}
