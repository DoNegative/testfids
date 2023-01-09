import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import CustomButton from "../../components/uiComponents/Button/CustomButton";
interface DeleteWarningInterface {
  setActive: (check: boolean) => void;
  active: boolean;
  name: string;
  guid:string;
  headerName: string;
  deleteFunc:(guid:string) => void;
}
const DeleteWarning: React.FC<DeleteWarningInterface> = ({
  name,
  headerName,
  active,
  setActive,
  deleteFunc,
  guid,
}) => {
  return (
    <div>
      <div
        style={{
          height: "20px",
          width: "100%",
          color: "rgb(204, 109, 130)",

          marginBottom: "12px",
          textAlign: "center",
        }}
        className="TitleH2"
      >
        Удаление {headerName}
      </div>
      <div style={{ color: "rgba(0, 0, 0, 0.7)" }} className="TitleH3">
        Вы уверены, что хотите удалить {name} ?
      </div>
      <div style={{ display: "flex", gap: "12px", justifyContent:"center", marginTop:"12px" }}>
        <CustomButton className="primary TextStyle" style={{ width:"30%",}} onClick={()=> deleteFunc(guid)}>Удалить</CustomButton>
        <CustomButton className="primary TextStyle"  style={{ width:"30%",}} onClick={()=> setActive(false)}>Отмена</CustomButton>
      </div>
    </div>
  );
};

export default DeleteWarning;
