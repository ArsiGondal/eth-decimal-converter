# eth-decimal-converter
To convert wei into eth providing the decimals for the token.

just run npm install eth-decimal-converter

and use const ethConverter = require('eth-decimal-converter');

ethConverter.fromWei("1000000000000000000",18); will return converted string into ether. 
fromWei method takes two argumnets one is value in wei and the second is decimal places in integer.

ethConverter.toWei("1",18); will return converted string into wei. 
fromWei method takes two argumnets one is value in ether and the second is decimal places in integer.
