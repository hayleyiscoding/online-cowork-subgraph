import { Bytes, dataSource, json } from "@graphprotocol/graph-ts";
import {
  DisableProfile as DisableProfileEvent,
  NewProfileCreated as NewProfileCreatedEvent,
} from "../generated/Profiles/Profiles";

import { Account, Profile, ProfileMetadata } from "../generated/schema";
import { Profile as ProfileMetadataTemplate } from "../generated/templates";

const DATA_FILE_NAME = "/data.json";

export function handleDisableEvent(event: DisableProfileEvent): void {
  let singleProfile = Profile.load(event.params.profileID.toHex());
  if (singleProfile) {
    singleProfile.isDisabled = event.params.isDisabled;
    singleProfile.save();
  }
}

export function handleNewProfileCreated(event: NewProfileCreatedEvent): void {
  let newProfile = Profile.load(event.params.profileID.toHex());

  if (newProfile == null) {
    newProfile = new Profile(event.params.profileID.toHex());
  }

  newProfile.profileID = event.params.profileID;
  newProfile.profileDataCID = event.params.profileDataCID;
  newProfile.creatorAddress = event.params.creatorAddress;
  newProfile.isDisabled = event.params.isDisabled;
  newProfile.blockNumber = event.block.number;
  newProfile.blockTimestamp = event.block.timestamp;
  newProfile.transactionHash = event.transaction.hash;
  const ipfsCID = event.params.profileDataCID.toString();
  newProfile.ipfsCID = ipfsCID;
  if (ipfsCID) {
    let uri = event.params.profileDataCID.toString() + DATA_FILE_NAME;
    newProfile.profileMetadata = uri;
    ProfileMetadataTemplate.create(uri);
  }

  newProfile.save();
}

export function handleProfileMetadata(content: Bytes): void {
  let profileMetadata = new ProfileMetadata(dataSource.stringParam());
  const value = json.fromBytes(content).toObject();

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
      profileMetadata.firstName = firstName.toString();
    }
    if (jobTitle) {
      profileMetadata.jobTitle = jobTitle.toString();
    }
    if (city) {
      profileMetadata.city = city.toString();
    }
    if (country) {
      profileMetadata.country = country.toString();
    }
    if (website) {
      profileMetadata.website = website.toString();
    }
    if (facebookPage) {
      profileMetadata.facebookPage = facebookPage.toString();
    }
    if (facebookGroup) {
      profileMetadata.facebookGroup = facebookGroup.toString();
    }
    if (twitter) {
      profileMetadata.twitter = twitter.toString();
    }
    if (instagram) {
      profileMetadata.instagram = instagram.toString();
    }
    if (pinterest) {
      profileMetadata.pinterest = pinterest.toString();
    }
    if (tiktok) {
      profileMetadata.tiktok = tiktok.toString();
    }
    if (linkedin) {
      profileMetadata.linkedin = linkedin.toString();
    }
    if (freebie) {
      profileMetadata.freebie = freebie.toString();
    }
    if (otherLink) {
      profileMetadata.otherLink = otherLink.toString();
    }
    if (bio) {
      profileMetadata.bio = bio.toString();
    }

    const cid = dataSource.stringParam().split("/");

    if (imagePath) {
      const imageURL =
        "https://ipfs.io/ipfs/" + dataSource.stringParam().replace(DATA_FILE_NAME, "") + imagePath.toString();
      profileMetadata.imageURL = imageURL;
    } else {
      // return fallback image if no imagePath
      const fallbackURL = "https://ipfs.io/ipfs/bafybeibssbrlptcefbqfh4vpw2wlmqfj2kgxt3nil4yujxbmdznau3t5wi/event.png";
      profileMetadata.imageURL = fallbackURL;
    }
  }
  profileMetadata.save();
}

// function getOrCreateAccount(address: Address): Account {
//   let account = Account.load(address.toHex());
//   if (account == null) {
//     account = new Account(address.toHex());
//     account.save();
//   }
//   return account;
// }
