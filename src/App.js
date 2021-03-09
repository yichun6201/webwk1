import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="bg">
    <div className="A">
        <div className="Vegetables">Vegetables</div>
        <div className="botton">
            <div className="fbig">
              <img className="fb" src="img/btn_facebook.png"/>
              <img className="ig" src="img/btn_instagram.png"/>
            </div>
            <div><p className="line"></p></div>
            <div className="login-0"><p className="login" type="botton">LOGIN</p></div>
            <div className="join-0"><p className="join" type="botton">JOIN</p></div>
        </div>
    </div>


    <div className="B">
        <div className="t-choose">
            <ul className="choose">
                <li className="home">Home</li>
                <li className="aboutus">About Us</li>
                <li className="vegetables">Vegetables</li>
                <li className="online">Online</li>
                <li className="contact">Contact</li>
            </ul>
        </div>
    </div>

    <div className="C">
        <img className="pumpkin" src="img/img_main_pumpkin.png"/>
    </div>

    <div className="D">
        <div className="vegetables-0"><p className="vegetables-d">Vegetables</p></div>
        <div className="contact-0"><p className="contact-d">Contact</p></div>
    </div>

    <div className="E">
        <div className="image">
            <img className="pepper" src="img/img_vegetables_pepper.png"/>
            <img className="carrot" src="img/img_vegetables_carrot.png"/>
            <img className="corn" src="img/img_vegetables_corn.png"/>
        </div>
        <div className="text">
            <p className="text-a">For any questions or suggestions about Vegetables, Vegetables Club or your 
                    online order you can contact Vegetables Customer Service by phone, email 
                    or post and we’ll be happy to help.</p>
            <div className="text-line"></div>
            <p className="text-b">E-mail : Vegetables@aaabbccc.com 
                    PHONE : +886-123-456-789</p>
        </div>
    </div>

    <div className="F">
        <div className="footer">
            <p className="last">Copyrights 2017 Vegetables cise / Design by Vegetables</p>
        </div>
    </div>
</div>
  );
}

export default App;
