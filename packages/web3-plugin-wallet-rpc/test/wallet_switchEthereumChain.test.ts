import { Web3 } from "web3";

import { WalletRpcPlugin } from "../src";

describe("WalletRpcPlugin", () => {
  describe("wallet_switchEthereumChain", () => {
    const web3 = new Web3("http://127.0.0.1:8545");
    web3.registerPlugin(new WalletRpcPlugin());

    const requestManagerSendSpy = jest.fn();
    web3.requestManager.send = requestManagerSendSpy;

    afterEach(() => {
      requestManagerSendSpy.mockClear();
    });

    it("should call the method with expected params", async () => {
      await web3.walletRpc.switchEthereumChain(5000);

      expect(requestManagerSendSpy).toHaveBeenCalledWith({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x1388" }],
      });
    });

    it("should return correct result", async () => {
      const result = await web3.walletRpc.switchEthereumChain(5000);

      expect(result).toBeUndefined();
    });
  });
});
