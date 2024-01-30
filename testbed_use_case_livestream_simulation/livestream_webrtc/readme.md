# Setup a Livestream simulation with WebRTC


## Instructions

### Requirements: 

```
Go 
FFmpeg
```



### Follow instructions until ffmpeg command form: https://github.com/pion/webrtc/tree/master/examples/rtp-to-webrtc

1. Download rtp-to-webrtc
go install github.com/pion/webrtc/v4/examples/rtp-to-webrtc@latest

2. Open jsfiddle example page
jsfiddle.net you should see two text-areas and a 'Start Session' button


3. For Windows
Paste the SessionDescription into a file.
Run rtp-to-webrtc < my_file




4.  FFmpeg command to stream the source.mp4 file: 

4.1 Get the source.mp4
wget http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4 -O source.mp4


4.2
ffmpeg -hide_banner -stream_loop -1 -re -i "source.mp4" -filter:v "drawtext=text='%{gmtime}.%{gmtime \: %3N}':x=(w-text_w)/2:y=9*(h-text_h)/10:fontsize=48:fontcolor=white:fontfile='/Windows/Fonts/Calibri.ttf':box=1:boxcolor=black:boxborderw=5" -vcodec libvpx -cpu-used 5 -deadline 1 -g 10 -error-resilient 1 -auto-alt-ref 1 -an -f rtp "rtp://127.0.0.1:5004?pkt_size=1200”

5. Input rtp-to-webrtc's SessionDescription into your browser
Copy the text that rtp-to-webrtc just emitted and copy into second text area

6. Hit 'Start Session' in jsfiddle, enjoy your video!
A video should start playing in your browser above the input boxes.

7. 
Add HTML ELEMENT
<h1>
Browser Time:
</h1>

to the HTML code on jsfiddle


8.
add timestamp algorithm to the js code on jsfiddle  : 

override the whole js code at jsfiddle with the timestamp_webrtc.js code to print the browser timestamp for latency measurement

