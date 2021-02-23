import {Publisher, OrderCancelledEvent, Subjects} from '@piyushkashyap/common/build';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent>{
      subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
