@echo off
setlocal enabledelayedexpansion

cd /d "%~dp0"

REM Generate a new RSA key/cert for local development
set HOST=localhost
set CRT=!HOST!.crt
set KEY=!HOST!.key

REM Install the system certificate if it's not already
REM NOTE: The ecdsa flag does nothing, but I wish it did
go run filippo.io\mkcert.exe -ecdsa -install

REM Generate a new certificate for localhost
REM This fork of mkcert supports the -days flag.
REM TODO remove the -days flag when Chrome accepts self-signed certs.
go run filippo.io\mkcert.exe -ecdsa -days 10 -cert-file "!CRT!" -key-file "!KEY!" localhost 127.0.0.1 ::1


#!/bin/bash
set -euo pipefail

cd "$(dirname "${BASH_SOURCE[0]}")"

# Generate a new RSA key/cert for local development
HOST="localhost"
CRT="localhost.crt"
KEY="$localhost.key"

# Install the system certificate if it's not already
# NOTE: The ecdsa flag does nothing but I wish it did
go run filippo.io/mkcert -ecdsa -install

# Generate a new certificate for localhost
# This fork of mkcert supports the -days flag.
# TODO remove the -days flag when Chrome accepts self-signed certs.
go run filippo.io/mkcert -ecdsa -days 10 -cert-file localhost.crt -key-file localhost.key localhost 127.0.0.1 ::1
