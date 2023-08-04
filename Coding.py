import urllib.request
urllib.request.urlretrieve("https://www.google.org","webpage.html")
for line in open('webpage.html'):print(line.strip())