import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';

import { PostDiv, SpinnerDiv, Post, BtnDiv, InputContainer } from "../../Style/PostDetailCSS";

function Detail() {

    let params = useParams();
    let navigate = useNavigate();
    const [PostInfo, setPostInfo] = useState({});
    const [Flag,setFlag] = useState(false);

    useEffect(() => {
        let body = {
            postNum: params.postNum
        }
        axios.post("/api/post/detail", body)
            .then((res) => {
                if(res.data.success){
                    setPostInfo(res.data.post);
                    setFlag(true);
                }
            }).catch((err) => {
            console.log(err);
        })
    }, []);

    useEffect(() => {
         console.log(PostInfo);
    }, [PostInfo]);

    const DeleteHandler = () =>{
        if(window.confirm("삭제하시겠습니까?")){
            let body = {
                postNum: params.postNum
            }
            axios.post("/api/post/delete", body)
                .then((res) => {
                    if(res.data.success){
                        alert("게시글이 삭제되었습니다.");
                        navigate("/");
                    }
                }).catch((err) => {
                alert("게시글 삭제에 실패하였습니다.");
            })
        }
    }

    return <PostDiv>
        {Flag ?
            <>
            <Post>
                <h1>{PostInfo.title}</h1>
                {/*{PostInfo.image ? <img src={`http://localhost:3001/${PostInfo.image[0]}`}*/}
                {/*                       alt=""*/}
                {/*                       style={{width:"100%", height:"auto"}}*/}
                {/*/> : null}*/}
                <div style={{ display: "flex", overflowX: "auto", whiteSpace: "nowrap" }}>
                    {PostInfo.image && PostInfo.image.map((image, index) => (
                        <div key={index} style={{ display: "inline-block", width: "200px", height: "200px", overflow: "hidden", marginRight: "10px", marginBottom: "10px", backgroundColor: "white" }}>
                            <img
                                src={`http://localhost:3001/${image}`}
                                alt={`Image ${index}`}
                                style={{ width: "100%", height: "auto", objectFit: "contain" }}
                            />
                        </div>
                    ))}
                </div>
                <p>{PostInfo.content}</p>
            </Post>
                <BtnDiv>
                    <Link to ={`/edit/${PostInfo.postNum}`}>
                        <button className="edit">수정</button>
                    </Link>
                    <button className="delete"
                            onClick={()=> DeleteHandler()}>삭제
                    </button>
                </BtnDiv>
                <h3>Text to Speech</h3>
                <InputContainer>
                    <input type="text"></input>
                    <button className="generate">생성</button>
                </InputContainer>

            </>
            :<SpinnerDiv>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            </SpinnerDiv>}
    </PostDiv>;
}

export default Detail;