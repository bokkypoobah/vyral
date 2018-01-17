var dateTimeOutput={
   "contracts" : {
      "DateTime.sol:DateTime" : {
         "abi" : "[{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"name\":\"getHour\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"name\":\"getWeekday\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"year\",\"type\":\"uint16\"},{\"name\":\"month\",\"type\":\"uint8\"},{\"name\":\"day\",\"type\":\"uint8\"},{\"name\":\"hour\",\"type\":\"uint8\"},{\"name\":\"minute\",\"type\":\"uint8\"}],\"name\":\"toTimestamp\",\"outputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"name\":\"getDay\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"year\",\"type\":\"uint16\"},{\"name\":\"month\",\"type\":\"uint8\"},{\"name\":\"day\",\"type\":\"uint8\"},{\"name\":\"hour\",\"type\":\"uint8\"}],\"name\":\"toTimestamp\",\"outputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"name\":\"getSecond\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"year\",\"type\":\"uint16\"},{\"name\":\"month\",\"type\":\"uint8\"},{\"name\":\"day\",\"type\":\"uint8\"}],\"name\":\"toTimestamp\",\"outputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"year\",\"type\":\"uint16\"},{\"name\":\"month\",\"type\":\"uint8\"},{\"name\":\"day\",\"type\":\"uint8\"},{\"name\":\"hour\",\"type\":\"uint8\"},{\"name\":\"minute\",\"type\":\"uint8\"},{\"name\":\"second\",\"type\":\"uint8\"}],\"name\":\"toTimestamp\",\"outputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"name\":\"getYear\",\"outputs\":[{\"name\":\"\",\"type\":\"uint16\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"name\":\"getMonth\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"year\",\"type\":\"uint16\"}],\"name\":\"isLeapYear\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"year\",\"type\":\"uint256\"}],\"name\":\"leapYearsBefore\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"month\",\"type\":\"uint8\"},{\"name\":\"year\",\"type\":\"uint16\"}],\"name\":\"getDaysInMonth\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"name\":\"getMinute\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"}]",
         "bin" : "6060604052341561000f57600080fd5b6108718061001e6000396000f3006060604052600436106100cf5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416633e239e1a81146100d45780634ac1ad781461010057806362ba96871461011657806365c728401461015a5780637f791833146101705780638aa001fc1461019c5780638c8d98a0146101b25780639054bdec146101d857806392d6631314610210578063a324ad241461023d578063a6f0e57714610253578063b199993714610281578063b238ad0e14610297578063fa93f883146102b7575b600080fd5b34156100df57600080fd5b6100ea6004356102cd565b60405160ff909116815260200160405180910390f35b341561010b57600080fd5b6100ea6004356102ea565b341561012157600080fd5b61014861ffff6004351660ff602435811690604435811690606435811690608435166102fc565b60405190815260200160405180910390f35b341561016557600080fd5b6100ea600435610317565b341561017b57600080fd5b61014861ffff6004351660ff6024358116906044358116906064351661032c565b34156101a757600080fd5b6100ea600435610346565b34156101bd57600080fd5b61014861ffff6004351660ff60243581169060443516610350565b34156101e357600080fd5b61014861ffff6004351660ff60243581169060443581169060643581169060843581169060a4351661036a565b341561021b57600080fd5b6102266004356104b0565b60405161ffff909116815260200160405180910390f35b341561024857600080fd5b6100ea600435610540565b341561025e57600080fd5b61026d61ffff60043516610555565b604051901515815260200160405180910390f35b341561028c57600080fd5b6101486004356105ab565b34156102a257600080fd5b6100ea60ff6004351661ffff602435166105c6565b34156102c257600080fd5b6100ea60043561068e565b60006018603c8084045b048115156102e157fe5b0690505b919050565b600060076004620151808404016102e1565b600061030d8686868686600061036a565b9695505050505050565b600061032282610699565b6040015192915050565b600061033d8585858560008061036a565b95945050505050565b6000603c826102e1565b6000610362848484600080600061036a565b949350505050565b6000806103756107e0565b6107b291505b8861ffff168261ffff1610156103bc5761039482610555565b156103a7576301e28500830192506103b1565b6301e13380830192505b60019091019061037b565b601f81526103c989610555565b156103da57601d60208201526103e2565b601c60208201525b601f60408201819052601e606083018190526080830182905260a0830181905260c0830182905260e0830182905261010083018190526101208301829052610140830152610160820152600191505b8760ff168261ffff161015610472578061ffff600019840116600c811061045457fe5b602002015160ff166201518002830192508180600101925050610431565b6001870360ff166201518002830192508560ff16610e1002830192508460ff16603c02830192508360ff168301925082925050509695505050505050565b6000806107b26301e13380840481019082906104cb906105ab565b6104d88361ffff166105ab565b039050806301e285000283019250806107b2830361ffff16036301e1338002830192505b848311156105385761051060018303610555565b15610523576301e285008303925061052d565b6301e13380830392505b6001820391506104fc565b509392505050565b600061054b82610699565b6020015192915050565b6000600461ffff83160661ffff1615610570575060006102e5565b606461ffff83160661ffff1615610589575060016102e5565b61019061ffff83160661ffff16156105a3575060006102e5565b506001919050565b60001901600061019082046064830460048404030192915050565b60008260ff16600114806105dd57508260ff166003145b806105eb57508260ff166005145b806105f957508260ff166007145b8061060757508260ff166008145b8061061557508260ff16600a145b8061062357508260ff16600c145b156106305750601f610688565b8260ff166004148061064557508260ff166006145b8061065357508260ff166009145b8061066157508260ff16600b145b1561066e5750601e610688565b61067782610555565b156106845750601d610688565b50601c5b92915050565b6000603c80836102d7565b6106a1610809565b60008080806106af866104b0565b61ffff1685526106c06107b26105ab565b6106ce865161ffff166105ab565b039250826301e285000284019350826107b286600001510361ffff16036301e133800284019350600191505b600c60ff831611610741576107108286516105c6565b60ff16620151800290508584820111156107325760ff82166020860152610741565b928301926001909101906106fa565b600191505b610755856020015186516105c6565b60ff168260ff161115156107925785846201518001111561077e5760ff82166040860152610792565b620151809390930192600190910190610746565b61079b866102cd565b60ff1660608601526107ac8661068e565b60ff1660808601526107bd86610346565b60ff1660a08601526107ce866102ea565b60ff1660c08601525092949350505050565b610180604051908101604052600c815b6000815260001990910190602001816107f05790505090565b60e06040519081016040908152600080835260208301819052908201819052606082018190526080820181905260a0820181905260c0820152905600a165627a7a7230582055307426d6d62fba66158800f3eb62896b79d8820990d9baa9855a8e5bc5c0e80029"
      }
   },
   "version" : "0.4.18+commit.9cf6e910.Darwin.appleclang"
};