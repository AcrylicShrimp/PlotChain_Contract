
const HDWalletProvider = require("truffle-hdwallet-provider-privkey");

const privateKeys = ["610C003EDEA630922F4A607495A2F3226E71F8F2FE86258A58BB2764C606436F"];

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host      : '127.0.0.1',
      port      : 7545,
      network_id: '*',
      gas       : 6721975,
      gasPrice  : 20000000000
    },
    rinkeby: {
      provider  : () => new HDWalletProvider(privateKeys, 'https://rinkeby.infura.io/v3/2733102db1444337a9ffb1dbd28cb9f2'),
      network_id: 4
    }
  }
};
