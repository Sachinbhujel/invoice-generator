import "./App.css";
import { useState } from "react";

function InvoiceForm() {
    const [selectedCurrency, setSelectedCurrency] = useState("");

    const handleChange = (e) => {
        setSelectedCurrency(e.target.value);
      };
    

    return (
        <>
            <div className="main">
                <div className="main-left"></div>
                <div className="main-right">
                    <button>Review Invoice</button>
                    <label>Currency:</label>
                    <select value={selectedCurrency} onChange={handleChange}>
                        <option value="usd">USD(United States Dollar)</option>
                        <option value="gbp">GBP(British Pound Sterling)</option>
                        <option value="jpy">JPY(Japanese Yen)</option>
                        <option value="cad">CAD(Canadian Dollar)</option>
                    </select>
                </div>
            </div>
        </>
    );
}

export default InvoiceForm;
