import axios from '~/plugins/axios';

export default {
    async searchCustomers (name, page, limit) {
        let { data } = await axios.post(`api/customer/search/${page}/${limit}`, {name: name});
        return data;
    },
    async getCountSearchCustomers (name) {
        let { data } = await axios.post(`api/customer/search/count`, {name: name});
        return data;
    },
    async getCustomer (id) {
        let { data } = await axios.get(`api/customer/${id}`);
        return data;
    }
};
