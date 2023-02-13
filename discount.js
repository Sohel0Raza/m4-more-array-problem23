function ticketPrice(ticketQuantity) {
    const first100Rate = 100;
    const second100Rate = 80;
    const restTicketRate = 70;
    if (ticketQuantity <= 100) {
        const ticketPrice = ticketQuantity * first100Rate;
        return ticketPrice;
    }
    else if (ticketQuantity <= 200) {
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    else {
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalPrice = first100Price + second100Price + restTicketPrice;
        return totalPrice;
    }
}
const price = ticketPrice(220);
console.log('Total price: ', price)