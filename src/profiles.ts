import {
  DisableProfile as DisableProfileEvent,
  NewProfileCreated as NewProfileCreatedEvent,
} from "../generated/Profiles/Profiles";
import { Address, ipfs, json, JSONValue, JSONValueKind, log, TypedMap } from "@graphprotocol/graph-ts";
import { Account, Profile } from "../generated/schema";

export function handleDisableEvent(event: DisableProfileEvent): void {
  let singleProfile = Profile.load(event.params.profileID.toHex());
  if (singleProfile) {
    singleProfile.isDisabled = event.params.isDisabled;
    singleProfile.save();
  }
}

function valueToArray(value: JSONValue | null): Array<JSONValue> {
  if (value != null && value.kind == JSONValueKind.ARRAY) {
    return value.toArray();
  } else {
    return [];
  }
}

function valueToObject(value: JSONValue): TypedMap<string, JSONValue> | null {
  // Decode JSON object
  if (value.kind == JSONValueKind.OBJECT) {
    return value.toObject();
    // Decode JSON object (as an array)
  } else if (value.kind == JSONValueKind.ARRAY) {
    let arrayValue = valueToArray(value);
    if (arrayValue.length == 1 && arrayValue[0].kind == JSONValueKind.OBJECT) {
      return arrayValue[0].toObject();
    }
  }
  return null;
}

export function handleNewProfileCreated(event: NewProfileCreatedEvent): void {
  let newProfile = new Profile(event.params.profileID.toHex());
  newProfile.profileID = event.params.profileID;
  newProfile.profileDataCID = event.params.profileDataCID;
  newProfile.creatorAddress = event.params.creatorAddress;
  newProfile.isDisabled = event.params.isDisabled;
  newProfile.blockNumber = event.block.number;
  newProfile.blockTimestamp = event.block.timestamp;
  newProfile.transactionHash = event.transaction.hash;
  let cid = event.params.profileDataCID.toString();

  if (cid) {
    let metadata = ipfs.cat(cid + "/data.json");
    if (metadata) {
      const data = json.try_fromBytes(metadata);
      if (!data) return;
      let value = valueToObject(data.value);
      if (value) {
        const firstName = value.get("name");
        const jobTitle = value.get("job");
        const city = value.get("city");
        const country = value.get("country");
        const website = value.get("website");
        const facebookPage = value.get("facebookPage");
        const facebookGroup = value.get("facebookGroup");
        const twitter = value.get("twitter");
        const instagram = value.get("instagram");
        const pinterest = value.get("pinterest");
        const tiktok = value.get("tiktok");
        const linkedin = value.get("linkedin");
        const freebie = value.get("freebie");
        const otherLink = value.get("otherLink");
        const bio = value.get("bio");
        const imagePath = value.get("image");

        if (firstName) {
          newProfile.firstName = firstName.toString();
        }
        if (jobTitle) {
          newProfile.jobTitle = jobTitle.toString();
        }
        if (city) {
          newProfile.city = city.toString();
        }
        if (country) {
          newProfile.country = country.toString();
        }
        if (website) {
          newProfile.website = website.toString();
        }
        if (facebookPage) {
          newProfile.facebookPage = facebookPage.toString();
        }
        if (facebookGroup) {
          newProfile.facebookGroup = facebookGroup.toString();
        }
        if (twitter) {
          newProfile.twitter = twitter.toString();
        }
        if (instagram) {
          newProfile.instagram = instagram.toString();
        }
        if (pinterest) {
          newProfile.pinterest = pinterest.toString();
        }
        if (tiktok) {
          newProfile.tiktok = tiktok.toString();
        }
        if (linkedin) {
          newProfile.linkedin = linkedin.toString();
        }
        if (freebie) {
          newProfile.freebie = freebie.toString();
        }
        if (otherLink) {
          newProfile.otherLink = otherLink.toString();
        }
        if (bio) {
          newProfile.bio = bio.toString();
        }

        if (imagePath) {
          const imageURL = "https://ipfs.io/ipfs/" + event.params.profileDataCID + imagePath.toString();
          newProfile.imageURL = imageURL;
        } else {
          // return fallback image if no imagePath
          const fallbackURL =
            "https://ipfs.io/ipfs/bafybeibssbrlptcefbqfh4vpw2wlmqfj2kgxt3nil4yujxbmdznau3t5wi/event.png";
          newProfile.imageURL = fallbackURL;
        }
      }
    }

    newProfile.save();
  }
}

// function getOrCreateAccount(address: Address): Account {
//   let account = Account.load(address.toHex());
//   if (account == null) {
//     account = new Account(address.toHex());
//     account.save();
//   }
//   return account;
// }
