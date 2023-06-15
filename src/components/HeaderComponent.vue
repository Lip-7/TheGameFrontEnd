<template>
    <header>
        <nav class="h-100 w-100 navbar navbar-expand-lg" data-bs-theme="dark">
            <div class="w-100 h-100 d-flex justify-content-between align-items-center">
                <div class="navbar-brand box-logo py-1">
                    <img src="/img/logo.png" alt="">
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Characters</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Rules</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Team</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
  
<script>
export default {
    name: 'HeaderComponent',
    data() {
        return {

        }
    },
    methods: {

    },
    components: {

    },
    mounted() {

    }
}
</script>
  
<style lang="scss" scoped>
header {
    height: 70px;
    padding: 0 50px;
    background-color: #202020;
    color: #F5E6C9;
    font-weight: 600;
    font-family: 'Play', sans-serif;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .box-logo {
        width: 120px;
        height: 70px;
        img {
            width: 100%;
            height: 100%;
        }
    }
    ul{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5rem;
        li {
            a {
                text-decoration: none;
                text-transform: uppercase;
                color: #F5E6C9;
                transition: color 0.2s;
                &:hover {
                    color: white;
                }
            }
        }
    }

    input {
        background-color: rgba(0, 0, 0, 0.267);
        border-radius: 10px;
        color: white;
    }
    .card-img-top {
        max-height: 200px;
        object-fit: cover;
        object-position: top;
    }
}
</style>