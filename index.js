const Notification = (props) => {
    //  Write your code here.
    const { className, text } = props;
    return <p className={className}>{text}</p>;
};

const element = (
    //  Write your code here.
    <div className="bg-container">
        <h1 className="heading">Notifications</h1>
        <div className="notification-container">
            <div className="information-container">
                <img
                    src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
                    className="image"
                />
                <Notification className="notification-1" text="Information Message" />
            </div>

            <div className="success-container">
                <img
                    src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                    className="image"
                />
                <Notification className="notification-1" text="Success Message" />
            </div>
            <div className="warning-container">
                <img
                    src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
                    className="image"
                />
                <Notification className="notification-1" text="Warning Message" />
            </div>

            <div className="danger-container">
                <img
                    src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
                    className="image"
                />
                <Notification className="notification-1" text="Error Message" />
            </div>
        </div>
    </div>
);

ReactDOM.render(element, document.getElementById("root"));
