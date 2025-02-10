#!/bin/bash

# Generate private keys
openssl genrsa -out at_private.pem 2048
openssl genrsa -out rt_private.pem 2048

# Generate public keys from private keys
openssl rsa -in at_private.pem -outform PEM -pubout -out at_public.pem
openssl rsa -in rt_private.pem -outform PEM -pubout -out rt_public.pem

# Create secrets directory and move keys into it
mkdir -p secrets
mv *.pem secrets/
