import React, {useState} from 'react';

import { Card } from 'antd';
import 'antd/dist/antd.css';
import './Announcement.css';
import AnnouncementPosts from'./AnouncementPosts.json';
import DefaultPicture from '../../../assets/Images/defaultuserimg.png';

const ShortenedText = ({text, length = 50}) => {
    const [shortenText, setShortenText] = useState(true);
  
    if (text.split(' ').length < length) {
      return <p>{text}</p>;
    }
    const len =text.split(' ').length;
    return(
      <div>
        <p>
          {shortenText ? `${text.slice(0, 295)}....` : text  }
        </p>
        <a href="/"  style={{ color: "#966b00", cursor: "pointer" }}
          onClick = {() => setShortenText(!shortenText) }
          >
        &nbsp; {shortenText ? "Read the rest of this topic " : "Less" }
        </a>
        <p style = {{fontStyle: "italic", display: "inline"}}>({len} words)</p>
      </div>
    );
  
  };

  //const text =
//  "Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";


const autoPostProcess = AnnouncementPosts.Announcements.slice(0,10).map((announcement, index) => {
	return(
    <>
       <a href="/" id={index}/>
    <Card id="post-display" border="none" style={{ width: '100%' }} className="card" key={index}>
        <div className="header" >
          <div className="left-picture">
            <a href="/">
              <img className="user-picture" src={DefaultPicture} alt="default-user"/>
            </a>
          </div>
          <div className="topic">
            <div className="subject" >
              {announcement.title}
            </div>
            <div className="author" >
              <i className="fas fa-arrow-circle-right icon"></i>
              by {' '}  
              <a href={announcement.link} id="link-color">{announcement.author}</a>
              {' '}{announcement.date}
            </div>
          </div>
        </div>
        <div className="card-body">
          <ShortenedText text={announcement.content}/>
        </div>
        <div>
          <div className="option">
            <div className="command">
              <a href={announcement.path} id="link-color">
                Permalink
              </a>
            </div>
            <div className="link">
              <a href={announcement.path} id="link-color">
                View the discussion {' '}
              </a>
              {' '}(0 replies so far)
            </div>
          </div>
        </div>
      </Card>
    </>
   
  );
})

const announcementCard = () => (
    <div id="site-news-forum">
      <h2>Pengumuman Akademis</h2>
      {autoPostProcess}
      <div className="old-content">
        <a href="/">
          Old topics ...
        </a>
      </div>
    </div>   
    );
export default announcementCard;