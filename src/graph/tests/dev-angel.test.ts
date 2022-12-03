import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { QuestionUpdated } from "../generated/schema"
import { QuestionUpdated as QuestionUpdatedEvent } from "../generated/DevAngel/DevAngel"
import { handleQuestionUpdated } from "../src/dev-angel"
import { createQuestionUpdatedEvent } from "./dev-angel-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let questionId = BigInt.fromI32(234)
    let title = "Example string value"
    let description = "Example string value"
    let bounty = BigInt.fromI32(234)
    let creator = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let acceptedIndex = BigInt.fromI32(234)
    let newQuestionUpdatedEvent = createQuestionUpdatedEvent(
      questionId,
      title,
      description,
      bounty,
      creator,
      acceptedIndex
    )
    handleQuestionUpdated(newQuestionUpdatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("QuestionUpdated created and stored", () => {
    assert.entityCount("QuestionUpdated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "QuestionUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "questionId",
      "234"
    )
    assert.fieldEquals(
      "QuestionUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "title",
      "Example string value"
    )
    assert.fieldEquals(
      "QuestionUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "description",
      "Example string value"
    )
    assert.fieldEquals(
      "QuestionUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "bounty",
      "234"
    )
    assert.fieldEquals(
      "QuestionUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "creator",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "QuestionUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "acceptedIndex",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
