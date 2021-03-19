import React from 'react';
import Room from '../Room/Room';

const Home = () => {
    const style = {
        display: 'flex',
        margin: '40px',
        
        
        
    }
    const rooms = [
        {
            title: 'Car',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
            imgUrl: 'https://i.ibb.co/ZTC7C5z/car.png',
            
        },
        {
            title: 'Bus',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
            imgUrl: 'https://i.ibb.co/T0Z0rb0/bus.png',
           
        },
        {
            title: 'Bike',
            description: ' Lorem Ipsum is simply dummy text of the printing and typesetting',
            imgUrl: 'https://i.ibb.co/ZdkTdPH/bike.png',
            
        },

        {
            title: 'Metro',
            description: ' Lorem Ipsum is simply dummy text of the printing and typesetting',
            imgUrl: 'https://i.ibb.co/p2F1Dsx/metro.png',
            
        }
    ]
    return (
        <div style={{marginLeft: '50px'}}>
            {
                rooms.map(room => <div style={{float:'left', padding:'5px'}}><Room key={room.bedType} room={room}></Room></div>)
            }
        </div>
    );
};

export default Home;