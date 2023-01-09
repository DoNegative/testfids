import React, { useEffect, useState } from "react";
import CustomInput from "../../uiComponents/CustomInput/CustomInput";
import "./AdaptiveModalWindow.css";

interface AdaptiveWindowProps {}

interface adaptiveData {
  name: string;
  value: string;
  type: string;
  units?: string;
}

const data: adaptiveData[] = [
  {
    name: "Название",
    value: "ТФ1",
    type: "input",
  },
  {
    name: "Дата проверки",
    value: "2000-11-02",
    type: "date",
  },
  {
    name: "Состояние",
    value: "Работает",
    type: "select",
  },
  {
    name: "Наличие датчика температуры обмотки ",
    value: "yes",
    type: "buttons3",
  },
  {
    name: "Pxx",
    value: "2.952",
    type: "numericData",
    units: "кВт",
  },
];

const AdaptiveModalWindow: React.FC<AdaptiveWindowProps> = () => {
  const [windowData, setWindowData] = useState<adaptiveData[]>(data);

  function onChange(index: number, value: string) {
    let tempData: adaptiveData[] = [];
    for (let i = 0; i < windowData.length; i++) {
      if (i === index) {
        tempData.push({
          name: windowData[i].name,
          value: value,
          type: windowData[i].type,
          units: windowData[i].units,
        });
      } else tempData.push(windowData[i]);
    }
    setWindowData(tempData);
  }

  function on3ButtonChange(id: string, clickedID: string) {
    let btns = document.getElementById(id);
    console.log(btns);

    let btnY = document.getElementById(`${id}yes`);
    let btnN = document.getElementById(`${id}no`);
    let btnU = document.getElementById(`${id}undefined`);
    console.log(btnY, btnN, btnU);

    switch (clickedID) {
      case "yes":
        btnN?.classList.remove("active");
        btnU?.classList.remove("active");
        btnY?.classList.add("active");
        break;

      case "no":
        btnY?.classList.remove("active");
        btnU?.classList.remove("active");
        btnN?.classList.add("active");
        break;

      case "undefined":
        btnN?.classList.remove("active");
        btnY?.classList.remove("active");
        btnU?.classList.add("active");
        break;

        default: 
        btnN?.classList.remove("active");
        btnU?.classList.remove("active");
        btnY?.classList.remove("active");
        break;
    }
  }

  useEffect(()=>{
    for(let i=0; i<windowData.length; i++){
        if (windowData[i].type==="buttons3")
        {
            on3ButtonChange(windowData[i].name, windowData[i].value)
        }
        
    }
  },[])

  return (
    <div className="App" style={{ width: "1000px" }}>
      <p>Редактирование</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {windowData.map((line, index) => {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <span style={{ width: "29%" }}>{line.name}</span>
              <div style={{ width: "69%" }}>
                {line.type === "input" && (
                  <CustomInput
                    onChange={(e) => {
                      onChange(index, e);
                    }}
                    value={line.value}
                    style={{ width: "-webkit-fill-available" }}
                  ></CustomInput>
                )}
                {line.type === "date" && (
                  <input
                    type="date"
                    value={line.value}
                    onChange={(e) => onChange(index, e.target.value)}
                  ></input>
                )}
                {line.type === "select" && (
                  <select
                    value={line.value}
                    onChange={(e) => onChange(index, e.target.value)}
                  >
                    <option value="Работает">Работает</option>
                    <option value="Поломан">Поломан</option>
                    <option value="Строится">Строится</option>
                    <option value="На ремонте">На ремонте</option>
                  </select>
                )}
                {line.type === "buttons3" && (
                  <div className="buttons3" id={line.name}>
                    <div
                      id={`${line.name}yes`}
                      className="yes active"
                      onClick={() => on3ButtonChange(line.name, "yes")}
                    >
                      Да
                    </div>
                    <div
                      id={`${line.name}no`}
                      className="no active"
                      onClick={() => on3ButtonChange(line.name, "no")}
                    >
                      Нет
                    </div>
                    <div
                      id={`${line.name}undefined`}
                      className="undefined active"
                      onClick={() => on3ButtonChange(line.name, "undefined")}
                    >
                      Не выбранно
                    </div>
                  </div>
                )}
                {line.type === "numericData" && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "8px",
                    }}
                  >
                    <CustomInput
                      onChange={(e) => {
                        onChange(index, e);
                      }}
                      value={line.value}
                      style={{ width: "200px" }}
                    ></CustomInput>
                    {line.units}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdaptiveModalWindow;
