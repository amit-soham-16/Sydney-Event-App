package com.louder.events;

import com.louder.events.model.Event;
import com.louder.events.service.EventRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    private final EventRepository eventRepository;

    public DataLoader(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        if (eventRepository.count() == 0) {
            eventRepository.save(new Event("Sample Event 1", "2025-02-10", "http://example.com/event1", "Sydney Arena", "Free"));
            eventRepository.save(new Event("Sample Event 2", "2025-02-15", "http://example.com/event2", "Sydney Stadium", "$50"));
            eventRepository.save(new Event("Sample Event 3", "2025-02-20", "http://example.com/event3", "Sydney Opera House", "$100"));
        }
    }
}
