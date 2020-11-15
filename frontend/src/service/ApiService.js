class ApiService {
    greet() {
        return fetch('./api/greet')
            .then(res => res.json());
    }

}

export default new ApiService();