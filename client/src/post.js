import { formatISO9075 } from "date-fns";
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
        <img src="https://www.ikea.com/us/en/images/products/enrum-lantern-for-candle-indoor-outdoor-black__1095514_pe863921_s5.jpg?f=s"></img>
      </div>
      <div className="text">
        <h2>{title}</h2>
        <p className="info">
          <a className="author">{author.username}</a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}
