import "./chatOnline.css"

export default function ChatOnline() {
    return (
        <div class="chatOnline">
            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img className="chatOnlineImg"
                     src="https://randomuser.me/api/portraits/men/5.jpg" alt="" />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">John Wick</span>
            </div>
            
        </div>
    )
}
