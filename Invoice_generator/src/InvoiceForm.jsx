import "./App.css";
import { useState } from "react";
import AddItem from "./AddItem";
import ShowInvoice from "./ShowInvoice";

function InvoiceForm() {
    const [selectedCurrency, setSelectedCurrency] = useState("");
    const [price, setPrice] = useState(1);
    const [tax, setTax] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [invoiceNumber, setInvoiceNumber] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [billTo, setBillTo] = useState({ name: "", email: "", address: "" });
    const [billFrom, setBillFrom] = useState({
        name: "",
        email: "",
        address: "",
    });
    const [showInvoice, setShowInvoice] = useState(false);
    const [invoiceDetails, setInvoiceDetails] = useState({});
    const currencySymbols = {
        usd: "$",
        gbp: "£",
        jpy: "¥",
        cad: "C$",
        aud: "A$",
    };

    const currencySymbol = currencySymbols[selectedCurrency] || "$";

    const handleChange = (e) => {
        setSelectedCurrency(e.target.value);
    };

    const today = new Date();
    const formattedDate = today.toDateString();

    const handleTax = (e) => {
        const numberTax = Number(e.target.value);
        setTax(numberTax);
    };

    const handleDiscount = (e) => {
        const numberDiscount = Number(e.target.value);
        setDiscount(numberDiscount);
    };

    const taxAmount = price * (tax / 100);
    const discountAmount = price * (discount / 100);
    const finalPrice = price + taxAmount - discountAmount;

    const handleReview = (e) => {
        e.preventDefault();
        const details = {
            invoiceNumber,
            billTo,
            billFrom,
            price,
            taxAmount,
            discountAmount,
            finalPrice,
            formattedDate,
            dueDate,
        };

        setInvoiceDetails(details);
        setShowInvoice(true);
    };

    return (
        <>
            <div className="main">
                <form
                    className="main-left"
                    onSubmit={handleReview}
                    id="invoice-form"
                >
                    <div className="main-left-top">
                        <div className="date-div">
                            <div className="current-div">
                                <h3>Current Date:</h3>
                                <p>{formattedDate}</p>
                            </div>
                            <div className="due-div">
                                <h3>Due Date:</h3>
                                <input
                                    type="date"
                                    value={dueDate}
                                    onChange={(e) => setDueDate(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="serial-number-div">
                            <h3>Invoice Number:</h3>
                            <input
                                type="number"
                                value={invoiceNumber}
                                onChange={(e) =>
                                    setInvoiceNumber(e.target.value)
                                }
                                required
                            />
                        </div>
                    </div>
                    <hr />
                    <div className="bill-div">
                        <div className="bill-to-div">
                            <h3>Bill To:</h3>
                            <input
                                type="text"
                                placeholder="Who is this invoice to?"
                                value={billTo.name}
                                onChange={(e) =>
                                    setBillTo({
                                        ...billTo,
                                        name: e.target.value,
                                    })
                                }
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email address"
                                value={billTo.email}
                                onChange={(e) =>
                                    setBillTo({
                                        ...billTo,
                                        email: e.target.value,
                                    })
                                }
                                required
                            />
                            <input
                                type="text"
                                placeholder="Billing Address"
                                value={billTo.address}
                                onChange={(e) =>
                                    setBillTo({
                                        ...billTo,
                                        address: e.target.value,
                                    })
                                }
                                required
                            />
                        </div>
                        <div className="bill-from-div">
                            <h3>Bill From:</h3>
                            <input
                                type="text"
                                placeholder="Who is this invoice to?"
                                value={billFrom.name}
                                onChange={(e) =>
                                    setBillFrom({
                                        ...billFrom,
                                        name: e.target.value,
                                    })
                                }
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email address"
                                value={billFrom.email}
                                onChange={(e) =>
                                    setBillFrom({
                                        ...billFrom,
                                        email: e.target.value,
                                    })
                                }
                                required
                            />
                            <input
                                type="text"
                                placeholder="Billing Address"
                                value={billFrom.address}
                                onChange={(e) =>
                                    setBillFrom({
                                        ...billFrom,
                                        address: e.target.value,
                                    })
                                }
                                required
                            />
                        </div>
                    </div>
                    <hr />
                    <AddItem setPrice={setPrice} price={price} />
                    <div className="parent-total-div">
                        <div className="total-div">
                            <div className="subtotal-div">
                                <h3>Subtotal:</h3>
                                <span>{`${currencySymbol}${price}`}</span>
                            </div>
                            <div className="subtotal-div">
                                <h3>Discount:</h3>
                                <p>
                                    {`(${discount}%)`}
                                    <span>
                                        {currencySymbol}
                                        {discountAmount}
                                    </span>
                                </p>
                            </div>
                            <div className="subtotal-div">
                                <h3>Tax:</h3>
                                <p>
                                    {`(${tax}%)`}
                                    <span>
                                        {currencySymbol}
                                        {taxAmount}
                                    </span>
                                </p>
                            </div>
                            <hr />
                            <div className="total-amount-div">
                                <h2>Total:</h2>
                                <p>{`${currencySymbol}${finalPrice.toFixed(
                                    2
                                )}`}</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="notes-div">
                        <h3>Notes:</h3>
                        <textarea
                            rows="2"
                            placeholder="Thanks for your business!"
                        ></textarea>
                    </div>
                </form>
                <div className="main-right">
                    <button type="submit" form="invoice-form">
                        Review Invoice
                    </button>
                    <hr />
                    <h3>Currency:</h3>
                    <select value={selectedCurrency} onChange={handleChange}>
                        <option value="usd">USD(United States Dollar)</option>
                        <option value="gbp">GBP(British Pound Sterling)</option>
                        <option value="jpy">JPY(Japanese Yen)</option>
                        <option value="cad">CAD(Canadian Dollar)</option>
                        <option value="aud">AUD(Australian Dollar)</option>
                    </select>
                    <h3>Tax Rate:</h3>
                    <div className="rate-input-div">
                        <input
                            step="0.1"
                            type="number"
                            placeholder="0.0"
                            value={tax}
                            onChange={handleTax}
                        />
                        <span className="material-symbols-outlined">
                            percent
                        </span>
                    </div>
                    <h3>Discount Rate:</h3>
                    <div className="rate-input-div">
                        <input
                            step="0.1"
                            type="number"
                            placeholder="0.0"
                            value={discount}
                            onChange={handleDiscount}
                        />
                        <span className="material-symbols-outlined">
                            percent
                        </span>
                    </div>
                </div>
            </div>
            {showInvoice && (
                <div className="show-invoice-modal">
                    <ShowInvoice
                        invoiceDetails={invoiceDetails}
                        setShowInvoice={setShowInvoice}
                        currencySymbol={currencySymbol}
                        finalPrice={finalPrice}
                        price={price} discount={discount}
                        discountAmount={discountAmount}
                        tax={tax} taxAmount={taxAmount}
                    />
                </div>
            )}
        </>
    );
}

export default InvoiceForm;
