import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import postsData from './postsData';

const Posts = () => {
  const [likes, setLikes] = useState(postsData.map(() => false)); // 초기값 설정
  const toggleLike = (index) => {
    setLikes((prevLikes) =>
      prevLikes.map((like, i) => (i === index ? !like : like))
    );
  };

  return (
    <div className="posts journalLayout">
      <h2>기록 목록</h2>
      <ul>
        {postsData.map((post, index) => (
          <li key={post.id} className="postItem">
            <div className="postCard">
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <div className="postMeta">
                <button
                  className={likes[index] ? "likeBtn liked" : "likeBtn"} // 클래스명 수정
                  onClick={() => toggleLike(index)}
                >
                  ♡
                </button>
                <Link to={`/posts/${post.id}`}>더보기</Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;