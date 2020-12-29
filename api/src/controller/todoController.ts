const get = async(context: any) => {
    console.log ('Getting a track');
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

export {get};