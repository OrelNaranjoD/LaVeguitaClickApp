import { Order } from '@shared/interfaces';

export class LoadOrders{
  static readonly type = '[Orders] Load Orders';
}

export class CreateOrder {
  static readonly type = '[Orders] Create Order';
  constructor(public payload: Order) {}
}

export class UpdateOrder {
  static readonly type = '[Orders] Update Order';
  constructor(public payload: Order) {}
}

export class DeleteOrder {
  static readonly type = '[Orders] Delete Order';
  constructor(public payload: number) {}
}