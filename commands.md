# Geth

## Init the Genesis Block

> geth --datadir "db" init genesis.json

## Start Etehreum peer node

> geth --allow-insecure-unlock --datadir "db" --http --http.port "8545" --http.corsdomain "*" --nodiscover --http.api="admin,eth,net,web3,personal,miner,txpool"

Second node example:
> geth --datadir "db2" --networkid 111 --http --http.port "8546" --authrpc.port "8552" --http.corsdomain "*"  --port 30304 --nodiscover --http.api="admin,eth,debug,miner,net,shh,txpool,personal,web3" --ipcdisable console

## JS Console

### Create new Account
> personal.newAccount()

> personal.newAccount("test")

Where 123456 is the passwort.

### List accounts
> eth.accounts

> eth.accounts[0]

### Balance

Get Balance from Account [0]:
> eth.getBalance(eth.accounts[0])

Get Balance using web3
> web3.fromWei(eth.getBalance(eth.accounts[0]),"ether")

### Set default Account

Get default Account:
> eth.coinbase

Set default Account:
> miner.setEtherbase(web3.eth.accounts[0])

Get Balance from default Account:
> eth.getBalance(eth.coinbase)

### Mine

Start:
> miner.start()

Stop:
> miner.stop()

### Transfer

Transfer ether (js):
> eth.sendTransaction({from: '0x036a03fc47084741f83938296a1c8ef67f6e34fa', to: '0xa8ade7feab1ece71446bed25fa0cf6745c19c3d5', value: web3.toWei(1, "ether")})

> eth.sendTransaction({from: eth.accounts[0], to: eth.accounts[1], value: web3.toWei(1, "ether")})

Transfer ether (web3):
> eth.sendTransaction({from: eth.accounts[0], to: eth.accounts[1], value: web3.toWei(1, "ether")})

But we need to unlock the account first:
> personal.unlockAccount(eth.accounts[0])

### Check open transactions
txpool.status

### Add new node 

Get enode info:
> admin.nodeInfo.enode

Add peer:
> admin.addPeer("enode://15f3393b14581d56c236198cd67625e570c5fef842f5901e2a3bee53d7cc06725a317e984a843764e17b9bec4f70efbc1a4c2467c323670a03631bbcb2a20157@127.0.0.1:30304?discport=0")
> admin.addPeer("enode://15f3393b14581d56c236198cd67625e570c5fef842f5901e2a3bee53d7cc06725a317e984a843764e17b9bec4f70efbc1a4c2467c323670a03631bbcb2a20157@127.0.0.1:30303?discport=0")

Make sure you replace “enode://…@” above with the output from admin.nodeInfo.enode which is specific to you. As shown above, the “[::]” is replaced with “127.0.0.1:30304” which is the IP:Port of the 1st peer.