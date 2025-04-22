import React, { useState } from "react";
import "./App.css";

function AddItem({ setPrice }) {
    const [items, setItems] = useState([{ id: 1, price: 1, qty: 1 }]);

    const handleAddItem = () => {   
        setItems((prevItems) => [
            ...prevItems,
            { id: prevItems.length + 1, price: 0, qty: 1 },
        ]);
    };

    const handlePrice = (e, itemId) => {
        const numberPrice = Number(e.target.value);
        setItems((prevItems) => {
            const updatedItems = prevItems.map((item) =>
                item.id === itemId ? { ...item, price: numberPrice } : item
            );
            const totalPrice = updatedItems.reduce(
                (sum, item) => sum + item.price * item.qty,
                0
            );

            setPrice(totalPrice);
            return updatedItems;
        });
    };

    const handleDelete = (itemId) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== itemId))
     }
     
    return (
        <>
            <div className="all-item-div">
                {items.map((item, index) => (
                    <div key={item.id} className="item-div">
                        <div className="item-details">
                            <h3>ITEM {index + 1}</h3>
                            <div className="item-details-div">
                                <input type="text" placeholder="Item name" required/>
                                <input
                                    type="text"
                                    placeholder="Item description"
                                />
                            </div>
                        </div>
                        <div className="qty-price-action-div">
                            <div className="quantity-div">
                                <h3>QTY</h3>
                                <input type="number"/>
                            </div>
                            <div className="price-div">
                                <h3>RATE</h3>
                                <div className="currency-div">
                                    <span className="material-symbols-outlined">
                                        currency_rupee_circle
                                    </span>
                                    <input
                                        type="number"
                                        onChange={(e) =>
                                            handlePrice(e, item.id)
                                        }
                                        value={item.price}
                                   required />
                                </div>
                            </div>
                            <div className="action-div">
                                <h3>KILL</h3>
                                <span className="material-symbols-outlined" onClick={() => handleDelete(item.id)}>
                                    delete
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
                <hr />
                <span className="addItem" onClick={handleAddItem}>
                    Add Item
                </span>
            </div>
        </>
    );
}

export default AddItem;
