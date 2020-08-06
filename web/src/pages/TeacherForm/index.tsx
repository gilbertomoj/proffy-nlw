import React from 'react';
import PageHeader from '../../components/Page-Header';
import './styles.css';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';

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

            </fieldset>

            <fieldset>
                <legend>
                    Sobre aulas
                </legend>

                <Input name="subject" label="Matéria"/>
                <Input name="cost" label="Custo da sua hora por aula"/>
            </fieldset>

            <footer>
                <p>
                    <img src={warningIcon} alt="Aviso importante"/>
                    Importante! <br/>
                    Preencha todos os dados
                </p>
                <button type='button'>
                    Salvar cadastro
                </button>
            </footer>
        </main>

        </div>
    )
}

export default TeacherForm;