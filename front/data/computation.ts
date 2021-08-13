import axios from "axios";

const computation = async (data: string): Promise<string> => {
    const { data: { result } } = await axios.post(`/computation`, { entry: data });

    return result;
}

export default computation