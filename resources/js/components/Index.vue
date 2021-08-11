<template>
    <div class="card">
        <div class="card-header">
            <router-link to="/create" class="btn btn-primary float-right">Tambah Buku</router-link>
        </div>
        <div class="card-body">
            <table class="table table-hover"> 
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="items, index in lists" :key="index">
                        <td>{{ items.name }}</td>
                        <td>{{ items.title}}</td>
                        <td>{{ items.description }}</td>
                        <td>
                            <router-link :to="{name: 'readList', params:{id:items.id}}" class="btn btn-info">Lihat</router-link>
                            <router-link :to="{name: 'editList', params:{id:items.id}}" class="btn btn-success">Edit</router-link>
                            <button class="btn btn-danger" v-on:click="submitToDoListDelete(items.id,  index)">Hapus</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        data() {
            return {
                lists: [],
                errors: []
            }
        },

        created() {
            axios.get('/to-do-list')
            .then(response => {
                console.log(response.data)
                this.lists = response.data
            })
            .catch(e => {
                this.errors.push(e)
            })
        },

        methods: {
            submitToDoListDelete(id, index) {
            axios.delete(`/to-do-list/` + id)
            .then(response => {
                console.log(response)
                this.lists.splice(index, 1)
            })
            .catch(e => {
                this.errors.push(e)
            })
            }
        }
    }
</script>





