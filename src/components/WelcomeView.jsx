import {PropTypes} from 'prop-types';


const WelcomeView = (userName,setUserName, onGameStart) => {

  // function onClickStartGame() {
  //   console.log("Start Game button clicked");
  //   console.log("Username: ", username);
  //   //setGameStart();


    return (
      <div id="welcome-screen">
        <form id="name-form">
          <div className="form-group">
            <label for="username">Type your name: </label>
            <input
            value={userName}
            onChange={(e) => {setUserName(e.target.value)}}
            className="form-control"
            type="text"
            id="username"
            name="username"
            required placeholder="Enter Name Here..." minLength="2"
            maxLength="15" />
          </div>
          <button className="btn btn-primary" id="start-game-button" type="button" >
            Start Game!
          </button>
        </form>
      </div>
    );
  };

export default WelcomeView;
  