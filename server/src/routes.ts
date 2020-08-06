import express, { response } from 'express';
import db from './database/connection';
import convertHourToMinutes from './database/utils/convertHourToMinutes';

const routes = express.Router();

interface ScheduleItem{
    week_day : number,
    from: string,
    to : string
}

routes.get("/users", (request , response)=>{
    response.json({'Roberto' :"13212312s3"})
})

routes.post('/classes',async (request , response)=>{
   const {
       name,
       avatar,
       whatsapp,
       bio,
       subject,
       cost,
       schedule
   } = request.body;

   const trx = await db.transaction();
   try {
      
   const insertedUsersId = await trx('users').insert({
    name,
    avatar,
    whatsapp,
    bio,
});

const user_id = insertedUsersId[0];

const insertedClassesIds = await trx('classes').insert({
    subject,
    cost,
    user_id
})

const class_id = insertedClassesIds[0];

const classSchedule = schedule.map((scheduleItem: ScheduleItem )=>{
    return{
        class_id,
         week_day: scheduleItem.week_day,
         from : convertHourToMinutes(scheduleItem.from),
         to: convertHourToMinutes(scheduleItem.to)
    };
});

await trx('class_schedule').insert(classSchedule);

await trx.commit();
return response.status(201).send();   
   } catch (err) {
       await trx.rollback();

       return response.status(400).json({error : 'Um erro inesperado aconteceu'})
   }

})

export default routes;