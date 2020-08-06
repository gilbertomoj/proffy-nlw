import React from 'react';
import PageHeader from '../../components/Page-Header';
import './styles.css';
import Input from '../../components/Input';

function TeacherForm(){
    return(
        <div id="page-teacher-form" className="container">
            <PageHeader title="Que incrivel que você quer dar aulas"
            description="O primeiro passe é preencher esse formulário de inscrição"
            />
        
        <main>
            <fieldset>
                <legend>
                    Seus dados
                </legend>

                <Input name="name" label="Nome completo" />
                <Input name="avatar" label="Avatar" />
                <Input name="whatsapp" label="Whatsapp" />


              
                <div className="input-block">
                    <label htmlFor="whatsapp">Whatsapp</label>
                    <input type="text" id="whatsapp"/>
                </div>

            </fieldset>
        </main>

        </div>
    )
}

export default TeacherForm;