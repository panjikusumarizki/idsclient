import http from '../http';

class PostService {
    getAll() {
        return http.get('/posts');
    }

    get(id) {
        return http.get(`/posts/get/${id}`);
    }

    create(data) {
        return http.post('/posts/create', data);
    }

    update(id, data) {
        return http.put(`/posts/update/${id}`, data);
    }

    delete(id) {
        return http.delete(`/posts/delete/${id}`);
    }

    deleteAll() {
        return http.delete('/posts/delete');
    }

    findByTitle(title) {
        return http.get(`/posts?title=${title}`)
    }
}

export default new PostService;