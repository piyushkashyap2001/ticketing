import {Publisher, OrderCreatedEvent, Subjects} from '@piyushkashyap/common/build';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent>{
      subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
