import React from "react";
import "./ModalWindow.scss";
import { CloseOutlined } from "@ant-design/icons";
import CustomButton from "../../uiComponents/Button/CustomButton";

interface ErrorWarningInterface {
  setActive: (check: boolean) => void;
  active: boolean;
  //children: React.ReactNode;
  commandName?: string;
}

const ErrorWarning: React.FC<ErrorWarningInterface> = ({
  active,
  setActive,
  commandName,
}) => {
  if (active) {
    return (
      <div
        className={active ? "modal active" : "modal"}
        // закрытие окна при нажатии вне его
        //onClick={() => setActive(false)}
      >
        <div
          className="modal__content errorWindow"
          onClick={(e) => e.stopPropagation()}
        >
          <a className="icnClose" onClick={() => setActive(false)}>
            <CloseOutlined className="icnClose" />
          </a>
          <div
            style={{
              height: "20px",
              width: "100%",
              color: "rgb(204, 109, 130)",

              marginBottom: "12px",
              textAlign: "center",
            }}
            className="TitleH3"
          >
            Внимение
          </div>
          <div style={{ color: "rgba(0, 0, 0, 0.7)" }} className="TitleH2">
            Произошла ошибка {commandName !== undefined && `при ${commandName}`}
          </div>
          <CustomButton
            className="primary TextStyle"
            style={{ width: "40%", marginTop: "16px" }}
            onClick={() => setActive(false)}
          >
            Закрыть
          </CustomButton>
        </div>
      </div>
    );
  } else {
    return <div className={active ? "modal active" : "modal"}></div>;
  }
};

export default ErrorWarning;
