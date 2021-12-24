require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict process broken skull stone note mean property grace drip flock giant'; 
let testAccounts = [
"0x01794ba7ea1371d7950be55464746c95ec8a34cc3e884d75d983a15f4330fe2f",
"0xe1e1a3006b084396c2770035d4577ccd50cb0cefa278cafd5e2bfc97cf3e1152",
"0x321bb62b757f0eb0db1b72aacc68e13e62c48cca93cb8595180d015b255719e8",
"0x6c935994a3f0d619a9859dad829550f578328e7db09399bd2437ebda04badd1a",
"0x17638ca1a47c86908d8f50a331462ff9f1d2448534d183fe44645b70e552b5ef",
"0xbfb89ca271ee55714fd164c5bc43e0d3e5d56cfb49c0c7a7096b0fdca3910439",
"0xbf53411c48cee0cb094d0166320f6c44d15d2f9e0edeceb5427f3cb4f4465c5f",
"0x871c0fa5e750debdcda70d9edd9f2ff4e0588b0325fd477dacd8d495c6e1dd9f",
"0xdc4c855db4696f2de543c6c30a56b5ee9640a72d03d99d5c1f22d80f966421ae",
"0xa465f90906e05b3a914145caef8cc1eea3cd8f7c577c2675730442d51fef75b8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

