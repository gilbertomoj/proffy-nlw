import React, {useState, FormEvent} from 'react';
import PageHeader from '../../components/Page-Header';
import './styles.css';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';


function TeacherForm(){

    const [name , setName] = useState('');
    const [avatar , setAvatar] = useState('');
    const [whatsapp , setWhatsapp] = useState('');
    const [bio , setBio] = useState('');

    const [subject , setSubject] = useState('');
    const [cost , setCost] = useState('');



    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from : '', to:'' }

    ]);
    function addNewScheduleItem(){
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from : '', to:'' }
        ]);
    }


    function handleCreateClass(e: FormEvent){

        e.preventDefault();

        console.log({
            name, avatar, whatsapp, subject , cost 
        })
    }

    function setScheduleItemValue(position: number, field: string , value: string){
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index)=>{
            if(index === position){
                return {...scheduleItem, [field]: value};
            }

            return scheduleItem;    
         });
         setScheduleItems(updatedScheduleItems);
        }

    return(
        <div id="page-teacher-form" className="container">
            <PageHeader title="Que incrivel que você quer dar aulas"
            description="O primeiro passe é preencher esse formulário de inscrição"
            />
        
        <main>
            <form onSubmit={handleCreateClass}>
            <fieldset>
                <legend>
                    Seus dados
                </legend>

                <Input name="name" label="Nome completo" value={name} onChange={(e)=>{
                    setName(e.target.value)
                }}/>
                <Input name="avatar" label="Avatar" 
                 value={avatar} onChange={(e)=>{
                    setAvatar(e.target.value)
                }}/>
                <Input name="whatsapp" label="Whatsapp" value={whatsapp} onChange={(e)=>{
                    setWhatsapp(e.target.value)
                }}/>
                <Textarea name="bio" label="Biografia" value={bio} onChange={(e)=>{
                    setBio(e.target.value)
                }}/>
            </fieldset>

            <fieldset>
                <legend>
                    Sobre aulas
                </legend>
                <Select 
                name="subject" 
                label="Matéria"
                value={subject}
                onChange={(e)=>{setSubject(e.target.value)}}

                options={[
                    {value: 'Artes', label:'Artes'},
                    {value: 'Biologia', label:'Biologia'},
                    {value: 'Ciências', label:'Ciências'},
                    {value: 'Educação Fisica', label:'Educação Fisica'},
                    {value: 'Matemática', label:'Matemática'},
                    {value: 'Geografia', label:'Geografia'},
                    {value: 'História ', label:'Artes'},
                    {value: 'Portugues', label:'Portugues'},
                    {value: 'Quimica', label:'Quimica'},


                ]}
                />
                <Input name="cost" value={cost} onChange={(e)=>{setCost(e.target.value)}} label="Custo da sua hora por aula"/>
            </fieldset>
        
            <fieldset>
                <legend>
                    Horários disponiveis
                    <button onClick={addNewScheduleItem} type="button">
                    + Novo horário
                </button>
                </legend>
                
            {
                scheduleItems.map((scheduleItem, index) =>{
                    return (
                        <div key={scheduleItem.week_day} className="schedule-item">
                        <Select 
                        name="week_day" 
                        label="Dia da semana"
                        onChange={e=>setScheduleItemValue(index, 'week_day', e.target.value)}
                        options={[
                            {value: '0 ', label:'Domingo'},
                            {value: '1', label:'Segunda-feira'},
                            {value: '2', label:'Terça-feira'},
                            {value: '3', label:'Quarta-feira'},
                            {value: '4', label:'Quinta-feira'},
                            {value: '5', label:'Sexta-feira'},
                            {value: '6', label:'Sábado'},
    
                        ]}
                        />
    
                        <Input name="from"  label="Das" type="time"></Input>
                        <Input name="to"  label="Até" type="time"></Input>
    
                    </div>
    

                    );
                })
            }
            </fieldset>
                
            <footer>
                <p>
                    <img src={warningIcon} alt="Aviso importante"/>
                    Importante! <br/>
                    Preencha todos os dados
                </p>
                <button type='submit'>
                    Salvar cadastro
                </button>
            </footer>
            </form>
        </main>

        </div>
    )
}

export default TeacherForm;