package com.louder.events.controller;

import com.louder.events.model.Event;
import com.louder.events.service.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api/events")
public class EventController {

    private static final Logger logger = LoggerFactory.getLogger(EventController.class);

    @Autowired
    private EventRepository eventRepository;

    @GetMapping
    public List<Event> getAllEvents() {
        List<Event> events = eventRepository.findAll();

        // Log the fetched events
        if (events.isEmpty()) {
            logger.info("No events found in the database.");
        } else {
            logger.info("Fetched events: {}", events);
        }

        return events;
    }
}
