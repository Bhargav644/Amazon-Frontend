from Config.script import getHTMLParser
from Config.db import setData
from bs4 import BeautifulSoup
from Config.headers import header


def Image():
    '''
        working: fetches header image of the data from site
        args: default argument for indexing purpose
        returns: None
    '''

    # ?basic requirement
    dict = {'image': ""}
    link = 'https://www.amazon.in/'
    soupHome = getHTMLParser(link, header)

    nav_right = soupHome.find_all('div', class_="nav-right")
    for li in nav_right:
        if(li.find('img')):
            dict['image'] = li.find('img')['src']

    setData('nav-image', dict)


# Image()
