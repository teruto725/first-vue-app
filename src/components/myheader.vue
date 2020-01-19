<template>
    <div>
    <nav class="navbar navbar-expand-sm sticky-top navbar-dark bg-dark mt-3 mb-3">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav4" aria-controls="navbarNav4" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <router-link class="navbar-brand" to="/">Many Hopers</router-link>
        <div class="collapse navbar-collapse justify-content-end">
            <ul class="navbar-nav">
                <li class="nav-item active">
                     <router-link class="nav-link" to="/member">Menber</router-link>
                </li>
                <li class="nav-item active">
                    <router-link class="nav-link" to="/news">News</router-link>
                </li>
                <li class="nav-item active">
                    <router-link class="nav-link" to="/contact">Contact</router-link>
                </li>
            </ul>
        </div>
    </nav>
    </div>
</template>


<style>

</style>
