import {Publisher, Subjects, TicketUpdatedEvent} from '@piyushkashyap/common/build'; 
import { natsWrapper } from '../../nats-wrapper';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent>{
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
