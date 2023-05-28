/* eslint-disable jsx-a11y/anchor-is-valid */
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import ReactTimeAgo from "react-time-ago";
TimeAgo.addDefaultLocale(en);



export default function Post({
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
        <img alt="" src="https://www.ikea.com/us/en/images/products/enrum-lantern-for-candle-indoor-outdoor-black__1095514_pe863921_s5.jpg?f=s"></img>
      </div>
      <div className="text">
        <h2>{title}</h2>
        <p className="info">
          <a className="author">{author.username}</a>
          <time><ReactTimeAgo date={createdAt} locale="en-US"/></time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}
