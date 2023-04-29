import { Component, OnInit } from '@angular/core';

interface Order {
  id: number;
  items: string;
  address: string;
  status: string;
  amount: number;
  approxTime: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  orders: Order[] = [
    { id: 1, items: 'Margerita Pizza, Coke', address: 'Praladnagar', status: '', amount: 300, approxTime: '45 min' },
    { id: 2, items: 'Aloo Tikki Burger, Fries', address: 'Maninagar', status: '', amount: 260, approxTime: '30 min' },
    { id: 3, items: 'Salad, Wrap', address: 'Bopal', status: '', amount: 300, approxTime: '20 min' },
    { id: 4, items: 'Thepla, Chass', address: 'Sciencity', status: '', amount: 120, approxTime: '35 min' },
    { id: 5, items: 'PavBhaji,Chines Bhel', address: 'Paldi', status: '', amount: 250, approxTime: '26 min' },
    { id: 6, items: 'Masala Dosa', address: 'C.G Road', status: '', amount: 180, approxTime: '28 min' },

  ];

  approvedOrders: Order[] = [];

  declinedOrders: Order[] = [];

  completedOrders: Order[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  moveToTable(order: Order, table: string): void {
    if (table === 'approved') {
      this.approvedOrders.push(order);
    } else if (table === 'declined') {
      this.declinedOrders.push(order);
    }
    const index = this.orders.indexOf(order);
    if (index > -1) {
      this.orders.splice(index, 1);
    }
  }

  completeOrder(order: Order): void {
    this.completedOrders.push(order);
    const index = this.approvedOrders.indexOf(order);
    if (index > -1) {
      this.approvedOrders.splice(index, 1);
    }
  }

}
