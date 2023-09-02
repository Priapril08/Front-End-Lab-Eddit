export const goLoginPage = (navigate) => {
  navigate("/");
};

export const goSignupPage = (navigate) => {
  navigate("/signup");
};

export const goHomePage = (navigate) => {
  navigate("/main");
};

export const goPostPage = (navigate, post) => {
  navigate(`/posts/${post}`);
};
