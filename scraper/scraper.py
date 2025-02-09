from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import time
from bs4 import BeautifulSoup
import mysql.connector

conn = mysql.connector.connect(
    host="localhost",   
    user="root",
    password="@mitCSE26_",
    database="SydneyEvent"
)
cursor = conn.cursor()


# Set up Selenium WebDriver
options = webdriver.ChromeOptions()
# options.add_argument("--headless")  # Run in headless mode (no UI)
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)



# Open the target website
url = "https://www.eventbrite.com/d/australia--sydney/events/"  # Replace with your target website
driver.get(url)





# Wait for the page to load
time.sleep(1)  # Adjust if necessary

full_html = driver.page_source

# Print the HTML content
# print(full_html)

soup = BeautifulSoup(full_html, "html.parser")

main_contents = soup.find("div", class_="main-content")

popular = main_contents.find("div", class_="popular_events--bucket-wrapper")

cards= popular.find_all("div",class_="small-card-mobile eds-l-pad-all-2")

list_detail = list()

for card in cards:
    dict_detail = dict()
    detail = card.find('div',class_="Stack_root__1ksk7")
    a_tag = detail.find('a')
    dict_detail['Name'] = a_tag.text
    dict_detail['link'] = a_tag.get('href')
    
    # print(a_tag.text)
    p_tags = detail.find_all('p')
    
    dict_detail['date'] = p_tags[0].text
    dict_detail['venue'] = p_tags[1].text
    dict_detail['price'] = p_tags[2].text
    
    list_detail.append(dict_detail)

# Close the browser
driver.quit()

cursor.execute("SET SQL_SAFE_UPDATES = 0")
conn.commit()


try:
    cursor.execute("TRUNCATE TABLE event")
    conn.commit()  # Commit the transaction
    print("Data deleted successfully")
except mysql.connector.Error as err:
    print(f"Error: {err}")





sql = "INSERT INTO event (name, link, date, venue, price) VALUES (%s, %s, %s, %s, %s)"
values = [(event["Name"], event["link"], event["date"], event["venue"], event["price"]) for event in list_detail]

cursor.executemany(sql, values)  # Bulk insert
conn.commit()

print(f"✅ {cursor.rowcount} records inserted successfully!")

# Close Connection
cursor.close()
conn.close()

print(list_detail)
