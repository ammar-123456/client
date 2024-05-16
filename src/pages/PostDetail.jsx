


import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from '../components/PostAuthor'
import Thumbnail from '../images/blog22.jpg'

const PostDetail = ({ id }) => {
  return (
    <section className="post-detail">
      <div className='container post-detail__container'>
        <div className='post-detail__header'>
          <PostAuthor/>
          <div className="post-detail__buttons">
            <Link to={`/posts/${id}/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/posts/${id}/delete`} className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <h1>This is post title!</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Magnam expedita repudiandae explicabo, nobis inventore deleniti et voluptates 
          maiores est cumque vitae nisi laboriosam vero aliquid omnis itaque dolorem quasi officiis?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore dignissimos veritatis nihil autem.
          Doloremque tenetur rem nesciunt! Illum, illo. Itaque, nesciunt nam aperiam nemo facere provident pariatur 
          repellat dolores iusto in, explicabo laudantium expedita voluptatibus necessitatibus! Aliquid esse placeat
          obcaecati reprehenderit fugit quae sed eveniet nam nostrum, odit in enim. Vitae id modi voluptate vero!
        </p>
      </div>
    </section>
  );
};

export default PostDetail;
