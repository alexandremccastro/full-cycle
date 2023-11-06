#!/bin/sh

yarn

yarn migrate

exec "$@"
