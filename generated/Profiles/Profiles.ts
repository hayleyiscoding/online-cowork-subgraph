// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class DisableProfile extends ethereum.Event {
  get params(): DisableProfile__Params {
    return new DisableProfile__Params(this);
  }
}

export class DisableProfile__Params {
  _event: DisableProfile;

  constructor(event: DisableProfile) {
    this._event = event;
  }

  get profileID(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get isDisabled(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class NewProfileCreated extends ethereum.Event {
  get params(): NewProfileCreated__Params {
    return new NewProfileCreated__Params(this);
  }
}

export class NewProfileCreated__Params {
  _event: NewProfileCreated;

  constructor(event: NewProfileCreated) {
    this._event = event;
  }

  get profileID(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get creatorAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get profileDataCID(): string {
    return this._event.parameters[2].value.toString();
  }

  get isDisabled(): boolean {
    return this._event.parameters[3].value.toBoolean();
  }
}

export class Profiles__idToProfileResult {
  value0: Bytes;
  value1: string;
  value2: Address;
  value3: boolean;

  constructor(value0: Bytes, value1: string, value2: Address, value3: boolean) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromFixedBytes(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromBoolean(this.value3));
    return map;
  }

  getProfileID(): Bytes {
    return this.value0;
  }

  getProfileDataCID(): string {
    return this.value1;
  }

  getProfileOwner(): Address {
    return this.value2;
  }

  getIsDisabled(): boolean {
    return this.value3;
  }
}

export class Profiles extends ethereum.SmartContract {
  static bind(address: Address): Profiles {
    return new Profiles("Profiles", address);
  }

  idToProfile(param0: Bytes): Profiles__idToProfileResult {
    let result = super.call(
      "idToProfile",
      "idToProfile(bytes32):(bytes32,string,address,bool)",
      [ethereum.Value.fromFixedBytes(param0)]
    );

    return new Profiles__idToProfileResult(
      result[0].toBytes(),
      result[1].toString(),
      result[2].toAddress(),
      result[3].toBoolean()
    );
  }

  try_idToProfile(
    param0: Bytes
  ): ethereum.CallResult<Profiles__idToProfileResult> {
    let result = super.tryCall(
      "idToProfile",
      "idToProfile(bytes32):(bytes32,string,address,bool)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Profiles__idToProfileResult(
        value[0].toBytes(),
        value[1].toString(),
        value[2].toAddress(),
        value[3].toBoolean()
      )
    );
  }
}

export class CreateNewProfileCall extends ethereum.Call {
  get inputs(): CreateNewProfileCall__Inputs {
    return new CreateNewProfileCall__Inputs(this);
  }

  get outputs(): CreateNewProfileCall__Outputs {
    return new CreateNewProfileCall__Outputs(this);
  }
}

export class CreateNewProfileCall__Inputs {
  _call: CreateNewProfileCall;

  constructor(call: CreateNewProfileCall) {
    this._call = call;
  }

  get profileDataCID(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class CreateNewProfileCall__Outputs {
  _call: CreateNewProfileCall;

  constructor(call: CreateNewProfileCall) {
    this._call = call;
  }
}

export class DisableProfileCall extends ethereum.Call {
  get inputs(): DisableProfileCall__Inputs {
    return new DisableProfileCall__Inputs(this);
  }

  get outputs(): DisableProfileCall__Outputs {
    return new DisableProfileCall__Outputs(this);
  }
}

export class DisableProfileCall__Inputs {
  _call: DisableProfileCall;

  constructor(call: DisableProfileCall) {
    this._call = call;
  }

  get profileId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class DisableProfileCall__Outputs {
  _call: DisableProfileCall;

  constructor(call: DisableProfileCall) {
    this._call = call;
  }
}
