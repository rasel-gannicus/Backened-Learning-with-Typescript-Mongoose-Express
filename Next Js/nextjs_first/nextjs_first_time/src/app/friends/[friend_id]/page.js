'use client' ;
import { useState } from "react";

 

const FriendsWithId = ({params, searchParams}) => {
    console.log(params, searchParams);
    return (
        <div>
            <h2>Friends with id Here {params.friend_id} </h2>
        </div>
    );
};

export default FriendsWithId;