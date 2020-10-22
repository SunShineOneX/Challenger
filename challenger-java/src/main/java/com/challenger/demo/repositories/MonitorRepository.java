package com.challenger.demo.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.challenger.demo.models.Monitor;
public interface MonitorRepository extends CrudRepository<Monitor, Long> {
    @Query ("FROM Monitor m WHERE m.model = ?1 and m.manufacturer = ?2")

    public Monitor createMonitor(Monitor monitor);
}
