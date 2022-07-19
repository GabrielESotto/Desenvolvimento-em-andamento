from pathlib import Path
from tkinter import EXCEPTION
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from time import sleep

# Caminho para a raiz do projeto
ROOT_FOLDER = Path(__file__).parent.parent
# Caminho para a pasta onde o chromedriver está
CHROME_DRIVER_PATH = ROOT_FOLDER / 'Selenium' / 'chromedriver.exe'


def make_chrome_browser(*options: str) -> webdriver.Chrome:
    chrome_options = webdriver.ChromeOptions()

    # chrome_options.add_argument('--headless')
    if options is not None:
        for option in options:
            chrome_options.add_argument(option)

    chrome_service = Service(
        executable_path=CHROME_DRIVER_PATH,
    )

    browser = webdriver.Chrome(
        service=chrome_service,
        options=chrome_options,
    )

    return browser


if __name__ == '__main__':
    browser = make_chrome_browser(' --disable-gpu', ' --no-sandbox',)
    browser.get('https:/github.com')
    browser.maximize_window()

    input_element = browser.find_element(
        By.XPATH, '/html/body/div[1]/header/div/div[2]/div[2]/div[2]/a')
    input_element.click()

    input_login = browser.find_element(By.ID, 'login_field')
    input_login.send_keys('email@hotmail.com')

    input_password = browser.find_element(By.ID, 'password')
    input_password.send_keys('password')

    input_button = browser.find_element(By.NAME, 'commit')
    input_button.click()
    sleep(2)

    input_button2 = browser.find_element(
        By.XPATH, '/html/body/div[1]/header/div[7]/details/summary')
    input_button2.click()
    sleep(2)

    input_button3 = browser.find_element(
        By.XPATH, '/html/body/div[1]/header/div[7]/details/details-menu/div[3]/div/details/summary')
    input_button3.click()
    sleep(2)

    input_element2 = browser.find_element(By.NAME, 'message')
    input_element2.send_keys(
        'Feliz por ser casado com voce!')
    sleep(4)

    input_button_set = browser.find_element(
        By.XPATH, '/html/body/div[1]/header/div[7]/details/details-menu/div[3]/div/details/details-dialog/form/div[3]/button[1]')
    input_button_set.click()
    sleep(4)

    input_log_out = browser.find_element(
        By.XPATH, '/html/body/div[1]/header/div[7]/details/details-menu/form/button')
    input_log_out.click()

    sleep(5)
    browser.quit()
