import React from 'react';
import { AiFillLock } from "react-icons/ai";

// Renderse lockscreen
class LockScreen extends React.Component {
    render() {
        return (
            <div>
                <div className="lock-display">
                    <button aria-hidden="true"><AiFillLock/></button> 
                </div>
                <div className="bottom-div-lock">
                    <h3>Press Centre Button to unlock!</h3>
                </div>
            </div>
        )
    }

}


export default LockScreen;