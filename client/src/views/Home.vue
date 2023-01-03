<template>
    <Header />
    <div class="main-name">
        Top selling
    </div>
    <div class="main__ container">
        <div class="main__img"></div>
        <div class="main__content">
            <div class="main__content-name">
                <div class="main__content-name-name">Varmilo Lavender 108</div>
                <div class="main__content-name-size">100%</div>
            </div>
            <div class="main__content-price">
                <div class="main__content-price-price">100 $</div>
                <button class="main__content-price-btn" type="submit">Add to cart</button>
            </div>
        </div>
    </div>
    <div class="categories__ container">
        <div class="categories-">Categories</div>
        <div class="categories__grid">

            <CategoriesItem :info="{color: 'black', name: 'Varmilo', category: 'Keyboards'}"/>
            <CategoriesItem :info="{color: 'pink', name: 'Leopold', category: 'Keyboards'}"/>
            <CategoriesItem :info="{color: 'blue', name: 'Ducky', category: 'Keyboards'}"/>
            <CategoriesItem :info="{color: 'green', name: 'Vortex', category: 'Keyboards'}"/>

        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import CategoriesItem from '../components/CategoriesItem.vue'

export default {
    name: 'Home',
    components: {
        Header,
        CategoriesItem
    }
}
</script>

<style scoped>
.categories- {
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    margin-top: 20px;
}
.categories__ {
    padding: 0 20px;
}
.categories__grid {
    gap: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.main__ {
    padding: 0 20px;
    margin-top: 100px;
    margin-bottom: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.main-name {
    text-align: center;
    margin-top: 20px;
    font-weight: 700;
    font-size: 64px;
}
.main__img {
    max-width: 453px;
    width: 100%;
    height: 293px;

    background-image: url('../assets/9.jpg');
    background-size: cover;
    border-radius: 25px;
}
.main__content {
    margin-left: 20px;
}
.main__content-name-name {
    font-weight: 700;
    font-size: 48px;
}
.main__content-name-size {
    font-weight: 400;
    font-size: 32px;
}
.main__content-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.main__content-price-price {
    font-weight: 700;
    font-size: 48px;
}
.main__content-price-btn {
    padding: 10px 25px;
    background: linear-gradient(99.04deg, #353535 0.88%, #000000 100%);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    border-radius: 25px;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 20px;
    border: none;
}

@media screen  and (max-width: 1024px){
    .categories__grid-item {
        width: calc(33% - 51px);
    }
}
@media screen  and (max-width: 768px) {
    .categories__grid-item {
        width: 100%;
    }
    .main__ {
        padding: 0 20px;
        margin-top: 20px;
        display: block;
        margin-bottom: 0;
    }
    .main__content {
        margin-left: 0;
    }
    .main__img {
        max-width: 100%;
    }
}
</style>