import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ComportamentoForm = ({ data, title, handleClose, onSubmit }) => {
  useEffect(() => {
    console.log("comportamento form")
    
    console.log(data);
  }, [data]);

  const [value, setValue] = useState(data.nome || '')

  const handleInputChange = (e) => {
    console.log("***** handleInputChange", e.target.value)
    setValue(e.target.value)
  }

  const handleData = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target)
    const finalData = Object.fromEntries(formData)

    if (data.id){
      finalData.id = data.id
    } 

    console.log("*** handle submit", finalData)
    onSubmit(finalData) //function that send the data
  };

  return (
    <>
      <form onSubmit={handleData}>
        <label className="form-label fs-5">{title}</label>
        <input
          className="form-control"
          type="text"
          name={'nome'}
          placeholder={`Inserir ${title} aqui`}
          onChange={handleInputChange}
          value={value}
        />
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Cancelar
            </Button>
            <Button variant="primary" type="submit">
            Salvar
            </Button>

        </Modal.Footer>
      </form>
    </>
  );
};

export default ComportamentoForm;
