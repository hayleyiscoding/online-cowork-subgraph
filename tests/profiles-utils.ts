import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address } from "@graphprotocol/graph-ts"
import {
  DisableProfile,
  NewProfileCreated
} from "../generated/Profiles/Profiles"

export function createDisableProfileEvent(
  profileID: Bytes,
  isDisabled: boolean
): DisableProfile {
  let disableProfileEvent = changetype<DisableProfile>(newMockEvent())

  disableProfileEvent.parameters = new Array()

  disableProfileEvent.parameters.push(
    new ethereum.EventParam(
      "profileID",
      ethereum.Value.fromFixedBytes(profileID)
    )
  )
  disableProfileEvent.parameters.push(
    new ethereum.EventParam(
      "isDisabled",
      ethereum.Value.fromBoolean(isDisabled)
    )
  )

  return disableProfileEvent
}

export function createNewProfileCreatedEvent(
  profileID: Bytes,
  creatorAddress: Address,
  profileDataCID: string,
  isDisabled: boolean
): NewProfileCreated {
  let newProfileCreatedEvent = changetype<NewProfileCreated>(newMockEvent())

  newProfileCreatedEvent.parameters = new Array()

  newProfileCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "profileID",
      ethereum.Value.fromFixedBytes(profileID)
    )
  )
  newProfileCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "creatorAddress",
      ethereum.Value.fromAddress(creatorAddress)
    )
  )
  newProfileCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "profileDataCID",
      ethereum.Value.fromString(profileDataCID)
    )
  )
  newProfileCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "isDisabled",
      ethereum.Value.fromBoolean(isDisabled)
    )
  )

  return newProfileCreatedEvent
}
