import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.css'
import { useState, useEffect } from 'react'
import { Sticky } from './components/Sticky'

const baseURL = 'http://localhost:8000'

const App = () =>{

    const [modalVisible,setModalVisible]=useState(false);
    const [title,setTitle]=useState('')
    const [content, setContent]=useState('')
    const [sticky,SetSticky]=useState([])

    const createSticky = async (event) =>{
        event.preventDefault();

        const new_request= new Request(
            `${baseURL}/posts`,
            {
                body:JSON.stringify({title,content}),
                headers:{
                    'Content-Type':'Application/Json'
                },
                method:'POST'
            }
        );

        const response = await fetch(new_request)

        const data = await response.json();

        if(response.ok){
            console.log(data)
        }else{
            console.log("Failed Request")
        }

        setTitle('')
        setContent('')

        setModalVisible(false)

        getAllStickies()
    }

    const getAllStickies = async () =>{
        const response = await fetch(`${baseURL}/posts/`);

        const data = await response.json()

        if (response.ok){
            console.log(data)
            SetSticky(data)
        }else{
            console.log("Failed Request")
        }
    }

    useEffect(()=>{
        getAllStickies()},[]
    )


    const deleteItem= async (id)=>{
        console.log(id)

        const response = await fetch(`${baseURL}/posts/${id}/`,{
            method:'DELETE'
        })

        if(response.ok){
            console.log(response.status)
        }

        getAllStickies()
    }
    return(
        <div>
            <div className="header">
                <div className="logo">
                    <p className="title">Bulletin Board</p>
                </div>
                <div className="logo">
                    <a className="add-btn" href="#"
                        onClick={()=> setModalVisible(true)}>Post a note!</a>
                </div>
            </div>
            {sticky.length > 0?
                (<div className="post-list">
                {
                    sticky.map(
                        (item)=>(
                            <Sticky title={item.title} 
                            content={item.content}
                            onclick={()=>deleteItem(item.id)}
                            key={item.id}
                            />
                        )
                    )
                }
                </div>
                ):(
                <div className="posts">
                    <p className="mantlepiece">No Stickies... :(</p>
                </div>
                )
            }
            
            <div className={modalVisible? 'modal':'modal-invisible'}>
                <div className="form">
                    <div className="form-header">
                        <div>
                            <p className="form-header-text">Write Your Sticky</p>
                        </div>
                        <div>
                            <a href="#" className='close-btn'
                                onClick={()=>setModalVisible(false)}>x</a>
                        </div>
                    </div>
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" name="title" id="title" 
                                    value={title}
                                    onChange={(e)=>setTitle(e.target.value)}
                                className="form-control" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">content</label>
                            <textarea type="content" id="" cols="30" rows="7" 
                                    value={content}
                                    onChange={(e)=>setContent(e.target.value)}
                                className='form-control' required />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Stick" className="btn" onClick={(createSticky)} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<App/>,document.querySelector('#root'));