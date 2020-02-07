import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div>
            <ul>
                <li><Link to = "/my_note1"> Page1 </Link></li>
                <li><Link to = "/my_note2"> Page2 </Link></li>
                <li><Link to = "/my_note3"> Page3 </Link></li>
            </ul>

        </div>
    );
};

export default Header;
