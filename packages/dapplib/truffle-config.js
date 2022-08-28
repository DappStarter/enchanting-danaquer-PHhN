require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace indoor sure security trap cruise ridge toss good arena obscure tilt'; 
let testAccounts = [
"0x919bcb93ee9862015e51ce5a3cb319a669f5b3e281925102f09e1c6ce928a880",
"0x5487f9dd7ab2924a83cb316958334df7e7acb7636e6ecc2f0d0b30992d262a94",
"0xc375a7eb7d8d2ab346d4033417268995b472acd1e3036f54de127ccee3ae5683",
"0x0c6ddaff93f2fedda41c8efb0db3e3f1f2f11a542222273d4e5f8a92aa004fcb",
"0x43fc95c57b9bc160f886afb0f2a2f4d476677a28581dfb1eccc8de4891b11b73",
"0xe42357f0be46df948bd7328fba7b5e7079d22feefad60849ab42867a0cd81311",
"0xef8941c3fd89330ff477e792cbb1390c38e2a00062188c12a93674dc1aa28fe5",
"0x095cf9920798df3dda1807ca0a05c80c8fb358697a1918173d3097eac54296fe",
"0xc6aa5da273892ec0d3468b004929fcc55ea13eb36c2b512ba84441ae856f0924",
"0x4d7bf3f0ecf4a0dd19cc965f7c982a8e6722675bbdafb446d520e8929dca4770"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

