import "./message.css";

export default function Message(props) {
    const {user} = props;
    return (
        <div className={user?"message user":"message"}>
            <div className="messageTop">
                <img 
                    className="messageImg"
                    src="https://randomuser.me/api/portraits/med/women/8.jpg" alt="" 
                    />
                    <p className="messageText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto libero sapiente dicta id veritatis rerum optio voluptatibus itaque nostrum exercitationem!</p>
            </div>

            <div className="messageBottom">
                56 min ago
            </div>
        </div>
    )
}
