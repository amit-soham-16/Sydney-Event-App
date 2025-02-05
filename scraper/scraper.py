import requests
from bs4 import BeautifulSoup
import mysql.connector

# Connect to MySQL Database
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="@mitCSE26_",
    database="SydneyEvent"
)
cursor = db.cursor()

def scrape_events():
    url = "https://louderx.com/"  # Replace with actual event site
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    events = []
    for event in soup.find_all('div', class_='event-card'):
        title = event.find('h2').text.strip()
        date = event.find('span', class_='date').text.strip()
        link = event.find('a', href=True)['href']
        events.append((title, date, link))

    # Save events to database
    cursor.execute("DELETE FROM event")  # Clear old data
    cursor.executemany("INSERT INTO event (title, date, link) VALUES (%s, %s, %s)", events)
    db.commit()

if __name__ == "__main__":
    scrape_events()
