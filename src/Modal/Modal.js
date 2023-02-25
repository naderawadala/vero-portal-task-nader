import React, { useState, ChangeEvent } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBCard,
  MDBCardImage
} from 'mdb-react-ui-kit';

const Modal = () => {
  const [staticModal, setStaticModal] = useState(false)
  const [image, setImage] = useState(null)
  console.log(image)

  const toggleShow = () => setStaticModal(!staticModal)
  function onImageChange(e) {
    setImage(e.target.files[0])
  }

  return (
    <>
      <MDBBtn onClick={toggleShow}>Open Modal</MDBBtn>

      <MDBModal staticBackdrop tabIndex='-1' show={staticModal} setShow={setStaticModal}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              {image &&
                <MDBCard>
                  <MDBCardImage src={URL.createObjectURL(image)} position='top' alt='' />
                </MDBCard>
              }
              <input type="file" accept="image/*" onChange={onImageChange}/>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  )
}

export default Modal
