import React from "react";

const Items = (props) => {
  const { items, del, update } = props;
  let length = items.length;
  const ListItem = length ? (
    items.map((item) => {
      return (
        <div key={item.id} className="item">
          <p>{item.product}</p>
          <p>{item.price}</p>

          <p className="delete" onClick={() => del(item.id)}>
            &times;
          </p>
          <p>
            <button
              className="increase"
              onClick={() => {
                update(item.id, 1, item.quantity);
              }}
            >
              +
            </button>
            {item.quantity}
            <button
              className="decrease"
              onClick={() => {
                update(item.id, -1);
              }}
            >
              -
            </button>
          </p>
        </div>
      );
    })
  ) : (
    <div className="text">There are no items, Try to add some.</div>
  );
  return (
    <div>
      <div className="header item">
        <p>Product</p>
        <p>Price</p>
        <p>Edit</p>
        <p>Quantity</p>
      </div>
      {ListItem}
    </div>
  );
};

export default Items;
