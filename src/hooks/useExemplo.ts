import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = 'https:mockapi.io/projects/65c1f4b1f7e6ea59682a235e'

const fetchData = async () => {
    const response = await axios.get(API_URL);
    return response.data
}


export function useExemplo(){
    const query = useQuery({
        queryFn: fetchData,//função fetch padrão
        queryKey: ['dados'] //quando a aplicação reiniciar, a função busca no cache os dados que ele já buscou, para otimizar
    });

    return query;
}