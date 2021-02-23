import {Subjects, Publisher, PaymentCreatedEvent} from '@piyushkashyap/common/build';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent>{
    subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}