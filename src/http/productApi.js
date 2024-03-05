import axios from "axios";
import md5 from "md5";

const stamp = new Date().toISOString().split('T')[0].split('-').join('');
const pass = md5(`Valantis_${stamp}`);

export const fetchIds = async (limit, offset) => {
    const response = await axios.post('https://api.valantis.store:41000/', {
        action: 'get_ids',
        params: {
            limit,
            offset
        }
    }, 
    {
        headers: {
        "X-Auth": pass
        }
    })

    return response;
}

export const fetchProducts = async (data) => {
    const response = await axios.post('https://api.valantis.store:41000/', {
        action: 'get_items',
        params: {
            ids: [data]
        }
    },
    {
        headers: {
        "X-Auth": pass
        }
    })

    return response;
}
