import Header from "../../components/Header/Header";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import CardPost from "../../components/Cards/Card";
import PostDetails from "../../components/PostDetails/PostDetails";
import { useNavigate } from "react-router-dom";
import { goLoginPage } from "../../router/coordinator";
import { GlobalContext } from "../../context/GlobalContext";
import { MainStyle, StyleSection } from "../../constants/stylePages";
import { BASE_URL } from "../../constants/index";

function HomePage() {
  const context = useContext(GlobalContext);
  const navigate = useNavigate();
  const [content, setContent] = useState("");

  useEffect(() => {
    navigatorPosts();
  }, []);

  useEffect(() => {
    const token = window.localStorage.getItem("TokenApi-Labeddit");
    if (!token) {
      goLoginPage(navigate);
    }
  }, []);

  const navigatorPosts = async () => {
    try {
      context.setLoading(true);
      const response = await axios.get(`${BASE_URL}/posts`, {
        headers: {
          Authorization: window.localStorage.getItem("TokenApi-Labeddit"),
        },
      });
      context.setPosts(response.data);
      context.setLoading(false);
    } catch (error) {
      console.log(error);
      context.setLoading(false);
    }
  };
  const includePost = async () => {
    try {
      let body = {
        content,
      };
      await axios.post(`${BASE_URL}/posts`, body, {
        headers: {
          Authorization: window.localStorage.getItem("TokenApi-Labeddit"),
        },
      });
      navigatorPosts();
      setContent("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {context.modal ? <section className="boxOver" /> : ""}
      <Header />
      <MainStyle>
        {context.modal && context.actionModal === "post" ? (
          <>
            <PostDetails
              postId={context.urlPost}
              navigatorPosts={navigatorPosts}
            />
          </>
        ) : (
          ""
        )}

        <StyleSection>
          <div>
            <input
              value={content}
              onChange={(event) => setContent(event.target.value)}
              className="InputPost"
              placeholder="Crie seu post..."
            />
            <button onClick={() => includePost()}>Enviar</button>
          </div>

          <div>
            {context.loading
              ? "Loading..."
              : context.posts &&
                context?.posts?.map((post) => {
                  return (
                    <CardPost
                      key={post.id}
                      post={post}
                      navigatorPosts={navigatorPosts}
                    />
                  );
                })}
          </div>
        </StyleSection>
      </MainStyle>
    </>
  );
}
export default HomePage;
