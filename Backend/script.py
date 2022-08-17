from bs4 import BeautifulSoup
import requests
from headers import headers
from db import setData


def getHTMLParser(link):
    ''' 
        working: fetches data from website as html
        args: respective link
        returns: HTML parser object 
    '''
    urlHome = link
    homePage = requests.get(urlHome)
    soupHome = BeautifulSoup(homePage.content, 'html.parser')
    return soupHome


def listToString(list):
    ''' 
        working: converts list to string
        args: list
        returns: string 
    '''

    string = " "
    return string.join(list)
