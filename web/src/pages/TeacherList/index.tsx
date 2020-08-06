import React from 'react';
import PageHeader from '../../components/Page-Header';

import TeacherItem from '../../components/TeacherItem';
import './styles.css';
import Input from '../../components/Input';
import Select from '../../components/Select';



function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                <form id="search-teachers">
                    
                <Select 
                name="subject" 
                label="Matéria"
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
                <Select 
                name="week_day" 
                label="Dia da semana"
                options={[
                    {value: '0', label:'Segunda-feira'},
                    {value: '1', label:'Terça-feira'},
                    {value: '2', label:'Quarta-feira'},
                    {value: '3', label:'Quinta-feira'},
                    {value: '4', label:'Sexta-feira'},
                    {value: '5', label:'Sábado'},
                    {value: '6 ', label:'Domingo'},



                ]}
                />
                    <Input type="time"  name="time" label="Hora"/>

                    
                </form>
            </PageHeader>
            <main>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>

            </main>
        </div>
       
    )
}

export default TeacherList;