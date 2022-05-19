<template>
    <div class="container">
        <h1>Hello world!</h1>
        <SinglePostComponent></SinglePostComponent>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Job</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="person in persons">
                <th scope="row">{{ person.id }}</th>
                <td>{{ person.name }}</td>
                <td>{{ person.age }}</td>
                <td>{{ person.job }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import SinglePostComponent from "./SinglePostComponent";
export default {
    name: "PostComponent",
    components: {
        SinglePostComponent
    },

    data() {
        return {
            persons: null
        }
    },

    mounted() {
        this.getPersons()
    },

    methods: {
        getPersons() {
            axios.get('/persons')
                .then((data) => {
                    this.persons = data.data
                })
                .catch(error => {

                })
                .finally({

                })
        }
    },


}
</script>

<style scoped>

</style>
