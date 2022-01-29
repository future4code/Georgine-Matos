import axios from "axios";
import { Base_URL } from "../pages/utils/constants";
import { useHistory } from "react-router-dom";

const token = localStorage.getItem("token");

export const deletaViagem = async (id) => {
  try {
    const { data } = await axios.delete(`${Base_URL}/trips/${id}`, {
      headers: {
        auth: token,
      },
    });
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const pegaViagens = async () => {
  try {
    const { data } = await axios.get(`${Base_URL}/trips`, {
      headers: {
        auth: token,
      },
    });
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const pegaPaisesAPI = async () => {
  try {
    const { data } = await axios.get(
      "https://servicodados.ibge.gov.br/api/v1/paises"
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

