import {Subjects, Publisher, ExpirationCompleteEvent} from '@piyushkashyap/common/build';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent>{
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}