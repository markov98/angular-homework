var Ticket = /** @class */ (function () {
    function Ticket(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    return Ticket;
}());
function ticketSorting(tickets, sortingCriteria) {
    var output = [];
    tickets.forEach(function (ticket) {
        var _a = ticket.split('|'), destination = _a[0], price = _a[1], status = _a[2];
        output.push(new Ticket(destination, Number(price), status));
    });
    output.sort(function (a, b) {
        switch (sortingCriteria) {
            case 'destination':
            case 'status':
                return a[sortingCriteria].localeCompare(b[sortingCriteria]);
            case 'price':
                return a.price - b.price;
            default:
                throw new Error('Invalid sorting criteria');
        }
    });
    return output;
}
var result = ticketSorting([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'destination');
console.log(result);
