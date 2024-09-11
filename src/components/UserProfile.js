import { useEffect } from "react";
import {useDispatch,useSelector} from "react-redux";
import { fetchUserList, getUserListSuccess } from "../reduxStore/slices/getUserSlice";


function UserProfile(){
    const dispatch = useDispatch();
    const {userListData,isLoading} = useSelector(s=>s.userList);

    useEffect(()=>{
        dispatch(fetchUserList());
        // unmounting
        return()=>{
            dispatch(getUserListSuccess([]))
        }
    },[dispatch])

    return(
        <>
            {
                isLoading ? <span>Loading....Please Wait...</span> :
                userListData.length > 0 ?
                userListData?.map((data)=>{
                    const {name,email,username} = data;
                    return(
                      
                        <div key={email}>
                            {`Hi ${name}, Your Username is ${username} & Email-Id is ${email}`}
                        </div>
                    )
                })
                : <span>No user found!</span>
            }
        </>
    )
}
export default UserProfile;