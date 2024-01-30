/* eslint-env browser */

let pc = new RTCPeerConnection({
  iceServers: [
    {
      urls: 'stun:stun.l.google.com:19302'
    }
  ]
})
let log = msg => {
  document.getElementById('div').innerHTML += msg + '<br>'
}

pc.ontrack = function (event) {
  var el = document.createElement(event.track.kind)
  el.srcObject = event.streams[0]
  el.autoplay = true
  el.controls = true

  document.getElementById('remoteVideos').appendChild(el)
}

pc.oniceconnectionstatechange = e => log(pc.iceConnectionState)
pc.onicecandidate = event => {
  if (event.candidate === null) {
    document.getElementById('localSessionDescription').value = btoa(JSON.stringify(pc.localDescription))
  }
}

// Offer to receive 1 audio, and 2 video tracks
pc.addTransceiver('audio', {'direction': 'recvonly'})
pc.addTransceiver('video', {'direction': 'recvonly'})
pc.addTransceiver('video', {'direction': 'recvonly'})
pc.createOffer().then(d => pc.setLocalDescription(d)).catch(log)

// Function to format a JavaScript Date object as "yyyy-MM-dd HH:mm:ss.fff"
function formatTimestamp(date) {
    const year = date.getUTCFullYear();
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = date.getUTCDate().toString().padStart(2, '0');
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const seconds = date.getUTCSeconds().toString().padStart(2, '0');
    const milliseconds = date.getUTCMilliseconds().toString().padStart(3, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
}

// Function to continuously update the timestamp in the <h1> element using requestAnimationFrame
function updateTimestamp() {
    const currentUtcTimestamp = new Date().toJSON();
    const formattedTimestamp = formatTimestamp(new Date(currentUtcTimestamp));

    // Select the <h1> element and update its content
		const h1Element = document.getElementById('time');
    h1Element.textContent = "browser: " + formattedTimestamp;

    // Request the next animation frame for continuous updates
    requestAnimationFrame(updateTimestamp);
}

// Call the updateTimestamp function once to start the animation loop
updateTimestamp();

window.startSession = () => {
  let sd = document.getElementById('remoteSessionDescription').value

  if (sd === '') {
    return alert('Session Description must not be empty')
  }

  try {
    pc.setRemoteDescription(new RTCSessionDescription(JSON.parse(atob(sd))))
  } catch (e) {
    alert(e)
  }
}





