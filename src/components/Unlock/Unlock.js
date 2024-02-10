import React from 'react'
import cele from '../../assets/celeb.png'
import './Unlock.css';
const unlock = ({ onUnlock }) => {

  
  

    const handleSubmit = (event) => {
        event.preventDefault();
        onUnlock(); 
    };

    return (
        <>
            <section className='unlock'>
                <div className='unlock-left'>
                    <div className='unlock-title'>
                        <h2>Unlock Exclusive Benefits</h2>
                    </div>
                    <div className="unlock-form">
                        <form className="form-style-9" onSubmit={handleSubmit}>
                            <ul>
                                <li>
                                    <label>PHONE NUMBER</label>
                                    <div className="input-container">

                                        <input
                                            type="text"
                                            name="phoneNumber"
                                            className="field-style field-split align-left"
                                            placeholder="+91 India"
                                           
                                        />
                                        <input
                                            type="text"
                                            name="phoneNumber"
                                            className="field-style field-split align-right"
                                            placeholder="9645789210"
                                           
                                        />
                                    </div>

                                </li>
                                <li>
                                    <label>NAME</label>

                                    <input
                                        type="text"
                                        name="name"
                                        className="field-style field-full align-left"
                                       
                                    />
                                </li>
                                <li>
                                    <label>EMAIL [OPTIONAL]</label>

                                    <input
                                        type="text"
                                        name="email"
                                        className="field-style field-full align-left"
                                        
                                    />



                                </li>

                                <li>
                                <input type="submit" value="CONTINUE" />
                                </li>
                                <li>
                                    <h6>Get ready to receive a secret code [OTP] on your phone.</h6>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>

                <div className='unlock-right'>
                    <img src={cele} alt='' className='unlock-image' />
                </div>
            </section>

        </>
    )
}

export default unlock