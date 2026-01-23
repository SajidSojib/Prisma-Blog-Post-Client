import { userService } from '@/services/user.service';
import React from 'react';

const Home = async() => {
    const {data: session} = await userService.getSession();
    console.log("session from home", session);

    return (
        <div>
            This is home page
        </div>
    );
};

export default Home;