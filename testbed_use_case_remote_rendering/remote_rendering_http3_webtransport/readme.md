# Set up remote rendering service with HTTP/3

Similar to the set up of moq-rs and moq-js

run bash script with git bash.exe for windows environment


1. add your path variable of the bash.exe in the config file (testbed\testbed_use_case_remote_rendering\remote_rendering_http3_webtransport\unity_build_windows\H3_Robot_Streaming_Data\StreamingAssets)
1.1 add path variable(absolute or relativ) for the pubCopy_unity_2 from the moq-js folder to the config.json 


### start moq-js 

oo in moq-js directory and run 

npm run dev




 start moq-rs


## Manual setup

This is a collection of helpful scripts for local development.

go into the moq-rs directory 


under linux or use git bash from windows

### moq-relay

Unfortunately, QUIC mandates TLS and makes local development difficult.
If you have a valid certificate you can use it instead of self-signing.

Use [mkcert](https://github.com/FiloSottile/mkcert) to generate a self-signed certificate.
Unfortunately, this currently requires [Go](https://golang.org/) to be installed in order to [fork](https://github.com/FiloSottile/mkcert/pull/513) the tool.
Somebody should get that merged or make something similar in Rust...

```bash
./dev/cert
```

Unfortunately, WebTransport in Chrome currently (May 2023) doesn't verify certificates using the root CA.
The workaround is to use the `serverFingerprints` options, which requires the certificate MUST be only valid for at most **14 days**.
This is also why we're using a fork of mkcert, because it generates certificates valid for years by default.
This limitation will be removed once Chrome uses the system CA for WebTransport.

### moq-relay and moq-pub with ffmpeg unity encoder

You'll want some test footage to broadcast.
Anything works, but make sure the codec is supported by the player since `moq-pub` does not re-encode.

Here's a criticially acclaimed short film:



```bash
brew install ffmpeg
```


## Development

**tl;dr** run these commands in seperate terminals:

```bash
./dev/cert
./dev/relay
```

They will each print out a URL you can use to publish/watch broadcasts.

### moq-relay

You can run the relay with the following command, automatically using the self-signed certificates generated earlier.
This listens for WebTransport connections on WebTransport `https://localhost:4443` by default.

```bash
./dev/relay
```

It will print out a URL when you can use to publish. Alternatively, you can use `dev/pub` instead.

> Publish URL: https://quic.video/publish/?server=localhost:4443






### Unity

Change the path variables of the unity config.json (if not already changed)

Execute the unity binary file H3_Robot_Streaming.exe

This script uses an adjusted ffmpeg command and inserts a timesamp that can be commpared with the browser timestamp for end-to-end latency measurements
