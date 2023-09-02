import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import { StyleSection, StyledPostDetail } from "./stylePostDetails";
import like from "../../assets/like.svg";
import dislike from "../../assets/dislike.svg";
import comment from "../../assets/comment.svg";
import { GlobalContext } from "../../context/GlobalContext";
import { BASE_URL } from "../../constants/index";

function PostDetails(props) {
  const context = useContext(GlobalContext);
  const [post, setPost] = useState({});
  const [content, setContent] = useState("");

  useEffect(() => {
    navigatorPost();
  }, []);

  const navigatorPost = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/posts/${context.urlPost}`, {
        headers: {
          Authorization: window.localStorage.getItem("TokenApi - Labeddit"),
        },
      });
      const postFromResponse = response.data[0];
      console.log("Post", postFromResponse);
      setPost(postFromResponse);
    } catch (error) {
      console.log(error);
    }
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
      navigatorPost();
      props.navigatorPost();
    } catch (error) {
      console.log(error);
    }
  };

  const postDislike = async (postId) => {
    try {
      let body = {
        like: 0,
      };
      await axios.put(`${BASE_URL}/posts/${postId}/dislike`, body, {
        headers: {
          Authorization: window.localStorage.getItem("TokenApi-Labeddit"),
        },
      });
      navigatorPost();
      props.navigatorPost();
    } catch (error) {
      console.log(error);
    }
  };

  const includeComment = async () => {
    try {
      let body = {
        content,
      };
      await axios.post(`${BASE_URL}/posts/${context.urlPost}`, body, {
        headers: {
          Authorization: window.localStorage.getItem("TokenApi-Labeddit"),
        },
      });
      setContent("");
      navigatorPost();
      props.navigatorPost();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <StyledPostDetail>
        <Header />
        <StyleSection>
          <div>
            <article>
              <p className="cardText">
                Criado por: {post && post?.creator?.name}
              </p>
              <p>{post.content}</p>
              <p className="posts">
                <span className="cardBold">
                  <img
                    src={like}
                    onClick={() => postLike(post.id)}
                    alt="like-botão"
                  />
                  {post.likes}
                  <img
                    src={dislike}
                    onClick={() => postDislike(post.id)}
                    alt="dislike-botão"
                  />
                </span>

                <span className="cardText">
                  <img src={comment} alt="botão-comentar" />
                  {post.comments}
                </span>
              </p>
            </article>

            <input
              value={content}
              onChange={(event) => setContent(event.target.value)}
              className="InputPost"
              placeholder="Crie seu post ..."
            />
            <button
              onClick={() => {
                includeComment();
              }}
            >
              Responder
            </button>
          </div>

          <div>
            {post &&
              post?.comments_post?.map((comment) => {
                return (
                  <article key={comment.id}>
                    <p className="cardText"> Criado por: {comment.name}</p>
                    {console.log("creator", comment)}
                    <p>{comment.content}</p>
                    <p className="posts">
                      <span className="cardBold">
                        <img
                          src={like}
                          onClick={() => postLike(comment.id)}
                          alt="like-botão"
                        />
                        {comment.likes}
                        <img
                          src={dislike}
                          onClick={() => postDislike(comment.id)}
                          alt="dislike-botão"
                        />
                      </span>
                    </p>
                  </article>
                );
              })}
          </div>
        </StyleSection>
      </StyledPostDetail>
    </>
  );
}
export default PostDetails;
