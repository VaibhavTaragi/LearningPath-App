import { createSlice } from "@reduxjs/toolkit";

const contentSlice = createSlice({
    name: 'content',
    initialState: {
        courseContent:[],
        subTopics:[]
    },
    reducers:{
        setContent:(state,action)=>{
            state.courseContent =  action.payload;
        },
        updateContent:(state,action)=>{
            const updatedItems = state.courseContent.map((item)=>{
                //to check which topic is updated
                if(item.id === action.payload[0].id){
                    return action.payload[0];
                }else{
                    return item;
                } 
            });
            state.courseContent = updatedItems;
        },
        setSubTopics:(state,action)=>{
            state.subTopics=[];
            const completeArray = action.payload;
            const subtopics = completeArray.map(item=>{
                return item.subtopics;
            });
            const flattenedArray = subtopics.flat();
            state.subTopics = flattenedArray;
        },
        updateSubTopics:(state,action)=>{
            const updatedItems = state.subTopics.map((item)=>{
                if(item.id===action.payload.id){
                    return action.payload;
                }else{
                    return item;
                }
            });
            state.subTopics= updatedItems;
        } 
    }
});

export const {setContent, updateContent, setSubTopics, updateSubTopics} = contentSlice.actions;
export default contentSlice.reducer;