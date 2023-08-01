import axios from "axios";
import { Course } from "../components/ShowContent/ShowContent";

export interface Content {
  _id: string;
  title: string;
}
//connection for all content

export const contentService = {
  getCourses: async (): Promise<Course[]> => {
    try {
      const response = await axios.get<Course[]>(
        "http://localhost:3000/api/v1/content/search/content",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    } catch (error) {
      // Aquí puedes manejar los errores de la petición si es necesario
      console.error("Error fetching courses:", error);
      throw error;
    }
  },
};


//connection for search content

export const searchContent = (query: string): Promise<Content[]> => {
  return axios
    .get(
      `http://localhost:3000/api/V1/content/search/content?query=${encodeURIComponent(
        query
      )}`
    )
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error al realizar la búsqueda:", error);
      return [];
    });
};
 
export const buyContentUser = { buyContent(id: string, contentId: string) {
  return axios.post(
    `http://localhost:3000/api/v1/auth/buyContent/${id}/${contentId}`,
    { headers: { 'Content-Type': 'application/JSON' } }
  );
},
};

//connection for get all create content
export const getUserContents = async (userId: string): Promise<Content[]> => {
  try {
    const response = await axios.get<Content[]>(
      `http://localhost:3000/api/v1/content/user/${userId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data; // si hay exito, aquí se retorna la data de la respuesta
  } catch (error) {
    console.error("Error fetching user contents:", error);
    throw error;
  }
};