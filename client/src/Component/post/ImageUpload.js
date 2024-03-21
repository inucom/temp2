import React from "react";
import {Form} from "react-bootstrap";
import axios from "axios";
function ImageUpload(props){

    const FileUpload = (e) =>{
        const formData = new FormData();

        for (let i = 0; i < e.target.files.length; i++) {
            formData.append("files", e.target.files[i]);
        }
        axios.post("/api/post/image/upload", formData).then((res)=>
            props.setImage(res.data.filePaths));
    }
    return(
        <div>
            <Form.Control
                type="file" multiple
                className="shadow-none"
                accept="image/*"
                onChange={(e)=> FileUpload(e)}
            />
        </div>

    )
}

export default ImageUpload