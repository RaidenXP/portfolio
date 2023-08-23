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
  {
    title: 'Code',
    id: '#code',
    inView: false
  },
  {
    title: 'Graphs',
    id: '#graphs',
    inView: false
  },
]

export const projectDataCluster = [
  {
    title: 'Framework Structure',
    id: '#framework',
    inView: false
  },
  {
    title: 'K-means/Lloyds and K-mediods',
    id: '#algo',
    inView: false
  },
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

export const partTwoDataMine = [
  `  import pandas as pd
  from matplotlib import pyplot as plt
  
  def visualize_owner_to_pos_revs():
      steam_data = pd.read_csv('steam_games')
  
      owners = steam_data['owners']
      positive_revs = steam_data['positive_rev']
      negative_revs = steam_data['negative_rev']
  
      simp_owners = []
      percent_of_pos_rev = []`,
  
  `      for instances in owners:
          temp = instances.split(" .. ")
          simp_owners.append(int(temp[1].replace(",", "")))
  
      for rev in range(len(positive_revs)):
          if (positive_revs[rev] + negative_revs[rev]) == 0:
              percent_of_pos_rev.append(0)
          else:
              percent = positive_revs[rev] / 
                      (positive_revs[rev] + negative_revs[rev])
              percent_of_pos_rev.append(percent)`,
  
  `      plt.scatter(simp_owners, positive_revs, 
        c=percent_of_pos_rev, cmap="Greens", edgecolor='black',
        linewidth=1, alpha=0.75)
  
      cbar = plt.colorbar()
      cbar.set_label('Percent of Positive Reviews')
  
      plt.xscale('log')
      plt.yscale('log')
  
      plt.title('Owner count to Positive Reviews')
      plt.xlabel('Rough Estimate of Owners')
      plt.ylabel('Positive Reviews')
  
      plt.show()`,

  `import pandas as pd
from matplotlib import pyplot as plt
from wordcloud import WordCloud
    
def genre_analysis():
  steam_data = pd.read_csv('steam_games')

  genre_combinations = (steam_data['genre'].value_counts()).to_dict()

  simp_genre_combinations = 
    (steam_data['genre'].value_counts())[:20].to_dict()`,

  `  genres_set = {}

  for genres in steam_data['genre']:
      if len(genres_set) == 0 and not(type(genres) == float):
          temp = genres.split(", ")
          genres_set = set(temp)
      elif not(type(genres) == float):
          temp = genres.split(", ")
          genres_set.update(set(temp))

  genres_set = sorted(genres_set)

  genre_dict = dict.fromkeys(genres_set, 0)

  for item in genres_set:
      temp = 0
      for key in genre_combinations.keys():
          if item in key:
              temp = temp + genre_combinations[key]
              genre_dict[item] = temp`,

  `  plt.style.use('seaborn-dark')

  fig, (ax1, ax2) = plt.subplots(nrows=2, ncols=1)

  ax1.set_title("How many Games in a Genre")
  ax1.set_xlabel("Game Count")
  ax1.set_ylabel("Genres")

  ax1.barh(list(genre_dict.keys()), genre_dict.values())

  ax2.set_title("Top 20 Genre Combinations")
  ax2.set_xlabel("Game Count")
  ax2.set_ylabel("Genres Combos")

  ax2.barh(list(simp_genre_combinations.keys()), 
                simp_genre_combinations.values())`,

  `  wordcloud_genres = WordCloud(width=2560, height=1440, 
                     background_color='white')
                    .generate_from_frequencies(frequencies=genre_dict)

  plt.figure()
  plt.imshow(wordcloud_genres)
  plt.axis("off")
  
  wordcloud_combos = WordCloud(width=2560, height=1440, 
                    background_color='white')
                    .generate_from_frequencies(
                    frequencies=genre_combinations)

  plt.figure()
  plt.imshow(wordcloud_combos)
  plt.axis("off")

  plt.subplot_tool()
  plt.show()`
]

export const partThreeDataMine = [
  `# DO NOT CHANGE THE FOLLOWING LINE
def lloyds(data, k, columns, centers=None, n=None, eps=None):
# DO NOT CHANGE THE PRECEDING LINE
  # This function has to return a list of k cluster 
  #centers (lists of floats of the same length as columns)
  def dist(center, instance, columns):
      distance = 0
      index = 0
      for column in columns:
          distance += (instance[column] - center[index])**2
          index += 1
      return math.sqrt(distance)

  def mean(cluster, columns):
      average = []
      index = 0
      for column in columns:
          average.append(0)
          for instance in cluster:
              average[index] += instance[column]
          average[index] /= len(cluster)
          index += 1
      return average

  def calc_threshold(previous_centers, current_centers, columns):
      threshold = 0
      for i in range(len(previous_centers)):
          distance = 0
          for j in range(len(columns)):
              distance += 
              (current_centers[i][j] - previous_centers[i][j])**2
          threshold += distance

      return threshold`,
  
      `  clusters = []
  for i in range(k):
      clusters.append([])

  if centers is None:
      centers = []
      random.seed()
      for i in range(k):
          random_instance = random.choice(data)
          center = []
          for column in columns:
              center.append(random_instance[column])
          
          centers.append(center)

  if n is None:
      n = 10

  check = True
  iteration = 0`,
  
      `  while(iteration < n and check):
      for instance in data:
          smaller_index = 0
          smaller_distance = 
          dist(centers[smaller_index], instance, columns)

          for current_index in range(1, len(centers)):
              current_distance = 
              dist(centers[current_index], instance, columns)

              if current_distance < smaller_distance:
                  smaller_distance = current_distance
                  smaller_index = current_index
          
          clusters[smaller_index].append(instance)

      previous_centers = centers.copy()
      
      for i in range(k):
          if(len(clusters[i])):
              centers[i] = mean(clusters[i], columns)
              clusters[i].clear()

      if eps is not None:
          threshold = calc_threshold(previous_centers, 
            centers, columns)
          #print(threshold)
          if threshold < eps:
              #print("exited through eps")
              check = False
      
      iteration += 1

  return centers`
]