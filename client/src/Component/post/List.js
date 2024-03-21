import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import {ListDiv, ListItem} from "../../Style/ListCSS";

function List() {

    const [PostList,setPostList] = useState([]);

    useEffect(() =>{
        axios.post("/api/post/list").then((res) => {
            if(res.data.success){
                setPostList([...res.data.postList]);
            }
        }).catch((err) =>{
            console.log(err);
        })
    }, []);

    return (
        <ListDiv>
            <h3>Styles</h3>
                {PostList.map((post, idx) => {
                    return (
                        <div>
                            <ListItem key={idx}>
                                <Link to = {`/post/${post.postNum}`}>
                                <p className="title">{post.title}</p>
                                    {post.image && post.image.length > 0 &&
                                        <img
                                            src={`http://localhost:3001/${post.image[0]}`}
                                            alt={`Image for post ${post.postNum}`}
                                            style={{ width: "300px", height: "200px", objectFit: "contain", marginRight: "10px" }}
                                        />
                                    }
                                {/*<p>{post.content}</p>*/}
                                </Link>
                            </ListItem>
                        </div>)
                })}
        </ListDiv>);

}

export default List;