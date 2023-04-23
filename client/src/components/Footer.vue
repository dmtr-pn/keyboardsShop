<template>
    <div class="container">
        <div class="footer">
            <div class="footer-logo">
                <span style="font-weight: bold;color: #383B41;">Keyboards</span>
            </div>
            <div class="footer-info">
                <div class="footer-info__item">
                    <div class="item-name">Сообщество</div>
                    <div class="item-list">VK</div>
                    <div class="item-list">Telegram</div>
                </div>

                <div class="footer-info__item">
                    <div class="item-name">Сервис</div>
                    <div class="item-list">О нас</div>
                    <div class="item-list">Вакансии</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
.footer {
  padding: 50px 0;
  width: 100%;
  color: #383B41;
  display: flex;
  justify-content: space-between;
}
.footer-logo {
    font-size: 32px;
}
.footer-info {
    display: flex;
}
.footer-info__item {
    margin-left: 200px;
}
.item-name {
    font-size: 24px;
    font-weight: 700;
}
.item-list {
    font-size: 20px;
}
@media screen and (max-width: 1024px) {
.footer {
    flex-direction: column;
}
.footer-logo {
    margin: 20px auto;
}
.footer-info {
    justify-content: space-between;
}
.footer-info__item {
    margin-left: 0;
}
}
</style>