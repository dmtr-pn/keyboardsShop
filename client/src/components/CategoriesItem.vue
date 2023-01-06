<template>
    <div :class="`categories__grid-item ` + this.info.color">
        <div>
            <div class="categories__grid-item-name">{{this.info.name}}</div>
            <div class="categories__grid-item-category">{{this.info.category}}</div>
        </div>
        <div class="categories__grid-item-category-icn">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.33335 39.5833C7.18752 39.5833 6.20697 39.1757 5.39169 38.3604C4.57502 37.5437 4.16669 36.5625 4.16669 35.4166V14.5833C4.16669 13.4375 4.57502 12.4569 5.39169 11.6416C6.20697 10.825 7.18752 10.4166 8.33335 10.4166H41.6667C42.8125 10.4166 43.7938 10.825 44.6104 11.6416C45.4257 12.4569 45.8334 13.4375 45.8334 14.5833V35.4166C45.8334 36.5625 45.4257 37.5437 44.6104 38.3604C43.7938 39.1757 42.8125 39.5833 41.6667 39.5833H8.33335ZM16.6667 33.3333H33.3334V29.1666H16.6667V33.3333ZM10.4167 27.0833H14.5834V22.9166H10.4167V27.0833ZM16.6667 27.0833H20.8334V22.9166H16.6667V27.0833ZM22.9167 27.0833H27.0834V22.9166H22.9167V27.0833ZM29.1667 27.0833H33.3334V22.9166H29.1667V27.0833ZM35.4167 27.0833H39.5834V22.9166H35.4167V27.0833ZM10.4167 20.8333H14.5834V16.6666H10.4167V20.8333ZM16.6667 20.8333H20.8334V16.6666H16.6667V20.8333ZM22.9167 20.8333H27.0834V16.6666H22.9167V20.8333ZM29.1667 20.8333H33.3334V16.6666H29.1667V20.8333ZM35.4167 20.8333H39.5834V16.6666H35.4167V20.8333Z" fill="white"/>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    name: "CategoriesItem",
    props: ['info']
}
</script>

<style scoped>
.categories__grid-item {
    padding: 20px;
    border-radius: 25px;

    width: calc(25% - 55px);
    background-color: #eee;
    transition: .2s;
}
.categories__grid-item:hover {
    scale: 1.05;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transition: .2s;
    cursor: pointer;
}
.categories__grid-item.black {
    background: linear-gradient(312.91deg, #000000 0%, #353535 100%);
}
.categories__grid-item.pink {
    background: linear-gradient(312.91deg, #590D65 0%, #A4429A 100%);
}
.categories__grid-item.green{
    background: linear-gradient(312.91deg, #244100 0%, #79A442 100%);
}
.categories__grid-item.blue {
    background: linear-gradient(312.91deg, #00265F 0%, #4269A4 100%);
}

.categories__grid-item-name {
    font-weight: 700;
    font-size: 64px;
    color: #fff;
}
.categories__grid-item-category {
    font-weight: 400;
    font-size: 32px;
    color: #fff;
}
.categories__grid-item-category-icn {
    margin-top: 120px;
}
</style>