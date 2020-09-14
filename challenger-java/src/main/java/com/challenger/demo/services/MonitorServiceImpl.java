package com.challenger.demo.services;

import com.challenger.demo.models.Monitor;
import com.challenger.demo.repositories.MonitorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class MonitorServiceImpl implements MonitorService{
    @Autowired
    private MonitorRepository monitorRepository;

    @Override
    public Iterable<Monitor> listMonitors() {
        return monitorRepository.findAll();
    }

    @Override
    public Monitor createMonitor(Monitor monitor) {
        return monitorRepository.save(monitor);
    }

    @Override
    public Monitor queryMonitors(String model, String manufacturer) {
        return null;
    }

    @Override
    public HttpStatus deleteMonitor(long monitorId) {
        monitorRepository.deleteById(monitorId);
        return HttpStatus.OK;
    }
}
