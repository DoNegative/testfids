import React, { useState, useEffect } from "react";
import "./table.css";

interface tr {
  product: string;
  lastYearSale: number;
  thisYearSale: number;
  lastYearProfit: number;
  thisYearProfit: number;
}
interface TrTableInteface {
  tr: tr;
}

const TrTable: React.FC<TrTableInteface> = ({ tr }) => {
  const [product, setProduct] = useState("");
  const [lastYearSale, setLastYearSale] = useState<number>();
  const [thisYearSale, setThisYearSale] = useState<number>();
  const [lastYearProfit, setLastYearProfit] = useState<number>();
  const [thisYearProfit, setThisYearProfit] = useState<number>();
  //   const [clickproduct, setClickProduct] = useState(false);
  //   const [clicklastYearSale, setClickLastYearSale] = useState(false);
  //   const [clickthisYearSale, setClickThisYearSale] = useState(false);
  //   const [clicklastYearProfit, setClickLastYearProfit] = useState(false);
  //   const [clickthisYearProfit, setClickThisYearProfit] = useState(false);

  useEffect(() => {
    setProduct(tr.product);
    setLastYearSale(tr.lastYearSale);
    setThisYearSale(tr.thisYearSale);
    setLastYearProfit(tr.lastYearProfit);
    setThisYearProfit(tr.thisYearProfit);
  }, []);
  function ClickFocus(name: string) {}
  return (
    <tr>
      <td >
        <input
          className="inputStyle"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        ></input>
      </td>
      <td>
  
          {" "}
          <input
            type="number"
            className="inputStyle"
            value={lastYearSale}
            onChange={(e) => setLastYearSale(Number(e.target.value))}
          ></input>
     
      </td>
      <td>
     
          {" "}
          <input
            type="number"
            className="inputStyle"
            value={thisYearSale}
            onChange={(e) => setThisYearSale(Number(e.target.value))}
          ></input>
      
      </td>
      <td>
      
          {" "}
          <input
            type="number"
            className="inputStyle"
            value={lastYearProfit}
            onChange={(e) => setLastYearProfit(Number(e.target.value))}
          ></input>
    
      </td>
      <td>
     
          {" "}
          <input
            type="number"
            className="inputStyle"
            value={thisYearProfit}
            onChange={(e) => setThisYearProfit(Number(e.target.value))}
          ></input>
   
      </td>
    </tr>
  );
};

export default TrTable;
