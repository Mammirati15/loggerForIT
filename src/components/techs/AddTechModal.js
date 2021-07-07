import React, {useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

const AddTechModal = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    

    const onSubmit = () => {
        if (firstName === '' || lastName === ''){
            M.toast({html: 'Please enter a first and a last name', classes: 'rounded'})
        } else {
            console.log(firstName, lastName)
            setFirstName('')
            setLastName('')
           
        }       
    }

    return (
        <div id='add-tech-modal' className="modal">
            <div className="modal-content">
                <h4>Enter New Technician</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} />
                        <label htmlFor="firstName" className="active">
                            First Name
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="lastName" value={lastName} onChange={e => setLastName(e.target.value)} />
                        <label htmlFor="lastName" className="active">
                            Last Name
                        </label>
                    </div>
                </div>
            </div>    
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="waves-effect waves-light btn green"><i className="material-icons left">cloud</i>Enter</a> 
            </div>
        </div>
    )
}


export default AddTechModal

