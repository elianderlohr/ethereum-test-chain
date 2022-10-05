#!/bin/sh

echo "Start Chain"
geth --allow-insecure-unlock --datadir "db" --http --http.port "8545" --http.corsdomain "*" --nodiscover --http.api="admin,eth,net,web3,personal,miner,txpool"