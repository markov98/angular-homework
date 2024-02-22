class Ticket {
    destination: string;
    price: number;
    status: string;

    constructor(destination: string, price: number, status: string) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

function ticketSorting(tickets: string[], sortingCriteria: string): Ticket[] {
    const output: Ticket[] = [];

    tickets.forEach((ticket: string) => {
        const [destination, price, status] = ticket.split('|');
        output.push(new Ticket(destination, Number(price), status));
    });

    output.sort(function(a: Ticket, b: Ticket): number {
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

const result = ticketSorting(
    [

        'Philadelphia|94.20|available',

        'New York City|95.99|available',
        
        'New York City|95.99|sold',
        
        'Boston|126.20|departed'
        
        ],
        
        'destination'
)

console.log(result);
