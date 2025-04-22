import React from "react";

function ShowInvoice({
    invoiceDetails,
    setShowInvoice,
    currencySymbol,
    finalPrice,
    price,
    discount,
    discountAmount,
    tax,
    taxAmount,
}) {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];

    function handleBackBtn() {
        setShowInvoice(false);
    }

    const handleSend = () => {
        window.print();
    }

    const handleSaveToCloud = () => {
        alert("Invoice has been saved to the cloud (simulated)!");
        // You can replace this alert with your actual upload logic.
    };
    

    return (
        <>
            <div className="main-invoice-div">
                <div className="close-btn">
                    <span
                        class="material-symbols-outlined"
                        onClick={handleBackBtn}
                    >
                        close
                    </span>
                </div>
                <div className="invoice-top-div">
                    <div className="invoice-user-name">
                        <h1>{invoiceDetails.billFrom.name}</h1>
                        <h3>Invoice #: {invoiceDetails.invoiceNumber}</h3>
                    </div>
                    <div className="invoice-amount-due">
                        <h2>Amount Due:</h2>
                        <span>
                            {currencySymbol}
                            {invoiceDetails.finalPrice}
                        </span>
                    </div>
                </div>
                <hr />
                <div className="billing-div">
                    <div className="billing-to-div">
                        <h3>Billed To:</h3>
                        <p>Sachin</p>
                        <p>fw n n nn</p>
                        <p>Sacin@gmail.com</p>
                    </div>
                    <div className="billing-from-div">
                        <h3>Billed From:</h3>
                        <p>Sachin</p>
                        <p>fw n n nn</p>
                        <p>Sacin@gmail.com</p>
                    </div>
                    <div className="billing-date">
                        <h3>Date Of Issue:</h3>
                        <p>{formattedDate}</p>
                    </div>
                </div>
                <div className="item-row">
                    <div class="itemQuantity"></div>
                    <div class="itemDescription"></div>
                    <div class="itemPrice"></div>
                    <div class="itemAmount"></div>
                </div>
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
                        <hr className="ShowInvoice-hr" />
                        <div className="total-amount-div">
                            <h2>Total:</h2>
                            <p>{`${currencySymbol}${finalPrice.toFixed(2)}`}</p>
                        </div>
                    </div>
                </div>
                <div className="buttons-div">
                    <div className="send-invoice" onClick={handleSend}>
                        <span class="material-symbols-outlined">ios_share</span>
                        <p>Send</p>
                    </div>
                    <div className="save-invoice" onClick={handleSaveToCloud}>
                        <span className="material-symbols-outlined">cloud_upload</span>
                        <p>Save to Cloud</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShowInvoice;
