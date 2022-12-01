// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Account extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Account entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Account must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Account", id.toString(), this);
    }
  }

  static load(id: string): Account | null {
    return changetype<Account | null>(store.get("Account", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get profileID(): Bytes {
    let value = this.get("profileID");
    return value!.toBytes();
  }

  set profileID(value: Bytes) {
    this.set("profileID", Value.fromBytes(value));
  }
}

export class Profile extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Profile entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Profile must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Profile", id.toString(), this);
    }
  }

  static load(id: string): Profile | null {
    return changetype<Profile | null>(store.get("Profile", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get profileID(): Bytes {
    let value = this.get("profileID");
    return value!.toBytes();
  }

  set profileID(value: Bytes) {
    this.set("profileID", Value.fromBytes(value));
  }

  get creatorAddress(): Bytes {
    let value = this.get("creatorAddress");
    return value!.toBytes();
  }

  set creatorAddress(value: Bytes) {
    this.set("creatorAddress", Value.fromBytes(value));
  }

  get profileDataCID(): string {
    let value = this.get("profileDataCID");
    return value!.toString();
  }

  set profileDataCID(value: string) {
    this.set("profileDataCID", Value.fromString(value));
  }

  get firstName(): string | null {
    let value = this.get("firstName");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set firstName(value: string | null) {
    if (!value) {
      this.unset("firstName");
    } else {
      this.set("firstName", Value.fromString(<string>value));
    }
  }

  get jobTitle(): string | null {
    let value = this.get("jobTitle");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set jobTitle(value: string | null) {
    if (!value) {
      this.unset("jobTitle");
    } else {
      this.set("jobTitle", Value.fromString(<string>value));
    }
  }

  get city(): string | null {
    let value = this.get("city");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set city(value: string | null) {
    if (!value) {
      this.unset("city");
    } else {
      this.set("city", Value.fromString(<string>value));
    }
  }

  get country(): string | null {
    let value = this.get("country");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set country(value: string | null) {
    if (!value) {
      this.unset("country");
    } else {
      this.set("country", Value.fromString(<string>value));
    }
  }

  get website(): string | null {
    let value = this.get("website");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set website(value: string | null) {
    if (!value) {
      this.unset("website");
    } else {
      this.set("website", Value.fromString(<string>value));
    }
  }

  get facebookPage(): string | null {
    let value = this.get("facebookPage");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set facebookPage(value: string | null) {
    if (!value) {
      this.unset("facebookPage");
    } else {
      this.set("facebookPage", Value.fromString(<string>value));
    }
  }

  get facebookGroup(): string | null {
    let value = this.get("facebookGroup");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set facebookGroup(value: string | null) {
    if (!value) {
      this.unset("facebookGroup");
    } else {
      this.set("facebookGroup", Value.fromString(<string>value));
    }
  }

  get twitter(): string | null {
    let value = this.get("twitter");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set twitter(value: string | null) {
    if (!value) {
      this.unset("twitter");
    } else {
      this.set("twitter", Value.fromString(<string>value));
    }
  }

  get instagram(): string | null {
    let value = this.get("instagram");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set instagram(value: string | null) {
    if (!value) {
      this.unset("instagram");
    } else {
      this.set("instagram", Value.fromString(<string>value));
    }
  }

  get pinterest(): string | null {
    let value = this.get("pinterest");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set pinterest(value: string | null) {
    if (!value) {
      this.unset("pinterest");
    } else {
      this.set("pinterest", Value.fromString(<string>value));
    }
  }

  get tiktok(): string | null {
    let value = this.get("tiktok");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set tiktok(value: string | null) {
    if (!value) {
      this.unset("tiktok");
    } else {
      this.set("tiktok", Value.fromString(<string>value));
    }
  }

  get linkedin(): string | null {
    let value = this.get("linkedin");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set linkedin(value: string | null) {
    if (!value) {
      this.unset("linkedin");
    } else {
      this.set("linkedin", Value.fromString(<string>value));
    }
  }

  get freebie(): string | null {
    let value = this.get("freebie");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set freebie(value: string | null) {
    if (!value) {
      this.unset("freebie");
    } else {
      this.set("freebie", Value.fromString(<string>value));
    }
  }

  get otherLink(): string | null {
    let value = this.get("otherLink");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set otherLink(value: string | null) {
    if (!value) {
      this.unset("otherLink");
    } else {
      this.set("otherLink", Value.fromString(<string>value));
    }
  }

  get bio(): string | null {
    let value = this.get("bio");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set bio(value: string | null) {
    if (!value) {
      this.unset("bio");
    } else {
      this.set("bio", Value.fromString(<string>value));
    }
  }

  get imageURL(): string | null {
    let value = this.get("imageURL");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set imageURL(value: string | null) {
    if (!value) {
      this.unset("imageURL");
    } else {
      this.set("imageURL", Value.fromString(<string>value));
    }
  }

  get isDisabled(): boolean {
    let value = this.get("isDisabled");
    return value!.toBoolean();
  }

  set isDisabled(value: boolean) {
    this.set("isDisabled", Value.fromBoolean(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}
