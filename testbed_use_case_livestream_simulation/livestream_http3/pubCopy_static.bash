#!/bin/bash
set -euo pipefail

# Change directory to the root of the project
cd "$(dirname "$0")/.."

# Use debug logging by default
export RUST_LOG="${RUST_LOG:-debug}"

# Connect to localhost by default.
HOST="${HOST:-localhost}"
PORT="${PORT:-4443}"
ADDR="${ADDR:-$HOST:$PORT}"

# Generate a random 16 character name by default.
#NAME="${NAME:-$(head /dev/urandom | LC_ALL=C tr -dc 'a-zA-Z0-9' | head -c 16)}"

# JK use the name "dev" instead
# TODO use that random name if the host is not localhost
NAME="${NAME:-dev}"

# Combine the host and name into a URL.
URL="${URL:-"https://$ADDR/$NAME"}"

# Default to a source video
INPUT="${INPUT:-dev/output30fps.mp4}"

# Print out the watch URL
echo "Watch URL: https://quic.video/watch/$NAME?server=$ADDR"



ffmpeg -hide_banner \
	-stream_loop -1 -re \
	-i "$INPUT" \
	-filter:v "drawtext=text='%{gmtime}.%{gmtime \: %3N}':x=(w-text_w)/2:y=9*(h-text_h)/10:fontsize=48:fontcolor=white:fontfile='/Windows/Fonts/Calibri.ttf'" \
	-c:v libx264  \
	-tune zerolatency \
	-preset ultrafast \
	-an \
	-f mp4 -movflags cmaf+separate_moof+delay_moov+skip_trailer \
	-frag_duration 1 \
	- | cargo run --bin moq-pub -- "$URL" "$@"
	
