<template>
    <div class="container w-25">

        <div class="mb-3">
            <input type="text" class="form-control" v-model="name" id="name" placeholder="name">
        </div>

        <div class="mb-3">
            <input type="number" class="form-control" v-model="age" id="age" placeholder="age">
        </div>

        <div class="mb-3">
            <input type="text" class="form-control" v-model="job" id="job" placeholder="job">
        </div>

        <div class="mb-3">
            <input type="submit" v-on:click="addPerson" class="btn btn-primary" value="Add">
        </div>

    </div>
</template>

<script>

export default {
    name: "CreateComponent",

    data() {
        return {
            name: null,
            age: null,
            job: null,
        }
    },

    methods: {
        addPerson() {
            axios.post('/api/people', { name: this.name, age: this.age, job: this.job })
                .then(res => {
                    this.name = ''
                    this.age = ''
                    this.job = ''
                    console.log(res);
                })
        }
    }

}
</script>

<style scoped>

</style>
