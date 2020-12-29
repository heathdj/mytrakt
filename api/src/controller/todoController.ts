import MongoDatabase from '../helper/mongodb.ts';

const db = await MongoDatabase.getInstance()
const mongoDb = db.getDatabase.collection('todo');

const get = async(context: any) => {
    console.log ('Getting a todo');
    try {
        const todo = {
           title: "My Todo",
           description: "TodoDescription",
           created_at: new Date()
        };
        const response = {
            success: true,
            todo
        };
        context.response.body = JSON.stringify(response);
    } 
    catch (error) {
        const response = {
            success: false,
            error
        };
        context.response.status = 500;
        context.response.body = JSON.stringify(response);
    }
}

const post = async (context: any) => {
    console.log('Adding a todo!');
    const body = context.request.body
    const data = await body.value;
    console.log(data);
    mongoDb.insertOne(data);
}

export {get};