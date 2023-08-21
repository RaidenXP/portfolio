export const projectMain = [
  {
    title: 'What\'s the Project Box?',
    id: '#what-is-this',
    inView: false
  },
  {
    title: 'Table Of Contents',
    id: '#table-of-contents',
    inView: false
  },
  {
    title: 'How to Navigate Around',
    id: '#navigation',
    inView: false
  },
  {
    title: 'Credits',
    id: '#credits',
    inView: false
  },
]

export const projectSpot = [
  {
    title: 'Teams',
    id: '#teams',
    inView: false
  },
  {
    title: 'Tools Used',
    id: '#tools',
    inView: false
  },
  {
    title: 'Results',
    id: '#results',
    inView: false
  }
]

export const projectSous = [
  {
    title: 'Tools Used',
    id: '#tools',
    inView: false
  },
  {
    title: 'Results',
    id: '#results',
    inView: false
  }
]

export const projectTrain = [
  {
    title: 'Tools Used',
    id: '#tools',
    inView: false
  },
  {
    title: 'Current State',
    id: '#current',
    inView: false
  }
]

export const projectDataMain = [
  {
    title: 'Language Used',
    id: '#lang',
    inView: false
  },
  {
    title: 'Parts',
    id: '#parts',
    inView: false
  },
]

export const projectDataExtract = [
  {
    title: 'Code',
    id: '#code',
    inView: false
  },
  {
    title: 'Results',
    id: '#results',
    inView: false
  },
]

export const projectDataVisual = [

]

export const projectDataCluster = [

]

export const projectDataPattern = [

]

export const projectDataClassification = [

]

export const projectGameAI = [

]

export const projectRay = [

]

export const projectPort = [

]

export const partOneDataMine = [
  `  import pandas as pd 
  import get_request_amt
  import requests`,

  `def get_dataset(filename, rows=None):
  gameDB = pd.DataFrame(columns=["appid", "name", "developer", 
          "publisher", "positive_rev", "negative_rev", "owners", 
          "average_forever_playtime", "median_forever_playtime", 
          "Concurrent_Users", "price", "initialprice",
          "discount", "tags", "languages", "genre"])
  
  #our api that we are using
  url = "https://steamspy.com/api.php"

  #Add page amount here for more entries
  #The API only returns one page at a time with 1000 games
  #For more pages add more pages. Not really sure how many pages
  #There are
  responses = get_request_amt.getRequest(url, 10)`,

  `current = 0
  for x in responses:
      if(current == rows):
          break

      anotherResp = requests.get(url, 
        params='request=appdetails&appid=' + x).json()
      
      tempDB = pd.DataFrame({
        'appid': [anotherResp['appid']],
        'name': [anotherResp['name']],
        'developer': [anotherResp['developer']],
        'publisher':[anotherResp['publisher']],
        'positive_rev':[anotherResp['positive']],
        'negative_rev':[anotherResp['negative']],
        'owners': [anotherResp['owners']],
        'average_forever_playtime': [anotherResp['average_forever']],
        'median_forever_playtime': [anotherResp['median_forever']],
        'Concurrent_Users': [anotherResp['ccu']],
        'price': [anotherResp['price']],
        'initialprice': [anotherResp['initialprice']],
        'discount': [anotherResp['discount']],
        'tags': [anotherResp['tags']],
        'languages': [anotherResp['languages']],
        'genre': [anotherResp['genre']]
      })
      
      gameDB = pd.concat([gameDB, tempDB], ignore_index=True)

      current = current + 1
  
  gameDB.to_csv(filename)`,

  `  import requests
  import time
  
  #The API only gives one page of games. Each page has 1000 entries
  #If more pages are needed just add more pages to the 
  #function parameter
  def getRequest(url, pageAmt=1):
      appId = []
  
      for x in range(pageAmt):
          response = requests.get(url, 
            params='request=all&page=' + str(x)).json()
          for y in response.keys():
              appId.append(str(y))
          
          #pause a bit for the next page of requests
          time.sleep(1)
      
      return appId`
] 