import {
  QuestionUpdated as QuestionUpdatedEvent,
  UserUpdated as UserUpdatedEvent
} from "../generated/DevAngel/DevAngel"
import { QuestionUpdated, UserUpdated } from "../generated/schema"

export function handleQuestionUpdated(event: QuestionUpdatedEvent): void {
  let entity = new QuestionUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.questionId = event.params.questionId
  entity.title = event.params.title
  entity.description = event.params.description
  entity.bounty = event.params.bounty
  entity.creator = event.params.creator
  entity.acceptedIndex = event.params.acceptedIndex

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUserUpdated(event: UserUpdatedEvent): void {
  let entity = new UserUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userAddress = event.params.userAddress
  entity.name = event.params.name
  entity.pictureCID = event.params.pictureCID
  entity.reputation = event.params.reputation
  entity.rating = event.params.rating

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
