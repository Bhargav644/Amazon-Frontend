from unicodedata import category
from script import getHTMLParser
from db import setData, getData
from bs4 import BeautifulSoup


def Categories(index=0):
    '''
        working: fetches Categories of the header part from website
        args: default argument for indexing purpose
        returns: None
    '''

    dict = {'Categories': []}
    link = 'https://www.amazon.in/'
    soupHome = getHTMLParser(link)

    category_content = soupHome.find_all(
        'a', class_="nav-a")

    for i, li in enumerate(category_content):

        # ?indexing in db
        if(i >= 10 and i <= 20):
            dict['Categories'].append({'name': (li.text).replace(' ', '')})
            index += 1

    setData('Categories', dict['Categories'])


Categories()
