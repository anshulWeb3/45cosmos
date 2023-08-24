/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../belkyc/params";
import { Kyc } from "../belkyc/kyc";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "belkyc.belkyc";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetKycRequest {
  address: string;
}

export interface QueryGetKycResponse {
  kyc: Kyc | undefined;
}

export interface QueryAllKycRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllKycResponse {
  kyc: Kyc[];
  pagination: PageResponse | undefined;
}

export interface QueryGetAdminRequest {}

export interface QueryGetAdminResponse {
  address: string;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetKycRequest: object = { address: "" };

export const QueryGetKycRequest = {
  encode(
    message: QueryGetKycRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetKycRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetKycRequest } as QueryGetKycRequest;
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

  fromJSON(object: any): QueryGetKycRequest {
    const message = { ...baseQueryGetKycRequest } as QueryGetKycRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryGetKycRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetKycRequest>): QueryGetKycRequest {
    const message = { ...baseQueryGetKycRequest } as QueryGetKycRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQueryGetKycResponse: object = {};

export const QueryGetKycResponse = {
  encode(
    message: QueryGetKycResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.kyc !== undefined) {
      Kyc.encode(message.kyc, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetKycResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetKycResponse } as QueryGetKycResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kyc = Kyc.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetKycResponse {
    const message = { ...baseQueryGetKycResponse } as QueryGetKycResponse;
    if (object.kyc !== undefined && object.kyc !== null) {
      message.kyc = Kyc.fromJSON(object.kyc);
    } else {
      message.kyc = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetKycResponse): unknown {
    const obj: any = {};
    message.kyc !== undefined &&
      (obj.kyc = message.kyc ? Kyc.toJSON(message.kyc) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetKycResponse>): QueryGetKycResponse {
    const message = { ...baseQueryGetKycResponse } as QueryGetKycResponse;
    if (object.kyc !== undefined && object.kyc !== null) {
      message.kyc = Kyc.fromPartial(object.kyc);
    } else {
      message.kyc = undefined;
    }
    return message;
  },
};

const baseQueryAllKycRequest: object = {};

export const QueryAllKycRequest = {
  encode(
    message: QueryAllKycRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllKycRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllKycRequest } as QueryAllKycRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllKycRequest {
    const message = { ...baseQueryAllKycRequest } as QueryAllKycRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllKycRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllKycRequest>): QueryAllKycRequest {
    const message = { ...baseQueryAllKycRequest } as QueryAllKycRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllKycResponse: object = {};

export const QueryAllKycResponse = {
  encode(
    message: QueryAllKycResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.kyc) {
      Kyc.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllKycResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllKycResponse } as QueryAllKycResponse;
    message.kyc = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kyc.push(Kyc.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllKycResponse {
    const message = { ...baseQueryAllKycResponse } as QueryAllKycResponse;
    message.kyc = [];
    if (object.kyc !== undefined && object.kyc !== null) {
      for (const e of object.kyc) {
        message.kyc.push(Kyc.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllKycResponse): unknown {
    const obj: any = {};
    if (message.kyc) {
      obj.kyc = message.kyc.map((e) => (e ? Kyc.toJSON(e) : undefined));
    } else {
      obj.kyc = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllKycResponse>): QueryAllKycResponse {
    const message = { ...baseQueryAllKycResponse } as QueryAllKycResponse;
    message.kyc = [];
    if (object.kyc !== undefined && object.kyc !== null) {
      for (const e of object.kyc) {
        message.kyc.push(Kyc.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetAdminRequest: object = {};

export const QueryGetAdminRequest = {
  encode(_: QueryGetAdminRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetAdminRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetAdminRequest } as QueryGetAdminRequest;
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

  fromJSON(_: any): QueryGetAdminRequest {
    const message = { ...baseQueryGetAdminRequest } as QueryGetAdminRequest;
    return message;
  },

  toJSON(_: QueryGetAdminRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryGetAdminRequest>): QueryGetAdminRequest {
    const message = { ...baseQueryGetAdminRequest } as QueryGetAdminRequest;
    return message;
  },
};

const baseQueryGetAdminResponse: object = { address: "" };

export const QueryGetAdminResponse = {
  encode(
    message: QueryGetAdminResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetAdminResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetAdminResponse } as QueryGetAdminResponse;
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

  fromJSON(object: any): QueryGetAdminResponse {
    const message = { ...baseQueryGetAdminResponse } as QueryGetAdminResponse;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryGetAdminResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetAdminResponse>
  ): QueryGetAdminResponse {
    const message = { ...baseQueryGetAdminResponse } as QueryGetAdminResponse;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Kyc by index. */
  Kyc(request: QueryGetKycRequest): Promise<QueryGetKycResponse>;
  /** Queries a list of Kyc items. */
  KycAll(request: QueryAllKycRequest): Promise<QueryAllKycResponse>;
  /** Queries a list of GetAdmin items. */
  GetAdmin(request: QueryGetAdminRequest): Promise<QueryGetAdminResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("belkyc.belkyc.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Kyc(request: QueryGetKycRequest): Promise<QueryGetKycResponse> {
    const data = QueryGetKycRequest.encode(request).finish();
    const promise = this.rpc.request("belkyc.belkyc.Query", "Kyc", data);
    return promise.then((data) => QueryGetKycResponse.decode(new Reader(data)));
  }

  KycAll(request: QueryAllKycRequest): Promise<QueryAllKycResponse> {
    const data = QueryAllKycRequest.encode(request).finish();
    const promise = this.rpc.request("belkyc.belkyc.Query", "KycAll", data);
    return promise.then((data) => QueryAllKycResponse.decode(new Reader(data)));
  }

  GetAdmin(request: QueryGetAdminRequest): Promise<QueryGetAdminResponse> {
    const data = QueryGetAdminRequest.encode(request).finish();
    const promise = this.rpc.request("belkyc.belkyc.Query", "GetAdmin", data);
    return promise.then((data) =>
      QueryGetAdminResponse.decode(new Reader(data))
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
