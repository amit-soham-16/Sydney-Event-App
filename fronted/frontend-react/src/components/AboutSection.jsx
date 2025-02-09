import React from "react";

const AboutSection = () => {
  return (
    <div className="about-container">
      <div className="about-overlay">
        <h2>About Our Event Listing Platform</h2>
        <p>
          Welcome to our Sydney Events Listing platform! Our website provides a
          seamless way to explore and discover upcoming events happening in
          Sydney, Australia.
        </p>

        <h3>How It Works</h3>
        <p>
          We fetch real-time event data from <b>Eventbrite Sydney</b> using{" "}
          <b>Python Selenium</b> for web scraping. This data is then processed
          and stored in our <b>Spring Boot API</b>, ensuring a structured and
          efficient backend.
        </p>
        <p>
          For more events happening in Sydney, check out{" "}
          <a href="https://www.eventbrite.com/d/australia--sydney/events/" target="_blank" rel="noopener noreferrer">
            Eventbrite Sydney Events
          </a>.
        </p>

        <p>
          On the frontend, we use <b>React.js</b> to present event details in a
          clean, user-friendly interface, allowing visitors to easily browse and
          stay updated with the latest happenings in Sydney.
        </p>

        <h3>Key Features</h3>
        <ul>
          <li>
            ✅ <b>Real-time Event Updates</b> – Our system fetches fresh event
            details every 24 hours using an automated cron job.
          </li>
          <li>
            ✅ <b>Robust Backend</b> – Built with <b>Spring Boot & MySQL</b>,
            ensuring smooth data handling and API performance.
          </li>
          <li>
            ✅ <b>Interactive Frontend</b> – Designed with <b>React.js</b>,
            providing a modern and intuitive user experience.
          </li>
        </ul>

        <p>
          This project showcases expertise in <b>web scraping, API development</b>, and{" "}
          <b>frontend UI design</b>, making it an excellent demonstration of
          full-stack development.
        </p>

        
      </div>
    </div>
  );
};

export default AboutSection;
