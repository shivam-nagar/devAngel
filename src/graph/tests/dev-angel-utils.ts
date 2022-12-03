import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import { QuestionUpdated, UserUpdated } from "../generated/DevAngel/DevAngel"

export function createQuestionUpdatedEvent(
  questionId: BigInt,
  title: string,
  description: string,
  bounty: BigInt,
  creator: Address,
  acceptedIndex: BigInt
): QuestionUpdated {
  let questionUpdatedEvent = changetype<QuestionUpdated>(newMockEvent())

  questionUpdatedEvent.parameters = new Array()

  questionUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "questionId",
      ethereum.Value.fromUnsignedBigInt(questionId)
    )
  )
  questionUpdatedEvent.parameters.push(
    new ethereum.EventParam("title", ethereum.Value.fromString(title))
  )
  questionUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )
  questionUpdatedEvent.parameters.push(
    new ethereum.EventParam("bounty", ethereum.Value.fromUnsignedBigInt(bounty))
  )
  questionUpdatedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  questionUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "acceptedIndex",
      ethereum.Value.fromUnsignedBigInt(acceptedIndex)
    )
  )

  return questionUpdatedEvent
}

export function createUserUpdatedEvent(
  userAddress: Address,
  name: string,
  pictureCID: string,
  reputation: BigInt,
  rating: BigInt
): UserUpdated {
  let userUpdatedEvent = changetype<UserUpdated>(newMockEvent())

  userUpdatedEvent.parameters = new Array()

  userUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "userAddress",
      ethereum.Value.fromAddress(userAddress)
    )
  )
  userUpdatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  userUpdatedEvent.parameters.push(
    new ethereum.EventParam("pictureCID", ethereum.Value.fromString(pictureCID))
  )
  userUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "reputation",
      ethereum.Value.fromUnsignedBigInt(reputation)
    )
  )
  userUpdatedEvent.parameters.push(
    new ethereum.EventParam("rating", ethereum.Value.fromUnsignedBigInt(rating))
  )

  return userUpdatedEvent
}
