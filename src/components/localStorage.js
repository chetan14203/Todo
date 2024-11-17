const todoKey = "ReactTodo";

export const getStorage = () => {
    const rawdata = localStorage.getItem(todoKey);
    if(!rawdata) return [];
    try{
        return JSON.parse(rawdata);
    }catch(error){
        console.log(error);
        return [];
    }
}

export const setStorage = (task) => {
    return localStorage.setItem(todoKey,JSON.stringify(task));
}