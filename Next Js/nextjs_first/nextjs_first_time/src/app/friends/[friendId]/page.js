import React from 'react';

const DynamicFriend = ({params, searchParams}) => {
    console.log(params, searchParams);
    return (
        <div>
            <h2>Dynamic Friend Here</h2>
        </div>
    );
};

export default DynamicFriend;