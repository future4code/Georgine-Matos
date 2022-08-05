import axios from "axios";
const BASE_URL = "https://brainn-api-loterias.herokuapp.com/api/v1";

export const getLoterias = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/loterias`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getLoteriasConcursos = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/loterias-concursos`);
    return data
  } catch (error) {
    throw new Error(error);
  }
};

export const getConcursosById = async (id) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/concursos/${id}`)
    return data
  } catch (error) {
    console.log(error);
  }
}
