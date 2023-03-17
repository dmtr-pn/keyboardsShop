<template>
    <div class="not">
        <div class="not__icn">
            <svg width="141" height="140" viewBox="0 0 141 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M44.25 96.25H53V87.5H88V96.25H96.75V87.5H88V78.75H53V87.5H44.25V96.25ZM47.1666 70H55.9166V55.4167H47.1666V70ZM85.0833 70H93.8333V55.4167H85.0833V70ZM23.8333 116.667C20.625 116.667 17.8775 115.523 15.5908 113.237C13.3041 110.95 12.1627 108.204 12.1666 105V35C12.1666 31.7917 13.31 29.0442 15.5966 26.7575C17.8833 24.4708 20.6289 23.3294 23.8333 23.3333H58.8333L70.5 35H117.167C120.375 35 123.122 36.1433 125.409 38.43C127.696 40.7167 128.837 43.4622 128.833 46.6667V105C128.833 108.208 127.69 110.956 125.403 113.242C123.117 115.529 120.371 116.671 117.167 116.667H23.8333ZM23.8333 105H117.167V46.6667H23.8333V105Z" fill="black"/>
            </svg>
        </div>
        <div class="not__name">Пусто</div>
        <div class="not__text">Добавьте пару товаров</div>
    </div>
</template>

<script>
export default {
    name: "NoSome"
}
</script>

<style scoped>
.not {
    text-align: center;
    margin: 0 auto;
}
.not__name {
    font-weight: 700;
    font-size: 24px;
}
.not__text {
    font-weight: 400;
    font-size: 20px;
}
</style>