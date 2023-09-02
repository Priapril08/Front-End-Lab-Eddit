import axios from "axios";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import like from "../../assets/like.svg";
import dislike from "../../assets/dislike.svg";
import comment from "../../assets/comment.svg";
import { BASE_URL } from "../../constants/index";

function CardPost(props) {
  const context = useContext(GlobalContext);

  const cardPostAppear = (postId) => {
    context.setUrlPost(postId);
    context.setModal(true);
    context.setModalAction("post");
  };

  const postLike = async (postId) => {
    try {
      let body = {
        like: 1,
      };
      await axios.put(`${BASE_URL}/posts/${postId}/like`, body, {
        headers: {
          Authorization: window.localStorage.getItem("TokenApi-Labeddit"),
        },
      });
      props.navigatorPosts();
    } catch (error) {
      console.log(error);
    }
  };
  const postDislike = async (postId) => {
    try {
      let body = {
        like: 0,
      };
      await axios.put(`${BASE_URL}/posts/${postId}/like`, body, {
        headers: {
          Authorization: window.localStorage.getItem("TokenApi-Labeddit"),
        },
      });
      props.navigatorPosts();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <article>
      <p className="cardText"> Criado por: {props.post.creator.name}</p>
      <p> {props.post.content}</p>
      <p className="posts">
        <span className="cardBold">
          <img
            src={like}
            onClick={() => postLike(props.post.id)}
            alt="like-botão"
          />
          {props.post.likes}
          <img
            src={dislike}
            onClick={() => postDislike(props.post.id)}
            alt="dislike-botão"
          />
        </span>
        <span
          className="cardText"
          onClick={() => cardPostAppear(props.post.id)}
        >
          <img src={comment} alt="botão-comentar" />
          {props.post.comments}
        </span>
      </p>
    </article>
  );
}
export default CardPost;
