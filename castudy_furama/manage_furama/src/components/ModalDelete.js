import { useState } from "react";
import { Button,Modal } from "react-bootstrap";
function DeleteModal(props){
  const {service,delete: deleteService,icon}=props;
    const[show,setShow]=useState(false)
    const [id,setID]=useState(null)
    const handleClose = () => setShow(false);
   const showModal = ()=>{
    setID(service.id)
        setShow(true);
    }
    return(
        <>
        <a
        onClick={
          showModal} className={icon.name} >
       
       <i style={{ fontStyle: "normal", color: icon.color }}>{icon.show}</i>
      </a>

      <Modal show={show} onHide={handleClose} id={id}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>
              <form>
                <div className="modal-body">
                  <p>Are you sure you want to delete these {service.name}</p>
                  <p className="text-warning">
                    <small style={{color:"red"}}>This action cannot be undone.</small>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>deleteService(service.id)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}
export default DeleteModal;