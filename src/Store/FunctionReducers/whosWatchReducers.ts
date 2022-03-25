// const Card = [{id:0, title:'card1', description:"description1",pos:1 },{id:1, title:'card1', description:"description1",pos:1 }]
const Profile = [{id:0, nomProf: "GnK-Majestik", imgProf:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfxpeAeZpaQE9R5IW2_6chgNY4cUHra4QlsQ&usqp=CAU'},{id:1, nomProf: "Ero des rasa", imgProf:'https://m.media-amazon.com/images/M/MV5BNzE2ODNlNDEtNWYxZS00OWY5LTgzMzAtYzcwZmEyOGUzMTliXkEyXkFqcGdeQVRoaXJkUGFydHlJbmdlc3Rpb25Xb3JrZmxvdw@@._V1_.jpg'}];

export const Add_watch_action = "Add_watch_action";
export const Delete_profile_action = "Delete_profile_action";
export const Edit_profile_action = "Edit_profile_action";

interface Profile{
    id: number,
    nomProf: string,
    imgProf: string,
}



export function whosWatchReducer(state:Array<Profile> = Profile, action:any){

    switch(action.type){

        case Add_watch_action:
            return [...state,{...action.payload, id:(state.length-1)+1,} ]

        case Delete_profile_action:   
            let newArrayD = state.slice();
            newArrayD = newArrayD.filter((element:Profile) => element.id !== action.payload);
            return newArrayD

        case Edit_profile_action:
            let objIndex = state.findIndex((obj:Profile) => obj.id == action.payload.id);
            let newArrayU = state.slice();
            
            newArrayU[objIndex].nomProf =  action.payload.nomProf;
            newArrayU[objIndex].imgProf =  action.payload.imgProf;
            return newArrayU

        default: 
            return state

        } 
}
