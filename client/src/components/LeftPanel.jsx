import React from 'react';
import Avatar from 'react-bootstrap-icons/dist/icons/person-circle'
import background from '../assets/images/background.jpg'
function LeftPanel({ fullname, email }) {

    const tagItem = (tag) => (
        <p className="tag_title">
            {tag.title}
        </p>
    )

    const tags = [
        {
            id: 123,
            title: 'Programming'
        },
        {
            id: 124,
            title: 'Admission'
        },
        {
            id: 125,
            title: 'Activities'
        },
        {
            id: 126,
            title: 'Curriculum'
        },
        {
            id: 127,
            title: 'Placements'
        },
    ]

    return (
        <div className="left_panel">
            <div className="left_top">
                <img src={background} alt="" className="back-img" />
                <Avatar size={45} className="sidebar_avatar" />
                <h2>{fullname}</h2>
                <h4>{email}</h4>
            </div>
            <div className="left_bottom">
                <p>Tags</p>
                <div className="tag_items">
                    {
                        tags.map((tag) => tagItem(tag))
                    }
                </div>
            </div>
        </div>
    );
}

export default LeftPanel;