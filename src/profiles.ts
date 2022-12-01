import {
  DisableProfile as DisableProfileEvent,
  NewProfileCreated as NewProfileCreatedEvent,
} from "../generated/Profiles/Profiles";
import { Address, ipfs, json } from "@graphprotocol/graph-ts";
import { integer } from "@protofire/subgraph-toolkit";
import { Account, Profile } from "../generated/schema";

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
    newProfile.profileID = event.params.profileID;
    newProfile.profileDataCID = event.params.profileDataCID;
    newProfile.creatorAddress = event.params.creatorAddress;
    // newProfile.eventTimestamp = event.params.eventTimestamp;
    newProfile.isDisabled = event.params.isDisabled;
    newProfile.blockNumber = event.block.number;
    newProfile.blockTimestamp = event.block.timestamp;
    newProfile.transactionHash = event.transaction.hash;

    let metadata = ipfs.cat(event.params.profileDataCID + "/data.json");

    if (metadata) {
      const value = json.fromBytes(metadata).toObject();
      if (value) {
        const firstName = value.get("firstName");
        const jobTitle = value.get("jobTitle");
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
        const imagePath = value.get("coverImage");

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
          const imageURL =
            "https://ipfs.io/ipfs/" +
            event.params.profileDataCID +
            imagePath.toString();
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
