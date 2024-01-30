### remote_rendering_webrtc


This application uses the Unity render streaming (https://docs.unity3d.com/Packages/com.unity.renderstreaming@3.1/manual/index.html)


import the unity package in your unity ide



#### start webserver 
	- in the unity project directory under Assets/Webserver
	- start the webserver on port 8080 (otherwise permission problems)
	- cmd	webserver.exe -p 8080
	
	
	
	
- change settings for webserver in unity
	-> project settings / render streaming / change url to cmd output result of webserver.exe
	
	
- open webstite in chrome browser-> check for cmd output of webserver.exe -> adresse under start as public mode (sth like http://172.27.16.1:8080 or localhost:8080)
	
	

	
#### build the unity project (start the scene)



- click on streaming on website ( Reiceive sample on website link)


#### start js timestamp script

open the console and execute the script for a end timestamp on the website	

