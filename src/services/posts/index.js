import { api } from "../../utils/api";

export const handleGetForYou = async ({ limit = 5 }) => {
  try {
    const response = await api.get(`/api/posts/0/${limit}`);

    return response;
  } catch (error) {
    return alert("Erro", error);
  }
};

export async function handleDeletePost(postId) {
  try {
    const response = await api.delete(`/api/post/${postId}`);
    return response;
  } catch (error) {
    console.log("Erro", error);
    return null;
  }
}
