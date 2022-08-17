from script import getHTMLParser
from db import setData
from bs4 import BeautifulSoup


def Deals(index=0):
    '''
        working: fetches Deals of the data from site
        args: default argument for indexing purpose
        returns: None
    '''

    # ?basic requirement
    dict = {'Deals': []}
    link = 'https://www.amazon.in/'
    soupHome = getHTMLParser(link)

    # ?deal shoveler main element and title

    # ?deal shoveler fetches list of deals
    deal_shoveler_list = soupHome.find_all(
        'li', class_="_deals-shoveler-v2_style_dealCard__1HqkZ")

    # ?loop for items
    for li in deal_shoveler_list:

        deal_item = li.find('a', class_='a-link-normal')

        # ?getting name and image of item
        deal_item_image = deal_item.find('img')['src']
        deal_item_name = deal_item.find('img')['alt']

        # ?gets list of spans
        deal_item_span = deal_item.find_all('span', class_='a-size-mini')

        # ? checking which of the span consits of discount rate
        deal_item_discount = " "
        for i in deal_item_span:
            if (i.text).isnumeric():
                deal_item_discount = i.text

        # ?creating object of data collected for pushing it to db
        dict['Deals'].append({
            'image': deal_item_image, 'discount': deal_item_discount, 'name': deal_item_name})

        # ?indexing in db
        index += 1

    # ?pushing to db
    setData('Deals', dict['Deals'])


Deals()
