import { api } from "../../utils/api";

export const handleLikeThis = async ({ postId }) => {
  try {
    const response = await api.post("/api/like", { postId });
    return response;
  } catch (error) {
    return alert(error);
  }
};
