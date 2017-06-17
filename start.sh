#!/bin/sh
switchdesktop() {
    typeset -A desktophash
    desktophash[0]=29
    desktophash[1]=18
    desktophash[2]=19
    desktophash[3]=20
    desktophash[4]=21
    desktophash[5]=23
    desktophash[6]=22
    desktophash[7]=26
    desktophash[8]=28
    desktophash[9]=25
    desktopkey=${desktophash[$1]}
    osascript -e "tell application \"System Events\" to key code $desktopkey using control down"
}
alias switchdesktop=switchdesktop

#START SCRIPT
switchdesktop 2
atom .

sleep 5

switchdesktop 1
open http://www.graphql.org/learn &&
open http://www.google.com

sleep 2
# 3. stop all dockers
CONTAINERS= docker ps -a -q
if [ -n $CONTAINERS ]; then
    docker stop $(docker ps -a -q)
    docker rm $(docker ps -a -q)
fi

PATH=`pwd`
docker run --name mongo-database -d -v $PATH/data:/data -p 27017:27017 mongo

switchdesktop 2
# node app.js
