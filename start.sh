#!/bin/bash
# TweetStorm

echo ""
echo ""
echo  " #######                       #####                             "
echo  "    #    #    # ###### ###### #     # #####  ####  #####  #    # "
echo  "    #    #    # #      #      #         #   #    # #    # ##  ## "
echo  "    #    #    # #####  #####   #####    #   #    # #    # # ## # "
echo  "    #    # ## # #      #            #   #   #    # #####  #    # "
echo  "    #    ##  ## #      #      #     #   #   #    # #   #  #    # "
echo  "    #    #    # ###### ######  #####    #    ####  #    # #    # "
echo ""

read -p "$(echo "Do you have Node installed on your machine? (y/n)")" choice
case "$choice" in
  y|Y ) read -p "$(echo "Type your Twitt: ")" twitt
        node index.js $twitt;;
  n|N ) echo "Please install and return.";;
  * ) echo "Please install and return.";;
esac
