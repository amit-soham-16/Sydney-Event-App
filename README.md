# Sydney Events App

## Description
The Sydney Events App is a web application that automatically scrapes event data from various event websites in Sydney, Australia, and displays it beautifully on the webpage. Users can view the event details and, when interested, submit their email to receive event ticket links. The data is refreshed every 24 hours to ensure up-to-date listings.

## Features
- Scrapes event data from Sydney's event websites.
- Displays event information (date, time, location, description).
- Allows users to click on a "GET TICKETS" button.
- Collects the user's email address for ticket redirection.
- Automatically updates the event list every 24 hours.

## Technologies Used
- **Backend**: Java (Spring Boot) for backend logic and handling API calls.
- **Web Scraping**: Python for scraping event data.
- **Frontend**: React.js, HTML, CSS, JavaScript.
- **Database**: MySQL to store event data.
- **Scheduler**: A task scheduler (e.g., cron jobs) to run scraping script every 24 hours.
## Screenshots

![Screenshot 2025-02-09 223835](https://github.com/user-attachments/assets/607f76ec-6b59-4d01-bb1f-c2e94bea46c3)

![Screenshot 2025-02-09 223856](https://github.com/user-attachments/assets/ed363dc2-814e-4fc0-8327-eceecac095b4)

![Screenshot 2025-02-09 223908](https://github.com/user-attachments/assets/6644b369-fbb7-405c-9b37-6bc76e035939)

![Screenshot 2025-02-09 223927](https://github.com/user-attachments/assets/9ed74884-9673-4f99-800c-ee1ba0892288)

![Screenshot 2025-02-09 224010](https://github.com/user-attachments/assets/7695e33c-cb76-4648-a515-20474b5ca109)

## Requirements
1. **Java 8+** (For Spring Boot backend)
2. **Python 3+** (For web scraping script)
3. **MySQL** (For storing event data)
4. **Node.js & npm** (For frontend React setup)
5. **React.js** (For building the user interface)


## Setup Instructions

### 1. Backend Setup (Spring Boot)
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repository/sydney-events-app.git
   cd sydney-events-app/backend
2. Ensure you have Java 8+ installed.
3. Build and run the Spring Boot application:
    ```bash
    mvn clean install
    mvn spring-boot:run

4. Configure your MySQL database and connect it with the backend.

### 2. Web Scraping Setup (Python)

1. Clone the repository:
    ```bash
    git clone https://github.com/your-repository/sydney-events-app.git
    cd sydney-events-app/scraper
2. Install required Python packages:
    ```bash
    pip install -r requirements.txt
3. Set up the scraping script to run every 24 hours using cron jobs (or similar task scheduler).

*	On Linux/Mac (Cron Job):
	```bash
    crontab -e
  Add this line to schedule daily scraping:

    0 0 * * * /path/to/venv/bin/python /path/to/scraper/scraper.py

*	On Windows (Task Scheduler): Use Task Scheduler to run scraper.py daily at midnight.

4. Ensure the script saves the scraped data to the MySQL database.



### 3. Frontend Setup (React)
1. Clone the repository:
    ```bash
    git clone https://github.com/your-repository/sydney-events-app.git
    cd sydney-events-app/frontend

2. Install dependencies:
    ```bash
    npm install

3. Run the React development server:

    ```bash
    npm start


### 4. Database Setup (MySQL)

1. Create a MySQL database to store event data.
2. Configure your Spring Boot application to connect to the database using the appropriate credentials in the application.properties file.
3. Ensure tables for storing event details are created in the database.

### Usage
1. Once the backend and frontend are running, visit the React app in the browser (default is http://localhost:3000).
2. The app will automatically display the latest events in Sydney, with details like event name, date, time, and location.
3. Clicking on "GET TICKETS" will ask for the user's email to be submitted before redirecting to the event's original website.
4. The scraping script will automatically run every 24 hours to update the events displayed.

### API Endpoints

* GET /events: Returns a list of events scraped from the external websites.
* POST /email: Accepts a user's email for ticket redirection.

### Contributing
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push to your branch.
4. Create a pull request.

### Acknowledgements
* Thank you to the open-source libraries and frameworks used in this project: Spring Boot, React, Python, and MySQL.




## Contact

For any queries or feedback, please reach out:

* Amit Kumar

* LinkedIn : https://www.linkedin.com/in/kumaramit02/

* Email: amitk1602info@gmail.com
