<script setup>
import { RouterLink } from 'vue-router';

const { request } = useKonnectiveApi();
// const { data, error, pending } = await useFetch('https://api.example.com/posts');
// const { data, error, pending } = await useFetch('https://api.checkoutchamp.com/upsale/import/');

const route = useRouter();
route.push('/lp1/7-warning-signs')

// const customer = await request('createCustomer', 'POST', {
//     firstName: 'John',
//     lastName: 'Doe',
//     email: 'john@example.com'
// }, true); // <- encrypted = true
</script>

<template>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div v-else>
        <ul>
            <li v-for="post in data" :key="post.id">{{ post.title }}</li>
        </ul>
    </div>
</template>
