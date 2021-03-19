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
            description: 'Standard Single Rooms are designed in open -concept living area and have many facilities.',
            imgUrl: 'https://i.ibb.co/ZTC7C5z/car.png',
            
        },
        {
            title: 'Bus',
            description: 'Superior Double Rooms are perfectly equipped for traveling couples or friends.',
            imgUrl: 'https://i.ibb.co/T0Z0rb0/bus.png',
           
        },
        {
            title: 'Bike',
            description: ' Have lots of in-room facilities and are designed in open-concept living area.',
            imgUrl: 'https://i.ibb.co/ZdkTdPH/bike.png',
            
        },

        {
            title: 'Metro',
            description: ' Have lots of in-room facilities and are designed in open-concept living area.',
            imgUrl: 'https://i.ibb.co/p2F1Dsx/metro.png',
            
        }
    ]
    return (
        <div style={{marginLeft: '50px 0 50px 0'}}>
            {
                rooms.map(room => <div style={{float:'left'}}><Room key={room.bedType} room={room}></Room></div>)
            }
        </div>
    );
};

export default Home;