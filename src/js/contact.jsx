import React from 'react';
import ReactDOM from 'react-dom';





export default class Contact extends React.Component {
    render() {
        return<section className='contact'>
            <div className="container container-form">
                <div className="form-title">
                    <span>SKONTAKUJ SIĘ Z NAMI</span>
                </div>

                <div className="contact-details">
                    <div className="contact-details-name">
                        <span>Przedsiębiorstwo Wielobranżowe ORTIK</span>
                        <span> E-mail : ortik@ortik.pl</span>
                        <span> Tel :+48603663300</span>
                    </div>
                </div>
                <div className="contact-form">
                    <form className="form-style-9">
                        <ul>
                            <li>
                                <input type="text" name="field1" className="field-style field-split align-left" placeholder="Imię" required />
                                <input type="text" name="field2" className="field-style field-split align-right" placeholder="Nazwisko" required/>

                            </li>
                            <li>
                                <input type="email" name="field3" className="field-style field-split align-left" placeholder="Email" required/>
                                <input type="text" name="field4" className="field-style field-split align-right" placeholder="Telefon" required/>
                            </li>
                            <li>
                                <input type="text" name="field3" className="field-style field-full align-none" placeholder="Temat" required/>
                            </li>
                            <li>
                                <textarea name="field5" className="field-style" placeholder="Wiadomość" required></textarea>
                            </li>
                            <li>
                                <input type="submit" value="Wyślij" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>

        </section>

    }
}