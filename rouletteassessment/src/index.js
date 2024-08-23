import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.css'
import { useState } from 'react'

const App = () =>{

    const [modalVisible,setModalVisible]=useState(false);
    const [title,setTitle]=useState('')
    const [content, setContent]=useState('')

    const createSticky = (event) =>{
        event.preventDefault();
        
        console.log(title)
        console.log(content)

        setTitle('')
        setContent('')

        setModalVisible(false)
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
            <div className="posts">
                <p className="mantlepiece">No Stickies</p>
            </div>
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
                                className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">content</label>
                            <textarea type="content" id="" cols="30" rows="7" 
                                    value={content}
                                    onChange={(e)=>setContent(e.target.value)}
                                className='form-control' />
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