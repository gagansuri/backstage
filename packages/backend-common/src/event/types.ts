/*
 * Copyright 2023 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export type Event<TPayload = unknown> = {
  uuid: string;
  timestamp: number;
  topic: string;
  type?: string;
  payload?: TPayload;
};

export type BackstageEvent<TPayload = unknown> = Event<TPayload> & {
  topic: 'backstage';
  originatingEntityRef?: string;
};

export interface EventSubscriber {
  /**
   * Supported event topics like "backstage", "github", "bitbucketCloud", etc.
   */
  supportsEventTopics(): string[];

  /**
   * React on a received event.
   *
   * @param event - the event to be received.
   */
  onEvent(event: Event): Promise<void>;
}

/**
 * Allows a decoupled and asynchronous communication between components.
 * Components can publish events for a given topic and
 * others can subscribe for future events for topics they are interested in.
 *
 * @public
 */
export interface EventBroker {
  /**
   * Publishes an event for the topic.
   *
   * @param params - parameters for the to be published event.
   */
  publish(params: Event): Promise<void>;

  /**
   * Adds new subscribers for {@link EventSubscriber#supportsEventTopics | interested topics}.
   *
   * @param subscribers - interested in events of specified topics.
   */
  subscribe(
    ...subscribers: Array<EventSubscriber | Array<EventSubscriber>>
  ): void;
}
