import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, Address } from "@graphprotocol/graph-ts"
import { DisableProfile } from "../generated/schema"
import { DisableProfile as DisableProfileEvent } from "../generated/Profiles/Profiles"
import { handleDisableProfile } from "../src/profiles"
import { createDisableProfileEvent } from "./profiles-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let profileID = Bytes.fromI32(1234567890)
    let isDisabled = "boolean Not implemented"
    let newDisableProfileEvent = createDisableProfileEvent(
      profileID,
      isDisabled
    )
    handleDisableProfile(newDisableProfileEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("DisableProfile created and stored", () => {
    assert.entityCount("DisableProfile", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "DisableProfile",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "profileID",
      "1234567890"
    )
    assert.fieldEquals(
      "DisableProfile",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "isDisabled",
      "boolean Not implemented"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
