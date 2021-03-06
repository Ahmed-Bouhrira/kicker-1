import React,{useState} from 'react'
import LeftNav from '../LeftNav'
import {useDispatch,useSelector} from 'react-redux'
import { updateBio } from "../../actions/user.actions";
import UploadImg from "./UploadImg"
import moment from "moment"
const UpdateProfil=()=> {
  const [bio,setBio]=useState('');
  const [updateForm,setUpdateForm]=useState(false);
  const userData=useSelector((state)=>state.userReducer);

  const dispatch = useDispatch();
  
  const handleUpdate=()=>{
    dispatch(updateBio(userData._id,bio))
    setUpdateForm(false)
  }
  return (
    <div >
      {/* <LeftNav /> */}
      <h1>Profil of {userData.username}</h1>
      <div style={{display:'flex',justifyContent: 'center', border: '1px solid black'}}> 
        <div style={{margin:'20px'}}>
          <h3>Profile picture</h3>
          <img src={userData.picture}  style={{maxHeight:'300px',width:'300px',borderStyle:'solid' , borderRadius:'70px', borderColor:'white'}}/>
          <UploadImg />

      </div>
      <div style={{padding:'20px' ,margin:'20px' , border: '1px solid black',width:'400px'}}>
        <div style={{margin:'20px'}}> 
          <h3>bio</h3>
          {updateForm=== false && (
           <>
           <p onClick={()=>setUpdateForm(!updateForm)}>{userData.bio}</p>
           <button onClick={()=>setUpdateForm(!updateForm)}>edit bio</button>
           </>
          )}
          {updateForm && (
            <>
            <textarea type="text" defaultValue={userData.bio} onChange={(e)=>setBio(e.target.value)} ></textarea>
            <button onClick={handleUpdate} >validate edit </button>
            </>
          )}
        </div>
        <h4>member since : {moment(userData.createdAt).fromNow()}</h4>
         </div>
    </div>
    </div>
  )
}
export default UpdateProfil