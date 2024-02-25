import App from "../layouts/App";

import Nuiting from "../components/Nuiting";
import Card from "../components/Card";

function Home(){
    return(
        <App>
            <Nuiting />
            <ul className="*:mt-3 mt-5">
                <li><Card text="Seven7OfCode com React =DDD" email="matheushcastiglioni@gmail.com" /></li>
                <li><Card text="Opa opa teste" email="rafatinsfig@gmail.com"/></li>
            </ul>
        </App>
    );
}

export default Home;