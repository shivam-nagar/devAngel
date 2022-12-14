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

export class QuestionUpdated extends ethereum.Event {
  get params(): QuestionUpdated__Params {
    return new QuestionUpdated__Params(this);
  }
}

export class QuestionUpdated__Params {
  _event: QuestionUpdated;

  constructor(event: QuestionUpdated) {
    this._event = event;
  }

  get questionId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get title(): string {
    return this._event.parameters[1].value.toString();
  }

  get description(): string {
    return this._event.parameters[2].value.toString();
  }

  get bounty(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get creator(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get acceptedIndex(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class UserUpdated extends ethereum.Event {
  get params(): UserUpdated__Params {
    return new UserUpdated__Params(this);
  }
}

export class UserUpdated__Params {
  _event: UserUpdated;

  constructor(event: UserUpdated) {
    this._event = event;
  }

  get userAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get name(): string {
    return this._event.parameters[1].value.toString();
  }

  get pictureCID(): string {
    return this._event.parameters[2].value.toString();
  }

  get reputation(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get rating(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class DevAngel__questionsResult {
  value0: string;
  value1: string;
  value2: BigInt;
  value3: Address;
  value4: BigInt;

  constructor(
    value0: string,
    value1: string,
    value2: BigInt,
    value3: Address,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }

  getTitle(): string {
    return this.value0;
  }

  getDescription(): string {
    return this.value1;
  }

  getBounty(): BigInt {
    return this.value2;
  }

  getCreator(): Address {
    return this.value3;
  }

  getAcceptedIndex(): BigInt {
    return this.value4;
  }
}

export class DevAngel__usersResult {
  value0: string;
  value1: string;
  value2: BigInt;
  value3: BigInt;

  constructor(value0: string, value1: string, value2: BigInt, value3: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }

  getName(): string {
    return this.value0;
  }

  getPictureCID(): string {
    return this.value1;
  }

  getReputation(): BigInt {
    return this.value2;
  }

  getRating(): BigInt {
    return this.value3;
  }
}

export class DevAngel extends ethereum.SmartContract {
  static bind(address: Address): DevAngel {
    return new DevAngel("DevAngel", address);
  }

  proposers(param0: BigInt, param1: BigInt): Address {
    let result = super.call(
      "proposers",
      "proposers(uint256,uint256):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toAddress();
  }

  try_proposers(param0: BigInt, param1: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "proposers",
      "proposers(uint256,uint256):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  questionTags(param0: BigInt, param1: BigInt): string {
    let result = super.call(
      "questionTags",
      "questionTags(uint256,uint256):(string)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toString();
  }

  try_questionTags(
    param0: BigInt,
    param1: BigInt
  ): ethereum.CallResult<string> {
    let result = super.tryCall(
      "questionTags",
      "questionTags(uint256,uint256):(string)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  questions(param0: BigInt): DevAngel__questionsResult {
    let result = super.call(
      "questions",
      "questions(uint256):(string,string,uint256,address,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new DevAngel__questionsResult(
      result[0].toString(),
      result[1].toString(),
      result[2].toBigInt(),
      result[3].toAddress(),
      result[4].toBigInt()
    );
  }

  try_questions(
    param0: BigInt
  ): ethereum.CallResult<DevAngel__questionsResult> {
    let result = super.tryCall(
      "questions",
      "questions(uint256):(string,string,uint256,address,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new DevAngel__questionsResult(
        value[0].toString(),
        value[1].toString(),
        value[2].toBigInt(),
        value[3].toAddress(),
        value[4].toBigInt()
      )
    );
  }

  userTags(param0: Address, param1: BigInt): string {
    let result = super.call("userTags", "userTags(address,uint256):(string)", [
      ethereum.Value.fromAddress(param0),
      ethereum.Value.fromUnsignedBigInt(param1)
    ]);

    return result[0].toString();
  }

  try_userTags(param0: Address, param1: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall(
      "userTags",
      "userTags(address,uint256):(string)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  users(param0: Address): DevAngel__usersResult {
    let result = super.call(
      "users",
      "users(address):(string,string,uint256,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new DevAngel__usersResult(
      result[0].toString(),
      result[1].toString(),
      result[2].toBigInt(),
      result[3].toBigInt()
    );
  }

  try_users(param0: Address): ethereum.CallResult<DevAngel__usersResult> {
    let result = super.tryCall(
      "users",
      "users(address):(string,string,uint256,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new DevAngel__usersResult(
        value[0].toString(),
        value[1].toString(),
        value[2].toBigInt(),
        value[3].toBigInt()
      )
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AcceptProposerCall extends ethereum.Call {
  get inputs(): AcceptProposerCall__Inputs {
    return new AcceptProposerCall__Inputs(this);
  }

  get outputs(): AcceptProposerCall__Outputs {
    return new AcceptProposerCall__Outputs(this);
  }
}

export class AcceptProposerCall__Inputs {
  _call: AcceptProposerCall;

  constructor(call: AcceptProposerCall) {
    this._call = call;
  }

  get questionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get proposer(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class AcceptProposerCall__Outputs {
  _call: AcceptProposerCall;

  constructor(call: AcceptProposerCall) {
    this._call = call;
  }
}

export class AskQuestionCall extends ethereum.Call {
  get inputs(): AskQuestionCall__Inputs {
    return new AskQuestionCall__Inputs(this);
  }

  get outputs(): AskQuestionCall__Outputs {
    return new AskQuestionCall__Outputs(this);
  }
}

export class AskQuestionCall__Inputs {
  _call: AskQuestionCall;

  constructor(call: AskQuestionCall) {
    this._call = call;
  }

  get creator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get title(): string {
    return this._call.inputValues[1].value.toString();
  }

  get description(): string {
    return this._call.inputValues[2].value.toString();
  }

  get tags(): Array<string> {
    return this._call.inputValues[3].value.toStringArray();
  }

  get bounty(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class AskQuestionCall__Outputs {
  _call: AskQuestionCall;

  constructor(call: AskQuestionCall) {
    this._call = call;
  }
}

export class CreateUserCall extends ethereum.Call {
  get inputs(): CreateUserCall__Inputs {
    return new CreateUserCall__Inputs(this);
  }

  get outputs(): CreateUserCall__Outputs {
    return new CreateUserCall__Outputs(this);
  }
}

export class CreateUserCall__Inputs {
  _call: CreateUserCall;

  constructor(call: CreateUserCall) {
    this._call = call;
  }

  get userAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get name(): string {
    return this._call.inputValues[1].value.toString();
  }

  get pictureCID(): string {
    return this._call.inputValues[2].value.toString();
  }

  get tags(): Array<string> {
    return this._call.inputValues[3].value.toStringArray();
  }

  get reputation(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get rating(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class CreateUserCall__Outputs {
  _call: CreateUserCall;

  constructor(call: CreateUserCall) {
    this._call = call;
  }
}

export class UpdateProposersCall extends ethereum.Call {
  get inputs(): UpdateProposersCall__Inputs {
    return new UpdateProposersCall__Inputs(this);
  }

  get outputs(): UpdateProposersCall__Outputs {
    return new UpdateProposersCall__Outputs(this);
  }
}

export class UpdateProposersCall__Inputs {
  _call: UpdateProposersCall;

  constructor(call: UpdateProposersCall) {
    this._call = call;
  }

  get questionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get proposer(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class UpdateProposersCall__Outputs {
  _call: UpdateProposersCall;

  constructor(call: UpdateProposersCall) {
    this._call = call;
  }
}
