import React, {useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

const EditLogModal = () => {
    const [message, setMessage] = useState('')
    const [attention, setAttention] = useState(false)
    const [tech, setTech] = useState('')

    const onSubmit = () => {
        if (message === '' || tech === ''){
            M.toast({html: 'Please enter a message and a tech', classes: 'rounded'})
        } else {
            console.log(message, tech, attention)
            setMessage('')
            setTech('')
            setAttention(false)
        } 

    }

    return (
        <div id='edit-log-modal' className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="message" value={message} onChange={e => setMessage(e.target.value)} />
                        <label htmlFor="message" className="active">
                            Log Message
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select name="tech" value={tech} className="browser-default" onChange={e => setTech(e.target.value)}>
                            <option value='' disabled>
                                Select Technicion
                            </option>
                            <option value="John Jovie">John Jovie</option>
                            <option value="Steve Buschemi">Steve Buschemi</option>
                            <option value="Tom Hanks">Tom Hanks</option>
                            <option value="Herman Muenster">Herman Muenster</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input type="checkbox" className="filled-in" checked={attention} value={attention} onChange={e => setAttention(!attention)} />
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="waves-effect waves-light btn green"><i className="material-icons left">cloud</i>Enter</a> 
            </div>
        </div>
    )
}

const modalStyle = {
    width: '75%',
    height: '75%'
}

export default EditLogModal

