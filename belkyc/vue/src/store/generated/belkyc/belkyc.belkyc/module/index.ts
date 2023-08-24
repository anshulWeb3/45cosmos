// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateKyc } from "./types/belkyc/tx";
import { MsgCreateKyc } from "./types/belkyc/tx";
import { MsgDeleteKyc } from "./types/belkyc/tx";
import { MsgChangeAdmin } from "./types/belkyc/tx";


const types = [
  ["/belkyc.belkyc.MsgUpdateKyc", MsgUpdateKyc],
  ["/belkyc.belkyc.MsgCreateKyc", MsgCreateKyc],
  ["/belkyc.belkyc.MsgDeleteKyc", MsgDeleteKyc],
  ["/belkyc.belkyc.MsgChangeAdmin", MsgChangeAdmin],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgUpdateKyc: (data: MsgUpdateKyc): EncodeObject => ({ typeUrl: "/belkyc.belkyc.MsgUpdateKyc", value: MsgUpdateKyc.fromPartial( data ) }),
    msgCreateKyc: (data: MsgCreateKyc): EncodeObject => ({ typeUrl: "/belkyc.belkyc.MsgCreateKyc", value: MsgCreateKyc.fromPartial( data ) }),
    msgDeleteKyc: (data: MsgDeleteKyc): EncodeObject => ({ typeUrl: "/belkyc.belkyc.MsgDeleteKyc", value: MsgDeleteKyc.fromPartial( data ) }),
    msgChangeAdmin: (data: MsgChangeAdmin): EncodeObject => ({ typeUrl: "/belkyc.belkyc.MsgChangeAdmin", value: MsgChangeAdmin.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
