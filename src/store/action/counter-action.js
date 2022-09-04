export const upAction = ()=>{
    return{type:"UP"};
};
export const downAction = ()=>{
    return{type:"DOWN"};
};
export const multiAction = ()=>{
    return{type:"MULTI"};
};
export const restartAction = (num)=>{
    return{type:"RESTART",payload:num};
};
export const upDateAction = (data)=>{
    return{type:"UPDATE",payload:data};
};