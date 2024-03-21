import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {UploadButtonDiv, UploadDiv, UploadForm} from "../../Style/UploadCSS";
import ImageUpload from "./ImageUpload";
import axios from "axios";
function Upload(){
    const [Title,setTitle] = useState("");
    const [Content, setContent] = useState("");
    const [Image, setImage] = useState([]);
    let navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();
        if(Title === "" || Content === ""){
            return alert("모든 항목을 채워주세요");
        }
        let body ={
            title:Title,
            content:Content,
            image : Image,
        }
        axios.post("/api/post/submit", body).then((res) => {
            if(res.data.success){
                alert("글 작성이 완료되었습니다.");
                navigate("/");
            }
            else{
                alert("글 작성에 실패했습니다.");
            }
        })
            .catch((err) =>{
                console.log(err);
            })
    };

    return(
        <UploadDiv>
            <UploadForm>
                <label htmlFor="label">Style Name</label>
                <input
                    id ="title"
                    type="text"
                    value={Title}
                    onChange={(event) =>
                        setTitle(event.currentTarget.value)}/>
                <ImageUpload setImage={setImage}/>
                <label htmlFor="content">Description</label>
                <textarea
                    id="content"
                    type="text"
                    value={Content}
                    onChange={(event) =>
                        setContent(event.currentTarget.value)}/>
                <UploadButtonDiv>
                    <button onClick={(e) => {
                        onSubmit(e);}}>
                    제출
                    </button>
                </UploadButtonDiv>
            </UploadForm>

        </UploadDiv>
    )
}

export default Upload;