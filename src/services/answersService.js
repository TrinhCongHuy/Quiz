import { getCookie } from "../helpers/cookie"
import { get } from "../utils/request"

export const getAnswersByUserId = async () => {
    const userId = getCookie("id");
    const result = await get(`answers?userId=${userId}`);
    return result;
}

export const getAnswer = async (id) => {
    const result = await get(`answers/${id}`);
    return result;
}

export const getListAnswer = async () => {
    const result = await get(`answers`);
    return result;
}

export const getListTopicIdAnswer = async (id) => {
    const result = await get(`answers?topicId=${id}`);
    return result;
}