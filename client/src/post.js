/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import ReactTimeAgo from "react-time-ago";
TimeAgo.addDefaultLocale(en);



export default function Post({_id,
  title,
  summary,
  content,
  image,
  createdAt,
  author,
}) {
  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${_id}`}>
           <img src={'http://localhost:4000/'+image} alt=""/>
        </Link>
       
      </div>
      <div className="text">
        <Link to={`/post/${_id}`}>
           <h2>{title}</h2>
        </Link>
        <p className="info">
          <a className="author">{author.username}</a>
          <time>
            <ReactTimeAgo date={createdAt} locale="en-US" />
          </time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}
