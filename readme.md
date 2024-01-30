This repository contains a few crates:

-   **moq-rs**: HTTP/3 with WebTransport implementation from https://github.com/kixelated/moq-rs (not the latest version) .
-   **moq-js**: A web library for MoQ. It uses the browser APIs such as WebTransport and WebCodecs to display content of the moq-rs https://github.com/kixelated/moq-js.
-   **testbed**: The testbed contains all the necessary setup to run a remote rendering service and stream it via MoQ and a livestreaming simulation. The end-to-end latency is measured in both cases. To compare the result the same use cases are also streamed via WebRTC for comparison reasons.
- 	**results**: The results folder contains the measurment results, recorded videos of the conducted experiments and plottings (created via python)

### Resason of this repo: 

Live video streaming on the Internet has become increasingly popular in recent years
and now accounts for more than 50% of total Internet traffic. This trend highlights
the need for efficient and robust streaming protocols. The advent of HTTP/3, with its
core component QUIC, introduces new features that could potentially enhance media
delivery in areas such as cloud gaming and real-time rendering applications.
WebTransport’s ability to facilitate access of HTTP/3 and QUIC within web browsers
makes it highly attractive to cloud gaming providers and game engines, which predominantly
use WebRTC to stream cloud-rendered content.

Accessible directly within browsers , WebRTC has been a key technology in media
streaming due to its universal availability and low-latency features.
However, the emerging use of WebTransport promises scalable, lower latency solutions,
potentially similar to existing low-latency techniques like WebRTC.
A notable advantage of WebTransport is that running a HTTP/3-compatible server
requires less setup and configuration than maintaining a WebRTC server, which involves
understanding multiple protocols (ICE, DTLS, and SCTP) in order to get a working
transport.

There is currently a lack of comparative studies that evaluate these protocols and their
promising features.

This project analyzes the performance of HTTP/3 and WebTransport in a
client-server media streaming context, discusses the possible advantages of adopting
these protocols, and compares them with WebRTC.
To evaluate the performance of WebTransport and HTTP/3, a comprehensive testbed
was developed, enabling a comparative analysis with WebRTC focused on end-to-end
latency. Utilizing the widely-used gaming engine Unity for remote rendering, we established
a pipeline architecture that employs various streaming protocols.

The findings reveal that WebTransport and HTTP/3 are capable of achieving lowlatency
levels comparable to WebRTC. This underscores the potential of HTTP/3 and
WebTransport to perform well low-latency applications and require reduced configuration
overhead compared to WebRTC in client-server setups.