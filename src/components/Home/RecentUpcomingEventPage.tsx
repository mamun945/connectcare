import React from 'react';
import EventsCardPage from '../EventsCard';

const RecentUpcomingEventPage = async () => {
    const res = await fetch('http://localhost:5000/upcoming-events')
    const datas = await res.json();
    const sortedJoinDatas = datas.sort(
        (a, b) => new Date(a.eventDate) - new Date(b.eventDate)
    );
    return (
        <div className='container mx-auto my-7'>
            <div>
                <h1 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
                    🔥 Recent Upcoming Events
                </h1>
                <p className="mt-3 max-w-xl text-sm leading-7 text-gray-600 dark:text-gray-400">
                    Discover upcoming community events and join hands to create
                    positive changes through donation, education, health, and nature.
                </p>

            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                {
                    sortedJoinDatas.slice(0, 6).map(data => <EventsCardPage key={data._id} event={data}></EventsCardPage>)
                }
            </div>
        </div>
    );
};

export default RecentUpcomingEventPage;