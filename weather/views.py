from django.shortcuts import render
import request

def index(request):
    Latitude,Longitude = 23.7527364,90.3631865
    units = "metric" 
    API_KEY = "c49fd642fcd142a5201e85fa03b4603c"
    BASE_URL = "https://api.openweathermap.org/data/3.0/onecall?"
    url = BASE_URL+"lat=" + str(Latitude)+"&lon=" + str(Longitude)+"&units="+units+"&exclude=minutely,alerts"+"&appid="+str(API_KEY)
    
#    return render(request, 'weather/index.html') #returns the index.html template