<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header text-center">Tambah buku</div>

                    <div class="card-body">
                        <form v-on:submit="submitToDoList()">
                            <div class="form-group">
                                <input type="text" name="name" v-model="to_do_lists.name" id="" placeholder="Masukan Judul Buku" class="form-control"> 
                            </div>
                            <div class="form-group">
                                <input type="text" name="title" v-model="to_do_lists.title" id="" placeholder="Masukan Nama" class="form-control"> 
                            </div>
                            <div class="form-group">
                                <textarea name="description" v-model="to_do_lists.description" class="form-control" id="" rows="5" placeholder="Description"></textarea> 
                            </div>
                            <div class="form-group">
                                <router-link to="/" class="btn btn-warning">Kembali</router-link>
                                <button class="btn btn-success">Simpan</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
            to_do_lists: {
                name:"",
                title:"",
                description:"",
            },
            errors: []
            }
        },

        methods: {
            // Pushes posts to the server when called.
            submitToDoList() {
            axios.post(`/to-do-list`, this.to_do_lists)
            .then(response => {
                console.log(response)
                this.to_do_lists = response.data
                this.$router.push({path:'/'})
            })
            .catch(e => {
                this.errors.push(e)
            })
            }
        }
    }
</script>
