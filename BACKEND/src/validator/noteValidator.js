const noteValidator = (data) => {
    const {title, description} = data;

    if(title){
        if(title.length >   100){
            throw new Error("Title loo long!");
        }
    }
    
    if(description){
        if(description.length > 2000){
            throw new Error("Description too long!");
        }
    }
    
};

module.exports = noteValidator;