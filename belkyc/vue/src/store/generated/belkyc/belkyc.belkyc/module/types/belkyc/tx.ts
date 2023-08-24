/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "belkyc.belkyc";

export interface MsgCreateKyc {
  creator: string;
  address: string;
  value: boolean;
}

export interface MsgCreateKycResponse {}

export interface MsgUpdateKyc {
  creator: string;
  address: string;
  value: boolean;
}

export interface MsgUpdateKycResponse {}

export interface MsgDeleteKyc {
  creator: string;
  address: string;
}

export interface MsgDeleteKycResponse {}

export interface MsgChangeAdmin {
  creator: string;
  address: string;
  message: string;
}

export interface MsgChangeAdminResponse {
  address: string;
}

const baseMsgCreateKyc: object = { creator: "", address: "", value: false };

export const MsgCreateKyc = {
  encode(message: MsgCreateKyc, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.value === true) {
      writer.uint32(24).bool(message.value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateKyc {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateKyc } as MsgCreateKyc;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.value = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateKyc {
    const message = { ...baseMsgCreateKyc } as MsgCreateKyc;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Boolean(object.value);
    } else {
      message.value = false;
    }
    return message;
  },

  toJSON(message: MsgCreateKyc): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateKyc>): MsgCreateKyc {
    const message = { ...baseMsgCreateKyc } as MsgCreateKyc;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = false;
    }
    return message;
  },
};

const baseMsgCreateKycResponse: object = {};

export const MsgCreateKycResponse = {
  encode(_: MsgCreateKycResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateKycResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateKycResponse } as MsgCreateKycResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateKycResponse {
    const message = { ...baseMsgCreateKycResponse } as MsgCreateKycResponse;
    return message;
  },

  toJSON(_: MsgCreateKycResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateKycResponse>): MsgCreateKycResponse {
    const message = { ...baseMsgCreateKycResponse } as MsgCreateKycResponse;
    return message;
  },
};

const baseMsgUpdateKyc: object = { creator: "", address: "", value: false };

export const MsgUpdateKyc = {
  encode(message: MsgUpdateKyc, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.value === true) {
      writer.uint32(24).bool(message.value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateKyc {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateKyc } as MsgUpdateKyc;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.value = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateKyc {
    const message = { ...baseMsgUpdateKyc } as MsgUpdateKyc;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Boolean(object.value);
    } else {
      message.value = false;
    }
    return message;
  },

  toJSON(message: MsgUpdateKyc): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateKyc>): MsgUpdateKyc {
    const message = { ...baseMsgUpdateKyc } as MsgUpdateKyc;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = false;
    }
    return message;
  },
};

const baseMsgUpdateKycResponse: object = {};

export const MsgUpdateKycResponse = {
  encode(_: MsgUpdateKycResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateKycResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateKycResponse } as MsgUpdateKycResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateKycResponse {
    const message = { ...baseMsgUpdateKycResponse } as MsgUpdateKycResponse;
    return message;
  },

  toJSON(_: MsgUpdateKycResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateKycResponse>): MsgUpdateKycResponse {
    const message = { ...baseMsgUpdateKycResponse } as MsgUpdateKycResponse;
    return message;
  },
};

const baseMsgDeleteKyc: object = { creator: "", address: "" };

export const MsgDeleteKyc = {
  encode(message: MsgDeleteKyc, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteKyc {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteKyc } as MsgDeleteKyc;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteKyc {
    const message = { ...baseMsgDeleteKyc } as MsgDeleteKyc;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteKyc): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteKyc>): MsgDeleteKyc {
    const message = { ...baseMsgDeleteKyc } as MsgDeleteKyc;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseMsgDeleteKycResponse: object = {};

export const MsgDeleteKycResponse = {
  encode(_: MsgDeleteKycResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteKycResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteKycResponse } as MsgDeleteKycResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteKycResponse {
    const message = { ...baseMsgDeleteKycResponse } as MsgDeleteKycResponse;
    return message;
  },

  toJSON(_: MsgDeleteKycResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteKycResponse>): MsgDeleteKycResponse {
    const message = { ...baseMsgDeleteKycResponse } as MsgDeleteKycResponse;
    return message;
  },
};

const baseMsgChangeAdmin: object = { creator: "", address: "", message: "" };

export const MsgChangeAdmin = {
  encode(message: MsgChangeAdmin, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgChangeAdmin {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgChangeAdmin } as MsgChangeAdmin;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChangeAdmin {
    const message = { ...baseMsgChangeAdmin } as MsgChangeAdmin;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    } else {
      message.message = "";
    }
    return message;
  },

  toJSON(message: MsgChangeAdmin): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgChangeAdmin>): MsgChangeAdmin {
    const message = { ...baseMsgChangeAdmin } as MsgChangeAdmin;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    } else {
      message.message = "";
    }
    return message;
  },
};

const baseMsgChangeAdminResponse: object = { address: "" };

export const MsgChangeAdminResponse = {
  encode(
    message: MsgChangeAdminResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgChangeAdminResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgChangeAdminResponse } as MsgChangeAdminResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChangeAdminResponse {
    const message = { ...baseMsgChangeAdminResponse } as MsgChangeAdminResponse;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: MsgChangeAdminResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgChangeAdminResponse>
  ): MsgChangeAdminResponse {
    const message = { ...baseMsgChangeAdminResponse } as MsgChangeAdminResponse;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateKyc(request: MsgCreateKyc): Promise<MsgCreateKycResponse>;
  UpdateKyc(request: MsgUpdateKyc): Promise<MsgUpdateKycResponse>;
  DeleteKyc(request: MsgDeleteKyc): Promise<MsgDeleteKycResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  ChangeAdmin(request: MsgChangeAdmin): Promise<MsgChangeAdminResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateKyc(request: MsgCreateKyc): Promise<MsgCreateKycResponse> {
    const data = MsgCreateKyc.encode(request).finish();
    const promise = this.rpc.request("belkyc.belkyc.Msg", "CreateKyc", data);
    return promise.then((data) =>
      MsgCreateKycResponse.decode(new Reader(data))
    );
  }

  UpdateKyc(request: MsgUpdateKyc): Promise<MsgUpdateKycResponse> {
    const data = MsgUpdateKyc.encode(request).finish();
    const promise = this.rpc.request("belkyc.belkyc.Msg", "UpdateKyc", data);
    return promise.then((data) =>
      MsgUpdateKycResponse.decode(new Reader(data))
    );
  }

  DeleteKyc(request: MsgDeleteKyc): Promise<MsgDeleteKycResponse> {
    const data = MsgDeleteKyc.encode(request).finish();
    const promise = this.rpc.request("belkyc.belkyc.Msg", "DeleteKyc", data);
    return promise.then((data) =>
      MsgDeleteKycResponse.decode(new Reader(data))
    );
  }

  ChangeAdmin(request: MsgChangeAdmin): Promise<MsgChangeAdminResponse> {
    const data = MsgChangeAdmin.encode(request).finish();
    const promise = this.rpc.request("belkyc.belkyc.Msg", "ChangeAdmin", data);
    return promise.then((data) =>
      MsgChangeAdminResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
