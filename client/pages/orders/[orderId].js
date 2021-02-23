import {useEffect, useState} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';

const OrderShow = ({order, currentUser}) => {
    const [timeLeft, setTimeLeft] = useState(0);
    const {doRequest, errors} = useRequest({
        url: '/api/payments',
        method: 'post',
        body:{
            orderId: order.id
        },
        onSuccess: () => Router.push('/orders'),
    }); 
    useEffect(() => {
      const findTimeLeft = () => {
        const msLeft = new Date(order.expiresAt) - new Date();
        setTimeLeft(Math.round(msLeft/1000))
      };
      findTimeLeft(); //so that we need not to wait for 1 sec for the first time
      const timerId = setInterval(findTimeLeft, 1000);
      return () => {
          clearInterval(timerId);
      }
    },[order]);

    if(timeLeft < 0){
        return <div>Order Expired</div>
    }
    
    return <div>
        Time left to pay: {timeLeft} seconds
        <StripeCheckout 
          token ={({id}) => doRequest({token: id})}
          stripeKey="pk_test_51INbWIC1WYWQxIKakpD1spROD7dyM7TeSJ1aXNpXbDdFKSWVzZQDmYYhiKVbebImeLJVPzif1lJ2yaUyRyLajeDf00qeZwOPMt"
          amount={order.ticket.price * 100}
          email={currentUser.email}
        />
        {errors}
        </div>;
};

OrderShow.getInitialProps = async (context, client) => {
    const {orderId} = context.query;
    const {data} = await client.get(`/api/orders/${orderId}`);
    return {order:data};
}


export default OrderShow;